import classes from "./About.module.css";
import hero from "../assets/Browser.png";
import img1 from "../assets/about-img.png";
import img2 from "../assets/about-img2.png";
import supportive from "../assets/supportive.svg";
import innovative from "../assets/innovative.svg";
import authenticity from "../assets/authenticity.svg";
import ownership from "../assets/ownership.svg";
const About = () => {
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.text}>
          <h1>
            Enabling the New Wave
            <br /> of Africa Commerce
          </h1>
          <p>
            Pelpay builds technology to help Africa’s best businesses grow -
            from new startups, to market leaders launching new business models.
          </p>
        </div>
        <img src={hero} alt="hero-image" />
      </div>
      <section className={classes.section}>
        <h1 className={classes.h1}>
          Copy Connecting <span>African Commerce</span> to the Rest of the World
        </h1>
        <p>
          Pelpay’s vision is to make it seamless for Africans to build
          businesses that can transact with anyone across the world
        </p>
        <div className={classes.img}>
          <img src={img1} alt="A man explain something to lady" />
          <img src={img2} alt="A man explain something to lady" />
        </div>
      </section>
      <article className={classes.article}>
        <ul className={classes.list}>
          <li>
            <img src={ownership} alt="ownership icon" />
            <h4>Ownership</h4>
            <p>
              Ownership underpin our spirit of ownership, and commitment to
              drive mission forward.
            </p>
          </li>
          <li>
            <img src={supportive} alt="supportive icon" />
            <h4>Supportive</h4>
            <p>
              We don’t stop until we nail it. Then we keep going. We stand
              together to stand tall.
            </p>
          </li>
          <li>
            <img src={innovative} alt="innovative icon" />
            <h4>Innovative</h4>
            <p>
              Creating a future-proof digital payment platform for Africa takes
              a trailblazing team —
            </p>
          </li>

          <li>
            <img src={authenticity} alt="authenticity icon" />
            <h1>Authenticity</h1>
            <p>
              We believe that every person matters and we all take a transparent
              view on the status quo.
            </p>
          </li>
        </ul>
        <aside>
          <h2>Payment. We get it Absolutly!</h2>
          <p className={classes.paragraph}>
            The dedication to our products shows. That’s why we’re so stoked to
            support you with exactly the kind of payment solutions you’re
            looking for.
          </p>
          <div className={classes.flex}>
            <div>
              <h1>300M+</h1>
              <p>Transactions every day</p>
            </div>
            <div>
              <h1>1,000+</h1>
              <p>African businesses around the world</p>
            </div>
          </div>
          <button>View Documentation</button>
        </aside>
      </article>
    </>
  );
};
export default About;
