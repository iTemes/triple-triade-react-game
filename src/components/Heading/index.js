import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import s from './Heading.module.scss';

const Heading = ({ id, level = 1, className, black, underline, children }) => {
  const el = `h${level}`;
  return React.createElement(
    el,
    {
      className: cn(s.root, className, s[`level${level}`], { [s.colorBlack]: black, [s.underline]: underline }),
      id: id,
    },
    children
  );
};

Heading.defaultProps = {
  black: false,
  underline: false,
};

Heading.propTypes = {
  id: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  className: PropTypes.string,
  underline: PropTypes.bool,
  black: PropTypes.bool,
  children: PropTypes.node,
};

export default Heading;
