import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

import './styles.css';

export default function DefaultLayout({ children }) {
  return (
    <div className='default-wrapper'>
      <Header />
      <div className='default-content'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
