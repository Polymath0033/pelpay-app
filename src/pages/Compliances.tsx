import images from "../assets/Images.png";
import classes from "./Compliance.module.css";
const Compliances = () => {
  return (
    <>
      <div className={classes.hero}>
        <h1>
          PelPay maintains a <span>bank-level security standards</span>of
          compliance
        </h1>
        <p>
          We understand the importance of security and that we have proven by
          complying with the industry’s security standards
        </p>
      </div>
      <div className={classes.image_}>
        <img src={images} alt="image" />
      </div>
      <article className={classes.article}>
        <h1>ISO 27001 Certification</h1>
        <p>
          ChamsSwitch is ISO 27001 certified. This means that we are in
          alignment with the framework of standards on how information and data
          should be managed
        </p>
        <h1>PCI DSS Compliant</h1>
        <p>
          This means that ChamsSwitch has satisfied the highest level of
          security Audit. PelPay has been audited by an independent PCI
          Qualified Security Assessor (QSA) and we're PCI DSS 3.2 compliant as a
          Level 1 Service Provider (loosely referred to as PCI Level 1
          compliance).
        </p>
      </article>
    </>
  );
};
export default Compliances;
