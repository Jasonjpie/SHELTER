import Image from "next/image"
import heroImage from "../../../public/images/about-us/hero-about-us.png"
import  { TiPlus } from 'react-icons/ti'
import Link from "next/link"
import { Routes } from "../../../Routes"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 mt-24">
        <div className="flex flex-col lg:flex-row h-full">
            <div className='flex-1 relative min-h-[400px] '>
                <Image className="object-cover aspect-square " src={heroImage} fill alt=''/>
            </div>
            <div className="flex-1 flex flex-col items-start gap-10 lg:gap-16 p-10">
                <div className="font-bold text-4xl">COMMERCIAL AND PUBLIC USE ARCHITECTURE</div>
                <div className="text-base">Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                <Link className={`bg-primary text-white ml-10 rounded-lg px-10 py-3`} href={Routes.CONTACTUS}>
                    Contact Us
                </Link> 
            </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <TiPlus size={30} className='text-primary'/>
                    <div className="font-bold text-4xl">30</div>
                </div>
                <div className="max-w-[100px] text-center text-[#7D7D7D] text-xl">Designs Delivered</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <TiPlus size={30} className='text-primary'/>
                    <div className="font-bold text-4xl">900</div>
                </div>
                <div className="max-w-[100px] text-center text-[#7D7D7D] text-xl"> Hours Dedication</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <TiPlus size={30} className='text-primary'/>
                    <div className="font-bold text-4xl">20</div>
                </div>
                <div className="max-w-[100px] text-center text-[#7D7D7D] text-xl">Different Locations</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <TiPlus size={30} className='text-primary'/>
                    <div className="font-bold text-4xl">50</div>
                </div>
                <div className="max-w-[100px] text-center text-[#7D7D7D] text-xl">Ongoing Projects</div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection