import { useEffect, useRef, useState } from "react";

import s from "./Login.module.scss";
import cn from "classnames";

import logo from "./assets/logo.png";
import { ReactComponent as Pen } from "./assets/icon-pen.svg";

import Footer from "../../components/Footer";
import Input from "../../components/Input";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isRegister, setIsRegister] = useState(false);

  const emailLogin = useRef(null);
  const emailRegister = useRef(null);
  const repeatPassword = useRef(null);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    const isRepeatPassword = name === "repeatPassword";
    const isPasswordsEqual = form.password !== value;

    if (isRegister && isRepeatPassword && isPasswordsEqual) {
      repeatPassword.current.setCustomValidity("I am expecting an equal password!");
    } else {
      repeatPassword.current.setCustomValidity("");
    }
  };

  const handleOpenRegister = () => {
    setIsRegister(true);
  };

  const handleCloseRegister = () => {
    setIsRegister(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);

    setForm({ email: "", password: "", repeatPassword: "" });
  };

  const focusCurrentInput = (ref) => {
    setTimeout(() => {
      ref.current.focus();
    }, 500);
  };

  useEffect(() => {
    isRegister ? focusCurrentInput(emailRegister) : focusCurrentInput(emailLogin);
  }, [isRegister]);

  return (
    <main className={s.root}>
      <div className={s.headerLogo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={cn(s.container, { [s.active]: isRegister })}>
        <div className={s.card} />
        <div className={s.card}>
          <h1 className={s.title}>{isRegister ? "Register" : "Login"}</h1>
          <form onSubmit={handleFormSubmit}>
            <Input
              parentRef={emailLogin}
              type="email"
              label="Email"
              name="email"
              id="#signup-email"
              required
              value={form.email}
              onChange={handleInputChange}
            />
            <div className={s.inputContainer}>
              <input
                ref={emailLogin}
                type="email"
                name="email"
                id="#signup-email"
                required
                value={form.email}
                onChange={handleInputChange}
              />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                name="password"
                id="#signup-password"
                required
                value={form.password}
                onChange={handleInputChange}
              />
              <label htmlFor="#signup-password">Password</label>
              <div className={s.bar} />
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Go</span>
              </button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)}>
          <button className={cn(s.toggle, { [s.active]: isRegister })} onClick={handleOpenRegister}>
            <Pen />
          </button>
          <h1 className={s.title}>
            Register
            <div className={s.close} onClick={handleCloseRegister} />
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className={s.inputContainer}>
              <input
                ref={emailRegister}
                type="email"
                name="email"
                id="#register-email"
                required
                value={form.email}
                onChange={handleInputChange}
              />
              <label htmlFor="#registeremail">Email</label>
              <div className={s.bar} />
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                name="password"
                id="#register-password"
                required
                value={form.password}
                onChange={handleInputChange}
              />
              <label htmlFor="#register-password">Password</label>
              <div className={s.bar} />
            </div>
            <div className={s.inputContainer}>
              <input
                ref={repeatPassword}
                type="password"
                name="repeatPassword"
                id="#signup-repeat-password"
                required
                value={form.repeatPassword}
                onChange={handleInputChange}
              />
              <label htmlFor="#signup-repeat-password">Repeat Password</label>
              <div className={s.bar} />
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
