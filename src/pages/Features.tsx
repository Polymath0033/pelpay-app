//import hero_image from "../assets/Image.png";
import classes from "./Features.module.css";
import search_yellow from "../assets/search_yellow.svg";
import search_blue from "../assets/search_blue.svg";
import hand_green from "../assets/hand_green.svg";
import calendar_icon from "../assets/calendar_green.svg";
import hand_blue from "../assets/hand_blue.svg";

const Features = () => {
  return (
    <>
      <div className={classes.hero}>
        <h1>Helping businesses digitize their payment processes</h1>
        <p>
          Pelpay is a product of ChamsSwitch Limited. ChamsSwitch is a financial
          payment solutions and transactions switching company on a mission to
          help businesses in Africa digitize their payment process with ease.
        </p>
      </div>
      {/* <img src={hero_image} alt="hero image" className={classes.hero_image} /> */}

      <section className={classes.section}>
        <h2>Features and Services</h2>
        <div className={classes.grid}>
          <div>
            <img src={search_yellow} alt="search icon" />
            <h5>Easy and Convenient payment methods</h5>
            <p>
              Provide your customers with the flexibility of multiple payment
              options
            </p>
            <h1>1</h1>
          </div>
          <div>
            <img src={hand_blue} alt="hand icon" />
            <h5>Seamless payment experiences</h5>
            <p>Make shopping fun for your customers by Simplifying payments</p>
            <h1>2</h1>
          </div>
          <div>
            <img src={calendar_icon} alt="calendar icon" />
            <h5>Accurate transaction reporting platform</h5>
            <p>
              Generate transaction report for data analysis and reconciliation
              purposes
            </p>
            <h1>3</h1>
          </div>
          <div>
            <img src={search_blue} alt="calendar icon" />
            <h5>Easy integration to merchant's site</h5>
            <p>Our APIs are easy for developers to consume</p>
            <h1>4</h1>
          </div>
          <div>
            <img src={hand_green} alt="hand icon" />
            <h5>Fraud detection system</h5>
            <p>
              We have in place a robust system that protects you from fraudulent
              transactions
            </p>
            <h1>5</h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
