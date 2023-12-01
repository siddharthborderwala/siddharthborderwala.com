import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<
  React.PropsWithChildren<{
    href: string;
    onClick?: () => void;
  }>
> = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const isActive = useMemo(
    () => pathname.slice(1).split('/')[0] === href.split('/')[1],
    [href, pathname]
  );

  return (
    <Link
      className={`py-1 font-serif text-xl sm:text-lg transition-all ${
        isActive ? '!text-red-400' : 'text-gray-700'
      }`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
