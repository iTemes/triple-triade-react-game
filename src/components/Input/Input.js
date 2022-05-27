import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Input.module.scss";

// TODO React.ForwardRef or useImperativeHandle
const Input = ({ id, label, parentRef, name, type, className, onChange, value, required, alt }) => {
  return (
    <div className={cn(s.root, className, { [s.alt]: alt })}>
      <input
        ref={parentRef}
        type={type}
        name={name}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      <div className={s.bar} />
    </div>
  );
};

Input.defaultProps = {
  required: false,
  type: "text",
  alt: false,
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  parentRef: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  required: PropTypes.bool,
  alt: PropTypes.bool,
};

export default Input;
