import logo from '../../assets/images/logo.png';
import Container from '../Container';

import s from './Header.module.scss';

const MENU = [
  {
    id: 1,
    title: 'Menu 1',
    link: '#',
  },
  {
    id: 2,
    title: 'Menu 2',
    link: '#',
  },
  {
    id: 3,
    title: 'Menu 3',
    link: '#',
  },
  {
    id: 4,
    title: 'Menu 4',
    link: '#',
  },
];

const MenuItem = ({ title, link = '#' }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <Container className={s.headerWrap}>
          <div className={s.logo}>
            <img src={logo} alt="Triple Triad Logo" />
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
