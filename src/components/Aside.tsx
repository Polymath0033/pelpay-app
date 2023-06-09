import classes from "./Aside.module.css";
import pelplay from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Aside: React.FC<{ toggleTab: () => void }> = ({ toggleTab }) => {
  const activeLink = (isActive: boolean) => {
    return isActive === true ? classes.active : "";
  };
  const navigate = () => {
    toggleTab();
  };
  return (
    <aside className={classes.aside}>
      <div className={classes.top}>
        <img src={pelplay} alt="Pelpay Logo" />
        <button onClick={toggleTab}>&#10006;</button>
      </div>
      <div className={classes.buttons}>
        <button>Login</button>
        <button>Signup</button>
      </div>
      <ul className={classes.list}>
        {[
          { name: "Home", to: "/" },
          { name: "Features", to: "/features" },
          { name: "About us", to: "/about-us" },
          { name: "Developers", to: "/developers" },
          { name: "Compliances", to: "/compliances" },
        ].map(({ name, to }) => (
          <li key={name} onClick={navigate}>
            <NavLink className={({ isActive }) => activeLink(isActive)} to={to}>
              {name}
            </NavLink>
          </li>
        ))}
        {/* <li>
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
        </li> */}
      </ul>
    </aside>
  );
};
export default Aside;
