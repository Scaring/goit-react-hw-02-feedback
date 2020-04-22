import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <Fragment>
      <h2>{title}</h2>
      {children}
    </Fragment>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
