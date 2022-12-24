import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const btnsMap = [
  { id: 'good', name: 'Good' },
  { id: 'neutral', name: 'Neutral' },
  { id: 'bad', name: 'Bad' },
];

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.wrapper}>
      {btnsMap.map(({ id, name }) => {
        return (
          <button
            className={css.button}
            key={id}
            type="button"
            name={id}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
