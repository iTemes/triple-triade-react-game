// const toggleEl = document.querySelector('.toggle');
// const closeEl = document.querySelector('.close');
// const containerEl = document.querySelector('.container');

// toggleEl.addEventListener('click', () => {
//     toggleEl.classList.add('active');
//     containerEl.classList.add('active');
// });

// closeEl.addEventListener('click', () => {
//     toggleEl.classList.remove('active');
//     containerEl.classList.remove('active');
// });
import { useState } from "react";

import s from "./Login.module.scss";
import cn from "classnames";

import logo from "./assets/logo.png";
import { ReactComponent as Pen } from "./assets/icon-pen.svg";

import Footer from "../../components/Footer";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isRegister, setIsRegister] = useState(false);

  const handleInputChange = ({ target: { name, value } }) => {
    console.log("##target", name, value);
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <main className={s.root}>
      <div className={s.headerLogo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={cn(s.container, { [s.active]: isRegister })}>
        <div className={s.card} />
        <div className={s.card}>
          <button className={s.toggle}>
            <Pen />
          </button>
          <h1 className={s.title}>{isRegister ? "Register" : "Login"}</h1>
          <form>
            <div className={s.inputContainer}>
              <input
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
            <div className={s.inputContainer}>
              <input
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
                <span>{isRegister ? "Register" : "Go"}</span>
              </button>
            </div>
          </form>
        </div>
        {/* <div className={cn(s.card, s.alt)}>
          <button className={s.toggle}>
            <Pen />
          </button>
          <h1 className={s.title}>
            Register
            <div className={s.close} />
          </h1>
          <form>
            <div className={s.inputContainer}>
              <input
                type="email"
                name="email"
                id="#signup-email"
                required
                value={form.email}
                onChange={handleInputChange}
              />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar} />
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
            <div className={s.inputContainer}>
              <input
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
        </div> */}
      </div>
      <Footer />
    </main>
  );
};

export default Login;
