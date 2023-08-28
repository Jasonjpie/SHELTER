"use client"
import { MdOutlineEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import { useState } from 'react'
type Props = {} 

const ContactUs = (props: Props) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1 flex flex-col gap-10 border shadow-md p-5 lg:p-10">
            <div className="font-semibold text-3xl lg:text-4xl text-center">DO YOU HAVE A  PROJECT?</div>
            <form className="flex flex-col gap-10">
                <div className="flex flex-col lg:flex-row w-full gap-5">
                    <input onChange={(e) => setFirstName(e.target.value)} className="flex-1 rounded-lg border px-6 py-3" placeholder="First Name" type="text" />
                    <input onChange={(e) => setLastName(e.target.value)} className="flex-1 rounded-lg border px-6 py-3" placeholder="Last Name" type="text" />
                </div>
                <input onChange={(e) => setEmail(e.target.value)} className="rounded-lg border px-6 py-3" placeholder="Email Address" type="text" />
                <div className="flex flex-col gap-3">
                    <div className="font-semibold">Reason For Contract</div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" placeholder="" />
                        <div>Want House Design</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" placeholder="" />
                        <div>Consultancy</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" placeholder="" />
                        <div>Other</div>
                    </div>
                </div>
                <button type="submit" className="self-center px-10 py-3 text-white bg-gradient-to-br from-[#696CE6] to-[#1C1F9F]">SUBMIT</button>
            </form>
        </div>
        <div className="flex-1 flex flex-col gap-5 self-center p-5 lg:p-10">
            <div className="text-[#929292] text-base font-semibold">CONTACT US</div>
            <div className="font-semibold text-3xl lg:text-4xl lg:leading-relaxed capitalize">CONTACT OUR SUPPORT TEAM TO GET A STEP CLOSER TO YOUR DREAM HOUSE!</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <GoLocation size={30}/>
                    <div>location information goes here</div>
                </div>
                <div className="flex gap-3 items-center">
                    <BsTelephone size={30}/>
                    <div>+ 565 898 562 9789</div>
                </div>
                <div className="flex gap-3 items-center">
                    <MdOutlineEmail size={30}/>
                    <div>contact.email@gmail.com</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs