import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return(
        <div className="privacy-policy">
            <h1>Privacy Policy</h1>
            <p>We are committed to protecting your personal data and privacy.</p>
            <section>
        <h2>Information Collection</h2>
        <p>
          We collect your email, phone number, and company details to enhance
          your experience on our platform.
        </p>
      </section>
      <section>
        <h2>How We Use Your Data</h2>
        <p>
          Your data is used to provide services, improve user experience, and
          comply with regulations.
        </p>
      </section>
      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to request data deletion or modification at any
          time.
        </p>
      </section>

        </div>

    );
};
export default PrivacyPolicy;