import hero from "../assets/Image with shapes.svg";
import classes from "./Developers.module.css";
import analytics from "../assets/Analytics Graphic.svg";
import service_img from "../assets/Service03.png";
import image from "../assets/image.png";
import secure_image from "../assets/secured payment.png";
const Developers = () => {
  return (
    <>
      <div className={classes.hero}>
        <div>
          <h1>
            The <span>API suite</span> to build amazing payments products
          </h1>
          <p>
            Copy Power up your payments with comprehensive APIs that help you
            create sophisticated payment flows and gain operational
            efficiencies.
          </p>
          <button className={classes.button}>View Documentation</button>
        </div>
        <img src={hero} alt="hero" />
      </div>
      <section className={classes.section}>
        <img src={analytics} alt="Analytics" />
        <aside>
          <span>
            <div className={classes.line}></div>Develop
          </span>
          <h1>Experience how our platform empowers developers</h1>
          <p>
            Spin up your own private sandbox and start developing in minutes.
            Explore our endpoints, make API requests, and quickly prototype your
            product.
          </p>
          <button className={classes.button}>View Documentation</button>
        </aside>
      </section>
      <section className={classes.section}>
        <div>
          <h1>More flexibility, less complexity</h1>
          <p>
            Your customers’ payment experience is fully automated so payments
            take place with minimal effort. Monitor transaction insights such as
            sales, customer information, success rates, and more!
          </p>
          <ul className={classes.list}>
            {[
              "Get alerts for important updates",
              "Setup payment links and Look up transactions",
              "Start with done-for-you account setup",
            ].map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <img src={service_img} alt="service image" />
      </section>
      <section className={classes.section}>
        <img src={image} alt="Created payment flows" />
        <div>
          <h1>Create automated payment flows</h1>
          <p>
            Copy Churn Buster takes the right action at the right times to
            preserve customer relationships, elevate your brand, and retain more
            customers long-term.
          </p>
        </div>
      </section>
      <section className={classes.section}>
        <div>
          <h1>Fraud Protection and Transaction Monitoring</h1>
          <p>
            PelPay combination of automated and manual fraud systems protect you
            from fraudulent transactions and associated chargeback claims.
          </p>
          <ul className={classes.list}>
            {[
              "Get alerts for important updates",
              "Setup payment links and Look up transactions",
            ].map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <img src={secure_image} alt="secure_image" />
      </section>
    </>
  );
};
export default Developers;
