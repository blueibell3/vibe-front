'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentTrackIndexState, playlistState } from '@/app/state';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src="/icons/next.svg" alt="Next" />
    </button>
  );
};

export default NextButton;
