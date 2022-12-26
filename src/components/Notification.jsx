import React from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
