import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("Pruthvi s");

    emailjs.sendForm('service_e3ct62p', 'template_gjgzsws', e.target, 'Pruthvi S')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
      }, (error) => {
        console.log('Failed to send email:', error.text);
      });
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">We'd love to hear from you! If you have any questions or feedback, please feel free to reach out to us.</p>
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded-md border" />
        <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded-md border" />
        <textarea name="message" placeholder="Your Message" className="px-4 py-2 rounded-md border"></textarea>
        <button type="submit" className="bg-[#6469ff] text-white px-4 py-2 rounded-md">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
