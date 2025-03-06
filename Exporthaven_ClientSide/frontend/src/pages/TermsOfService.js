import React from "react";
import "../styles/TermsOfService.css";

const TermsOfService = () => {
    return (
        <div className="terms-of-service">
            <h1>Terms of Service</h1>
            <p>
            By using our platform, you agree to the following terms and conditions.
            </p>

            <section>
            <h2>Account Responsibilities</h2>
            <p>
                Users are responsible for maintaining account security and accuracy of
                business details.
            </p>
            </section>

            <section>
            <h2>Platform Usage</h2>
            <p>
                The platform must be used for legal trade and export purposes only.
            </p>
            </section>
            
        </div>
    );
};

export default TermsOfService;