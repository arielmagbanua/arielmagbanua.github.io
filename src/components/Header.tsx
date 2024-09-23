import classNames from 'classnames';
import { useRef, useState } from 'react';
import { MdDarkMode, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const verticalNavRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const verticalNavigationClasses = classNames(
    'flex-col items-stretch justify-stretch space-y-2 text-lg tracking-wide h-0 overflow-hidden',
    'md:flex sm:flex xs:flex 2xs:flex',
    'transition-all duration-500'
  );

  const toggleNavDropdown = () => {
    const header = headerRef.current;
    if (header) {
      if (header.classList.contains('max-h-20')) {
        header.classList.remove('max-h-20');
        header.classList.add('max-h-48');
      } else {
        header.classList.remove('max-h-48');
        header.classList.add('max-h-20');
      }
    }

    const verticalNav = verticalNavRef.current;

    if (verticalNav) {
      if (verticalNav.classList.contains('h-32')) {
        verticalNav.classList.remove('h-32');
        verticalNav.classList.add('h-0');
      } else {
        verticalNav.classList.remove('h-0');
        verticalNav.classList.add('h-32');
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className="flex flex-col items-stretch justify-center py-4 xl:px-20 lg:px-20 md:px-20 sm:px-8 xs:px-8 2xs:px-8 max-h-20 bg-surface-container dark:bg-surface-container-dark text-on-surface dark:text-on-surface-dark shadow-sm overflow-hidden transition-all duration-500"
    >
      <div className="flex items-center justify-between py-4">
        <div className="flex items-baseline">
          <h1 className="text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl 2xs:text-2xl tracking-wider hover:tracking-wide hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark cursor-pointer transition-all duration-500">
            <Link to="/">
              Ariel Magbanua<span>.</span>
            </Link>
          </h1>
        </div>
        <div className="text-right w-100 flex items-center justify-end 2xl:hidden xl:hidden lg:hidden md:visible sm:visible xs:visible 2xs:visible">
          <MdMenu
            onClick={toggleNavDropdown}
            className="text-3xl cursor-pointer"
          />
        </div>
        <nav className="flex items-center justify-end space-x-4 text-lg tracking-wide 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden 2xs:hidden">
          <Link
            className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <MdDarkMode className="cursor-pointer hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark" />
        </nav>
      </div>
      <nav ref={verticalNavRef} className={verticalNavigationClasses}>
        <Link
          className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <MdDarkMode className="cursor-pointer hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark" />
      </nav>
    </header>
  );
}
