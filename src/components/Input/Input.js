import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Input.module.scss";

// TODO React.ForwardRef or useImperativeHandle
const Input = ({ id, label, parentRef, className, onChange, alt, ...inputProps }) => {
  const { name, type = "text", value, required = false } = { ...inputProps };
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
      <label htmlFor={`#${id}`}>{label}</label>
      <div className={s.bar} />
    </div>
  );
};

Input.defaultProps = {
  alt: false,
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  parentRef: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  alt: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default Input;
