import React, { useMemo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<
  React.PropsWithChildren<{
    href: string;
  }>
> = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = useMemo(
    () => pathname.slice(1).split('/')[0] === href.split('/')[1],
    [href, pathname]
  );

  return (
    <Link
      className={`py-1 font-medium text-lg ${
        isActive ? 'text-red-400' : 'text-gray-500'
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default NavLink;
