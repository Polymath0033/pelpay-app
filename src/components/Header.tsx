import logo from "../assets/logo.svg";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeLink = (isActive: boolean) => {
    return isActive === true ? classes.active : "";
  };
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img src={logo} alt="Pelpay" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className={({ isActive }) => activeLink(isActive)}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => activeLink(isActive)}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/developers"
            className={({ isActive }) => activeLink(isActive)}
          >
            Developers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/compliances"
            className={({ isActive }) => activeLink(isActive)}
          >
            Compliances
          </NavLink>
        </li>
      </ul>
      <div className={classes.buttons}>
        <button>Login</button>
        <button>Sign up</button>
        <div className={classes.tab}>
          {[1, 2, 3].map((val) => (
            <div key={val}></div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
