import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
    return (
        <div>
           <h1 className="text-white text-4xl mt-7 font-semibold text-center">
             Get in Touch
           </h1>
           <p className="text-center mb-7 text-richblack-400 mt-3">
             We'd love to here for you, Please fill out this form.
           </p>
           <div>
             <ContactUsForm />
           </div>
        </div>
    )
}

export default ContactFormSection;