import React from "react";
import ContactCard from "../layouts/card/ContactCard";

function Contact() {
  return (
    <div className="hero min-h-screen bg-primary-focus text-base-content">
      <div className="hero-content flex-col md:flex-row md:space-x-32">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="py-6">
            Contact me for collaboration and speaking engagement opportunities!
          </p>
        </div>
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
