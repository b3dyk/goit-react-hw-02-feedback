import React from 'react';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
