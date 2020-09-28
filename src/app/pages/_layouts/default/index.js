import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function DefaultLayout({ children }) {
  return children;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
