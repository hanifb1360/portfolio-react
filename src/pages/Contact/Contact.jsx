import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';
import 'animate.css';
import SocialMediaButtons from '../../components/socialMediaButtons/SocialMediaButtons';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0ywiu5d',
        'template_fbd877v',
        form.current,
        'AGC5Umln9-uNz59rD'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${styles.contactPage} animate__animated animate__fadeIn animate__slow`}
    >
      <h2 className={styles.title}>Let's Build Something Great Together</h2>
      {messageSent ? (
        <p className={styles.successMessage}>
          Message sent successfully! Thank you for contacting me.
        </p>
      ) : (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            aria-label="This is the place that the user adds her or his name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            aria-label="This is the place that the user adds her or his email address"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            aria-label="This is the place that the user writes her or his message"
            value="Send"
          />
        </form>
      )}
      <SocialMediaButtons />
    </div>
  );
};

export default Contact;
