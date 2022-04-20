import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './Button.module.scss';

const Button = ({ light, small, onClick, className, children }) => {
  return (
    <button onClick={onClick} className={cn(s.root, className, { [s.light]: light, [s.small]: small })}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  light: false,
};

Button.propTypes = {
  light: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
