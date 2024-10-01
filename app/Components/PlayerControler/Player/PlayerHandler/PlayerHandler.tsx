'use client';

import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
    audioDurrationState,
    currentTimeState,
    isPlayingState,
    musicGlobalState,
    indexState,
    shouldAddTimeState,
    shouldRewindState,
    volumeState,
    mutedState,
    musicId,
    shuffleState,
} from '@/app/state';
import apiInstance from '@/app/ApiInstance';

const PlayerHandler = () => {
    const [musicSrc] = useRecoilState(musicGlobalState);
    const [isPlaying] = useRecoilState(isPlayingState);
    const [, setCurrentTime] = useRecoilState(currentTimeState);
    const [, setAudioDuration] = useRecoilState(audioDurrationState);
    const [globalId] = useRecoilState(musicId);
    const [index, setIndex] = useRecoilState(indexState);
    const [isShuffle] = useRecoilState(shuffleState);
    const [shouldAddTime, setShouldAddTime] =
        useRecoilState(shouldAddTimeState);
    const [shouldRewind, setShouldRewind] = useRecoilState(shouldRewindState);
    const [volume] = useRecoilState(volumeState);
    const [muted] = useRecoilState(mutedState);

    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTrackUrl, setCurrentTrackUrl] = useState<string | null>(null);
    const [lastCurrentTime] = useState<number>(0);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            if (audio) {
                setCurrentTime(audio.currentTime);
            }
        };

        const setDuration = () => {
            if (audio) {
                setAudioDuration(audio.duration);
            }
        };

        const handleEnded = () => {
            if (isShuffle) {
                playRandomTrack();
            } else {
                setIndex((prevIndex) => (prevIndex + 1) % musicSrc.length);
            }
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', setDuration);
            audio.addEventListener('ended', handleEnded);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', setDuration);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [setCurrentTime, setAudioDuration, setIndex, isShuffle, musicSrc]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            } else {
                audio.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        const newTrackUrl = musicSrc[index]?.audioUrl || '';

        if (audio && newTrackUrl && newTrackUrl !== currentTrackUrl) {
            setCurrentTrackUrl(newTrackUrl);
            audio.src = newTrackUrl;
            audio.load();
            if (isPlaying) {
                audio.play().catch((error) => {
                    console.error('Failed to play audio:', error);
                });
            }
        }
    }, [index, musicSrc, isPlaying, lastCurrentTime, currentTrackUrl]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (shouldAddTime) {
                audio.currentTime = Math.min(
                    audio.currentTime + 5,
                    audio.duration,
                );
                setShouldAddTime(false);
            } else if (shouldRewind) {
                audio.currentTime = Math.max(audio.currentTime - 5, 0);
                setShouldRewind(false);
            }
        }
    }, [shouldAddTime, shouldRewind, setShouldAddTime, setShouldRewind]);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.volume = muted ? 0 : volume / 100;
        }
    }, [volume, muted]);

    useEffect(() => {
        if (musicSrc[index]?.id) {
            apiInstance
                .post('/listen-records', { musicId: musicSrc[index].id })
                .catch((error) =>
                    console.error('Failed to post listen record:', error),
                );
        }
    }, [index, globalId, musicSrc]);

    const playRandomTrack = () => {
        if (musicSrc.length > 0) {
            const randomIndex = Math.floor(Math.random() * musicSrc.length);
            setIndex(randomIndex);
        }
    };

    return <audio ref={audioRef} />;
};

export default PlayerHandler;
