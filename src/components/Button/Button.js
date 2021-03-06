import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({ light, small, onClick, className, children, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(s.root, className, { [s.light]: light, [s.small]: small })}>
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
  type: PropTypes.string,
};

export default Button;
