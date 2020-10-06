import PropTypes from 'prop-types';

import './styles.css';

export default function AuthLayout({ children }) {
  return children;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
