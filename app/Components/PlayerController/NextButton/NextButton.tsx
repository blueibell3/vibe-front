'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentTrackIndexState, playlistState } from '@/app/state';

type Props = {
  onClick: () => void;
}

const NextButton = (props:Props) => {
  return (
    <button onClick={props.onClick}>
      <img src="/icons/next.svg" alt="Next" />
    </button>
  );
};

export default NextButton;
