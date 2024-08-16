'use client';

type Props = {
  onClick: () => void;
}

const RewindButton = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <img src="/icons/scrollBack.svg" alt="Rewind" />
    </button>
  );
};

export default RewindButton;
