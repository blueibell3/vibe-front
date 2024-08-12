'use client';
import React from 'react';

type Props = {
  onClick: () => void;
}

const PreviousButton = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <img src="/icons/previous.svg" alt="Previous" />
    </button>
  );
};

export default PreviousButton;
