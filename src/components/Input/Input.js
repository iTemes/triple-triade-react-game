import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Input.module.scss";

const Input = ({ id, label, parentRef, name, type, className, onChange, value }) => {
  return (
    <div className={cn(s.root, className)}>
      <input ref={parentRef} type={type} name={name} id={id} required value={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
      <div className={s.bar} />
    </div>
  );
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
};

export default Input;
