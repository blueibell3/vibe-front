import { useEffect, useRef, useState } from 'react';
import { playlistState, currentTrackIndexState } from '@/app/state';
import { useRecoilState } from 'recoil';

const useAudioPlayer = (url: string | undefined, volume: number, isMuted: boolean) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [playlist] = useRecoilState(playlistState);

    useEffect(() => {
        if (audioRef.current) {
            const handleTimeUpdate = () => setCurrentTime(audioRef.current!.currentTime);
            const handleLoadedMetadata = () => {
                if (audioRef.current) {
                    setDuration(audioRef.current.duration);
                    setCurrentTime(audioRef.current.currentTime);
                }
            };

            const handleEnded = () => {
                setCurrentTrackIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % playlist.length;
                    return nextIndex;
                });
            };

            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
            audioRef.current.addEventListener('ended', handleEnded);

            return () => {
                audioRef.current!.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current!.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioRef.current!.removeEventListener('ended', handleEnded);
            };
        }
    }, [playlist, setCurrentTrackIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = url ?? '';
            audioRef.current.load();
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
