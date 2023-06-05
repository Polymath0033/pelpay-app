import classes from "./Home.module.css";
import {
  WebPayment,
  MobilePayment,
  PosPayment,
  ContactLess,
  BankPayment,
  UssdPayment,
} from "../components/icons/icons";
import img3 from "../assets/image3.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img4 from "../assets/image4.png";
import PelpayDiagram from "../assets/PelPay_Diagram.png";
import checkmark from "../assets/Checkmark.svg";
import AtmCard from "../assets/Classic.png";

const Home = () => {
  return (
    <>
      <article className={classes.hero}>
        <h1>Payments Made</h1>
        <h1>
          Easy With <span>Pelpay</span>
        </h1>
        <p>
          Pelpay helps businesses in Africa receive payments from their
          customers all over the world.
        </p>
        <div className={classes.buttons}>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </article>
      <div className={classes.flex}>
        <div>
          <i>
            <WebPayment />
          </i>
          <p>Web Payment</p>
        </div>
        <div>
          <i>
            <MobilePayment />
          </i>
          <p>Mobile Payment</p>
        </div>
        <div>
          <i>
            <PosPayment />
          </i>
          <p>POS Payment</p>
        </div>
        <div>
          <i>
            <ContactLess />
          </i>
          <p>Contactless/NFC Payment</p>
        </div>
        <div>
          <i>
            <BankPayment />
          </i>
          <p>Bank/Virtual Account Payments</p>
        </div>
        <div>
          <i>
            <UssdPayment />
          </i>
          <p>USSD Payments</p>
        </div>
      </div>
      <section className={classes.section}>
        <h1>
          Create seamless payment
          <br /> experiences for your customers
        </h1>
        <p>Pelpay is your one stop shop for your payment needs</p>
        <div className={classes.grid}>
          <article>
            <h3>Mobile Payment</h3>
            <p>
              Our payment gateway enables businesses accept cards and other
              forms of payment on their website or mobile app
            </p>
            <img src={img1} alt="image 1" />
          </article>
          <article>
            <h3>POS Payment</h3>
            <p>
              Customers can make payments seamlessly on instore purchases. We
              want to build a financial inclusive world with everyone, for
              everyone.
            </p>
            <img src={img2} alt="image 2" />
          </article>
          <article>
            <h3>E-commerce Payment Processing</h3>
            <p>
              Our payment gateway enables businesses accept cards and other
              forms of payment on their website or mobile app
            </p>
            <img src={img3} alt="image 3" />
          </article>
          <article>
            <h3>Online Web Payment Processing</h3>
            <p>
              Customers can make payments seamlessly on instore purchases. We
              want to build a financial inclusive world with everyone, for
              everyone.
            </p>
            <img src={img4} alt="image 4" />
          </article>
        </div>
      </section>
      <article className={classes.article}>
        <div>
          <h1>
            More Payment Options,
            <br /> More Distribution
          </h1>
          <p>
            PelPay provide your customers with the flexibility of multiple
            payment options
          </p>
          <ul>
            {[
              "Card Payments ( Visa, MasterCard, AMEX, union pay+)",
              "Bank Account",
              "Virtual Account",
              "Virtual Card",
              "QR Code",
            ].map((value, index) => (
              <li key={index}>
                <img src={checkmark} alt="checkmark" />
                {value}
              </li>
            ))}
          </ul>
        </div>
        <img src={PelpayDiagram} alt="Pelpay Diagram" />
      </article>
      <article className={classes.flex_2}>
        {[
          {
            title: "Team of Experts",
            paragraph: "A team of experts passionate about product management",
          },
          {
            title: "Friendly Consultant",
            paragraph: "A team of experts passionate about product management",
          },
          {
            title: "Best Solutions",
            paragraph: "A team  of experts passionate about product management",
          },
        ].map(({ title, paragraph }, index) => (
          <div key={index}>
            <h2 className={classes.num}>
              0<br /> {index + 1}
            </h2>
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </div>
        ))}
      </article>
      <article className={classes.card_div}>
        <div className={classes.img_}>
          <img src={AtmCard} alt="ATM Card" className={classes.atm} />
        </div>
        <div>
          <h1>Powering growth for African’s Unicorns</h1>
          <p>
            Pelpay is a growth engine for a new generation of innovative,
            forward-looking organizations operating in Africa.
            <br /> We hope that regardless of the transaction you are trying to
            perform, whether you’re stranded in the urban city setting or
            chilling with friends and want to pay bills or you reside in an
            extremely remote part of the continent in need of a banking
            experience, know that we see you and we’re building for you.
          </p>
        </div>
      </article>
    </>
  );
};
export default Home;
