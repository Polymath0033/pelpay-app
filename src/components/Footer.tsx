import classes from "./Footer.module.css";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.cta}>
        <h5>We care whenever you need it</h5>
        <div className="buttons">
          <button>Book a session</button>
          <button>Contact us</button>
        </div>
      </div>
      <div className={classes.div_}>
        <div>
          <img src={logo} alt="Pelpay" />
          <p>Info@pelpay.africa</p>
          <p>(704) 555-0127</p>
        </div>
        <div className={classes.list}>
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Compliances</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Developers</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Term of use</li>
          </ul>
        </div>
      </div>
      <p className={classes.last_p}>© 2021 PelPay, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
