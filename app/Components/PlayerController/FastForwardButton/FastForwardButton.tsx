'use client';

type Props = {
  onClick: () => void;
}

const FastForwardButton = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <img src="/icons/scrollForward.svg" alt="Fast Forward" />
    </button>
  );
};

export default FastForwardButton;
