import s from './Header.module.css';
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

const renderMenuItem = ({ id, title, link = '#' }) => {
  return (
    <li key={id}>
      <a href={link}>{title}</a>
    </li>
  );
};

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.logo}></div>
          <ul className={s.nav}>{MENU.map((item) => renderMenuItem(item))}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
