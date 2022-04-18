import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import s from './Text.module.scss';

const Text = ({ element, className, strong, italic, disabled, children }) => {
  return React.createElement(
    element,
    {
      className: cn(s.root, className, { [s.strong]: strong, [s.italic]: italic, [s.disabled]: disabled }),
    },
    children
  );
};

Text.defaultProps = {
  element: 'div',
};

Text.propTypes = {
  element: PropTypes.oneOf(['p', 'div', 'span']),
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Text;
