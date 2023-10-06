import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '../common/Container';

type Props = {};

const ContactUs = (props: Props) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  const validateEmail = (input: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isValid) {
      // Replace these values with your own EmailJS template and user ID
      emailjs
        .send('service_e3gfj5u', 'template_lsf6ept', {
          from: "shelter.com",
          to_name: "Jeson P.",
          // from_name: email,
          from_email: email,
          // subject: '',
          // message: '',
          reply_to: email
        }, 'lBEGkhwko5Z_AnqC5')
        .then((result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully!');
          setEmail('');

          // Clear success message after 5 seconds (adjust as needed)
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        })
        .catch((error) => {
          console.error(error.text);
          setErrorMessage('An error occurred. Please try again later.');

          // Clear error message after 5 seconds (adjust as needed)
          setTimeout(() => {
            setErrorMessage('');
          }, 5000);
        }).
        finally(() => {
          setIsSubmitting(false)
        });
    }
  };

  return (
    <div id="contact-us" className="w-full bg-[#E8F4FA]">
      <Container>
        <div className="flex flex-col items-center w-full lg:w-[40%] mx-auto gap-10 py-44">
          <div className="text-center text-4xl font-semibold max-w-md">
            Want your dream house? Contact Us
          </div>
          <form className='w-full' onSubmit={handleSubmit} id="contact-form">
            <div className="flex gap-3 w-full">
              <input
                className="w-full px-5 py-2 rounded-md "
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className={`text-white bg-black px-5 py-3 rounded-lg ${isSubmitting && 'opacity-50 cursor-wait'}`}
                disabled={isSubmitting}
                type="submit">
                {isSubmitting ? "Subscribing..." : "Subscribe"}

              </button>
            </div>
          </form>
          {successMessage && (
            <div className="text-green-500 text-sm mt-1">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}
          {!isValid && (
            <div className="text-red-500 text-sm mt-2">Please enter a valid email address.</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
