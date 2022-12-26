import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const options = { good, neutral, bad };
  return (
    <ul className={css.wrapper}>
      {Object.keys(options).map(item => (
        <li key={item}>
          <p className={css.optionText}>
            {item}: <span className={css.value}>{options[item]}</span>
          </p>
        </li>
      ))}

      <li>
        <p className={css.text}>
          Total: <span className={css.value}>{total}</span>
        </p>
      </li>
      <li>
        <p className={css.text}>
          Positive feedback:{' '}
          <span className={css.value}>{positivePercentage + '%'}</span>
        </p>
      </li>
    </ul>
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
