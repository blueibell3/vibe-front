'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { isPlayingState } from '@/app/state';
import styles from './PlayPauseButton.module.scss';

interface PlayPauseButtonProps {
  onClick: () => void;
  isPlaying: boolean;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ onClick, isPlaying }) => {
  return (
    <button className={styles.controlButton} onClick={onClick}>
      <img
        src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
        alt={isPlaying ? 'Pause' : 'Play'}
        className={styles.icon} width={24} height={24}
      />
    </button>
  );
};

export default PlayPauseButton;
