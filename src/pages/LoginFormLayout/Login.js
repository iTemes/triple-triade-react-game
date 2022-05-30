import { useEffect, useRef, useState } from "react";

import s from "./Login.module.scss";
import cn from "classnames";

import logo from "./assets/logo.png";
import { ReactComponent as Pen } from "./assets/icon-pen.svg";

import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";

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

    if (name === "repeatPassword") {
      checkPasswordValidity(value);
    }
  };

  const checkPasswordValidity = (value) => {
    const error = form.password !== value ? "I am expecting an equal password!" : "";
    repeatPassword.current.setCustomValidity(error);
  };

  const toggleRegister = () => {
    setIsRegister((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form", form); // TODO Send Form

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
            <Input
              type="password"
              name="password"
              label="Password"
              id="#signup-password"
              required
              value={form.password}
              onChange={handleInputChange}
            />

            <div className={s.buttonContainer}>
              <Button>
                <span>Go</span>
              </Button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)}>
          <button className={cn(s.toggle, { [s.active]: isRegister })} onClick={toggleRegister}>
            <Pen />
          </button>
          <h1 className={s.title}>
            Register
            <div className={s.close} onClick={toggleRegister} />
          </h1>
          <form onSubmit={handleFormSubmit}>
            <Input
              className={s.inputContainer}
              parentRef={emailRegister}
              type="email"
              label="Email"
              name="email"
              id="#register-email"
              required
              value={form.email}
              onChange={handleInputChange}
              alt
            />
            <Input
              className={s.inputContainer}
              type="password"
              name="password"
              label="Password"
              id="#register-password"
              required
              value={form.password}
              onChange={handleInputChange}
              alt
            />
            <Input
              className={cn(s.inputContainer)}
              parentRef={repeatPassword}
              type="password"
              name="repeatPassword"
              label="Repeat Password"
              id="#signup-repeat-password"
              required
              value={form.repeatPassword}
              onChange={handleInputChange}
              alt
            />
            <div className={s.buttonContainer}>
              <Button>
                <span>Register</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
