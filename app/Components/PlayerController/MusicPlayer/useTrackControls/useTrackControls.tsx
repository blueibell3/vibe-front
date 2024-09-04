import { useRecoilState, useRecoilValue } from 'recoil';
import {
    currentTrackIndexState,
    isPlayingState,
    isFullscreenState,
    tabletFullscreenState,
    playlistState,
    volumeState,
    isMutedState,
} from '@/app/state';

const useTrackControls = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useRecoilState(currentTrackIndexState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [isFullscreen, setIsFullscreen] = useRecoilState(isFullscreenState);
    const [tabletFullscreen, setTabletFullscreen] = useRecoilState(tabletFullscreenState);
    const [volume, setVolume] = useRecoilState(volumeState);
    const [isMuted, setIsMuted] = useRecoilState(isMutedState);
    const playlist = useRecoilValue(playlistState);

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handlePrevious = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handleFastForward = (audioRef: React.RefObject<HTMLAudioElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 5);
        }
    };

    const handleRewind = (audioRef: React.RefObject<HTMLAudioElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen((prev) => !prev);
    };

    const toggleTabletFullscreen = () => {
        setTabletFullscreen((prev) => !prev);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
    };

    const handleMuteToggle = () => {
        setIsMuted((prev) => !prev);
    };

    return {
        currentTrackIndex,
        isPlaying,
        isFullscreen,
        tabletFullscreen,
        volume,
        isMuted,
        handlePlayPause,
        handlePrevious,
        handleNext,
        handleFastForward,
        handleRewind,
        toggleFullscreen,
        toggleTabletFullscreen,
        handleVolumeChange,
        handleMuteToggle,
    };
};

export default useTrackControls;
