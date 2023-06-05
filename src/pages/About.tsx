import classes from "./About.module.css";
import hero from "../assets/Browser.png";
const About = () => {
  return (
    <>
      <div className={classes.hero}>
        <h1>Enabling the New Wave of Africa Commerce</h1>
        <img src={hero} alt="hero-image" />
      </div>
    </>
  );
};
export default About;
