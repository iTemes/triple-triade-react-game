import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useMatch } from 'react-router-dom';

import cn from 'classnames';

import logo from '../../assets/images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';

const MENU = [
  {
    id: 1,
    title: 'Main',
    link: '/',
  },
  {
    id: 2,
    title: 'Characters',
    link: '/characters',
  },
  {
    id: 3,
    title: 'About',
    link: '/about',
  },
  {
    id: 4,
    title: 'Contacts',
    link: '/contacts',
  },
];
const MENU_OFFSET_TOP = 60;
const MenuItem = ({ title, link = '#' }) => {
  return (
    <li>
      <NavLink to={link} className={({ isActive }) => cn({ [s.active]: isActive })}>
        {title}
      </NavLink>
    </li>
  );
};

const Header = () => {
  const [isSmallMenu, setIsSmallMenu] = useState(false);
  const navigate = useNavigate();
  const match = useMatch('/');

  const handleLogoClick = () => {
    if (match) return;

    navigate('/');
  };

  useEffect(() => {
    function handleWindowScroll() {
      window.scrollY > MENU_OFFSET_TOP ? setIsSmallMenu(true) : setIsSmallMenu(false);
    }
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);
  return (
    <header className={s.root}>
      <div className={cn(s.header, { [s.small]: isSmallMenu })}>
        <Container className={s.headerWrap}>
          <div className={s.logo}>
            <img src={logo} alt="Triple Triad Logo" onClick={handleLogoClick} />
          </div>
          <ul className={s.nav}>
            {MENU.map(({ id, title, link }) => (
              <MenuItem key={id} title={title} link={link} />
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
