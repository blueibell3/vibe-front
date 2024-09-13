'use client';

type Props = {
  onClick: () => void;
}

const NextButton = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <img src="/icons/next.svg" alt="Next" />
    </button>
  );
};

export default NextButton;
