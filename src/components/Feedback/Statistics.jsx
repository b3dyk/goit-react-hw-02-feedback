import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return good || neutral || bad ? (
    <div className={css.wrapper}>
      <p className={css.text}>
        Good: <span className={css.value}>{good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.value}>{bad}</span>
      </p>
      <p className={css.text}>
        Total: <span className={css.value}>{total}</span>
      </p>
      <p className={css.text}>
        Positive feedback:{' '}
        <span className={css.value}>{positivePercentage + '%'}</span>
      </p>
    </div>
  ) : (
    <div className={css.wrapper}>
      <p className={css.text}>No feedback given</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
