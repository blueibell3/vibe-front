import { useEffect, useRef, useState } from 'react';
import { playlistState, currentTrackIndexState } from '@/app/state';
import { useRecoilState, useRecoilValue } from 'recoil';

const useAudioPlayer = (url: string | undefined, volume: number, isMuted: boolean) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const playlist = useRecoilValue(playlistState);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (!audioElement) return;

        const handleTimeUpdate = () => {
            const time = audioElement.currentTime;
            if (isFinite(time)) {
                setCurrentTime(time);
            }
        };

        const handleLoadedMetadata = () => {
            const durationValue = audioElement.duration;
            if (isFinite(durationValue)) {
                setDuration(durationValue);
                setCurrentTime(audioElement.currentTime); // Also check if this value is finite
            }
        };

        const handleEnded = () => {
            setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        };

        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.addEventListener('ended', handleEnded);

        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.removeEventListener('ended', handleEnded);
        };
    }, [playlist, setCurrentTrackIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = url ?? '';
            audioRef.current.load();
            audioRef.current.pause();
        }
    }, [url]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume / 100;
        }
    }, [volume, isMuted]);

    return { audioRef, duration, currentTime };
};

export default useAudioPlayer;
