import classNames from 'classnames';
import { useState } from 'react';
import { MdDarkMode, MdMenu } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const headerClasses = classNames(
    'flex flex-col items-stretch justify-center py-4 max-h-20 bg-surface-dim dark:bg-surface-dim-dark text-on-surface dark:text-on-surface-dark shadow-sm overflow-hidden transition-all duration-500',
    'xl:px-20',
    'lg:px-20',
    'md:px-20',
    'sm:px-8',
    'xs:px-8',
    '2xs:px-8',
    {
      'max-h-48': navOpen,
    }
  );

  const verticalNavigationClasses = classNames(
    'flex-col items-stretch justify-stretch space-y-2 text-lg tracking-wide h-0 overflow-hidden',
    'xl:hidden',
    'lg:hidden',
    'md:flex',
    'sm:flex',
    'xs:flex',
    '2xs:flex',
    'transition-all duration-500',
    {
      'h-36': navOpen,
    }
  );

  const toggleNavDropdown = () => {
    setNavOpen(!navOpen);
  };

  const navigateHandleClick = (to: string) => {
    navigate(`/${to}`);
    setNavOpen(false);
  };

  const handleThemeClick = () => {
    // TODO: change the theme here
    setNavOpen(false);
  };

  return (
    <header className={headerClasses}>
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
            className="text-2xl cursor-pointer"
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
          <MdDarkMode className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark cursor-pointer" />
        </nav>
      </div>
      <nav className={verticalNavigationClasses}>
        <p
          onClick={() => navigateHandleClick('about')}
          className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark cursor-pointer"
        >
          About
        </p>
        <p
          onClick={() => navigateHandleClick('portfolio')}
          className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark cursor-pointer"
        >
          Portfolio
        </p>
        <MdDarkMode
          onClick={handleThemeClick}
          className="hover:text-on-surface-variant dark:hover:text-on-surface-variant-dark cursor-pointer"
        />
      </nav>
    </header>
  );
}
