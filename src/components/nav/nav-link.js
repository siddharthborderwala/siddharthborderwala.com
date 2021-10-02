import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavLink = ({ href, isActive, children }) => (
  <Link
    className={`py-1 font-medium text-lg ${
      isActive ? 'text-red-400' : 'text-gray-500'
    }`}
    to={href}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavLink;
