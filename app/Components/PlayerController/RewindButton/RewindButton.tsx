'use client';
import React from 'react';

interface RewindButtonProps {
  onClick: () => void;
}

const RewindButton: React.FC<RewindButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src="/icons/scrollBack.svg" alt="Rewind" />
    </button>
  );
};

export default RewindButton;
