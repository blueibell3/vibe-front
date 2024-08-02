'use client';
import React from 'react';

interface FastForwardButtonProps {
  onClick: () => void;
}

const FastForwardButton: React.FC<FastForwardButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src="/icons/scrollForward.svg" alt="Fast Forward" />
    </button>
  );
};

export default FastForwardButton;