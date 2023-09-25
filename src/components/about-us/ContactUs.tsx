"use client"
import { MdOutlineEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import { useState } from 'react'
import emailjs from 'emailjs-com';

type Props = {}

const ContactUs = (props: Props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsValid(validateEmail(inputEmail));
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };


    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const option = e.target.value;
        if (e.target.checked) {
            setSelectedOptions((prevOptions) => [...prevOptions, option]);
        } else {
            setSelectedOptions((prevOptions) =>
                prevOptions.filter((item) => item !== option)
            );
        }
    };
    const validateEmail = (input: string) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isValid) {
            // Create the template params object with the form data
            const templateParams = {
                to_name: 'Jeson P.',
                from: 'shelter.com', // Replace with the recipient's name
                from_name: firstName,
                from_email: email,
                subject: 'Reason For Contact', // Replace with the desired subject
                message: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nReason For Contact: ${selectedOptions.join(', ')}`,
                reply_to: email,
            };

            // Use the EmailJS send method to send the form data
            emailjs
                .send('service_e3gfj5u', 'template_lsf6ept', templateParams, 'lBEGkhwko5Z_AnqC5')
                .then((result) => {
                    console.log(result.text);
                    setSuccessMessage('Form sent successfully!');
                    setEmail('');
                    setFirstName('');
                    setLastName('');
                    setSelectedOptions([]);

                    // Clear success message after 5 seconds (adjust as needed)
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 5000);
                })
                .catch((error) => {
                    console.error(error.text);
                    setErrorMessage('An error occurred. Please try again.');

                    // Clear error message after 5 seconds (adjust as needed)
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 5000);
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 flex flex-col gap-10 border shadow-md p-5 lg:p-10">
                <div className="font-semibold text-3xl lg:text-4xl text-center">DO YOU HAVE A  PROJECT?</div>
                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row w-full gap-5">
                        <input value={firstName}
                            onChange={handleFirstNameChange} className="flex-1 rounded-lg border px-6 py-3" placeholder="First Name" type="text" />
                        <input value={lastName}
                            onChange={handleLastNameChange} className="flex-1 rounded-lg border px-6 py-3" placeholder="Last Name" type="text" />
                    </div>
                    <input value={email}
                        onChange={handleEmailChange} className="rounded-lg border px-6 py-3" placeholder="Email Address" type="text" />
                    <div className="flex flex-col gap-3">
                        <div className="font-semibold">Reason For Contract</div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" value="Want House Design"
                                onChange={handleCheckboxChange}
                                checked={selectedOptions.includes('Want House Design')} />
                            <div>Want House Design</div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" value="Consultancy"
                                onChange={handleCheckboxChange}
                                checked={selectedOptions.includes('Consultancy')} />
                            <div>Consultancy</div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" value="Other"
                                onChange={handleCheckboxChange}
                                checked={selectedOptions.includes('Other')} />
                            <div>Other</div>
                        </div>
                    </div>
                    {successMessage && (
                        <div className="text-green-500 text-xl mt-1">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="text-red-500 text-xl mt-2">{errorMessage}</div>
                    )}
                    {!isValid && (
                        <div className="text-red-500 text-xl mt-2">Please enter a valid email address.</div>
                    )}
                    <button type="submit"
                        className={`text-white bg-primary px-5 py-3 ${isSubmitting && 'opacity-50 cursor-wait'}`}>
                        {isSubmitting ? "Submitting..." : "Submit"}

                    </button>

                </form>
            </div>
            <div className="flex-1 flex flex-col gap-5 self-center p-5 lg:p-10">
                <div className="text-[#929292] text-base font-semibold">CONTACT US</div>
                <div className="font-semibold text-3xl lg:text-4xl lg:leading-relaxed capitalize">CONTACT OUR SUPPORT TEAM TO GET A STEP CLOSER TO YOUR DREAM HOUSE!</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3 items-center">
                        <GoLocation size={30} />
                        <div>North Hollywood, CA 91605, US</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <BsTelephone size={30} />
                        <div>+1 818-915-1831</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MdOutlineEmail size={30} />
                        <div>jasonjpinc@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs