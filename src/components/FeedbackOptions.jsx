import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapper}>
      {options.map(item => {
        return (
          <button
            className={css.button}
            key={item}
            type="button"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
