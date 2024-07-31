'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentTrackIndexState, playlistState } from '@/app/state';

interface PreviousButtonProps {
  onClick: () => void;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src="/icons/previous.svg" alt="Previous" />
    </button>
  );
};

export default PreviousButton;
