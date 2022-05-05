import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import cn from 'classnames';

import Header from '../Header';
import Footer from '../Footer';

import s from './Layout.module.scss';

const Layout = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
