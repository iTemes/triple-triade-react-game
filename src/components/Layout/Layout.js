import PropTypes from 'prop-types';
import { Outlet, useMatch } from 'react-router-dom';

import cn from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

import s from './Layout.module.scss';

const Layout = ({ className }) => {
  const match = useMatch('/');

  return (
    <div className={cn(s.root, className)}>
      <Header />
      <main className={s.main}>
        {match ? (
          <Outlet />
        ) : (
          <Container>
            <Outlet />
          </Container>
        )}
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
