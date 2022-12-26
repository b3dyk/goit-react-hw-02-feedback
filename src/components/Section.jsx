import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.heading}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
