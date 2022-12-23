import React from 'react';

const btnsMap = [
  { id: 'good', name: 'Good' },
  { id: 'neutral', name: 'Neutral' },
  { id: 'bad', name: 'Bad' },
];

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      {btnsMap.map(({ id, name }) => {
        return (
          <button key={id} type="button" name={id} onClick={onLeaveFeedback}>
            {name}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
