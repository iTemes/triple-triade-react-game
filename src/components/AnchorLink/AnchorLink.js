import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as AnchorIcon } from '../../assets/icons/link_icon.svg';

import s from './AnchorLink.module.scss';

const AnchorLink = ({ hashLink, className, children }) => {
  return (
    <a href={`#${hashLink}`} className={cn(s.root, className)}>
      {children}
      <AnchorIcon />
    </a>
  );
};

AnchorLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hashLink: PropTypes.string,
};

export default AnchorLink;
