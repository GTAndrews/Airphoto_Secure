import React from 'react';
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Agree"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#343a40" }}
                buttonStyle={{ background: "#f8f9fa", color: "#343a40", fontSize: "15px", border: "1" }}
                expires={150}
                >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" atl="Google Privacy Policy" target='_blank' rel='noopener noreferrer'>Privacy Policy</a> and <a href="https://policies.google.com/terms" alt="Google Terms of Use" target='_blank' rel='noopener noreferrer'>Terms of Service</a> apply.</span>
            </CookieConsent>
        </div>
    );
}

export default Cookies;