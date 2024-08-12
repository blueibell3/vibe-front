'use client';
import React from 'react';
import styles from './PlayPauseButton.module.scss';

type Props = {
  onClick: () => void;
  isPlaying: boolean;
}

const PlayPauseButton = (props: Props) => {
  return (
    <button className={styles.controlButton} onClick={props.onClick}>
      <img
        src={props.isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
        alt={props.isPlaying ? 'Pause' : 'Play'}
        className={styles.icon}
        width={24}
        height={24}
      />
    </button>
  );
};

export default PlayPauseButton;
