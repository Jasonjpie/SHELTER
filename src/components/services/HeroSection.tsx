import Image from "next/image"
import heroServices1 from "../../../public/images/services/shelter_1.png"
import heroServices2 from "../../../public/images/services/shelter_2.png"
import heroServices3 from "../../../public/images/services/shelter_3.png"
import heroServices4 from "../../../public/images/services/shelter_4.png"
import { BsArrowDown } from "react-icons/bs"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-5 w-full min-h-[500px] lg:min-h-[1000px] mt-24">
        <div className="col-span-4 2xl:col-span-5 relative h-[90%]">
            <Image className="object-cover" placeholder="blur" src={heroServices4} fill alt=''/>
        </div>
        <div className="col-span-8 2xl:col-span-7 flex flex-col gap-2 justify-end h-full">
            <div className="flex flex-col items-end gap-5 lg:gap-10 h-[40%]">
                <div className="flex gap-5 lg:gap-10 justify-end items-end">
                    <div className="flex flex-col text-sm lg:text-lg text-[#9D9D9D]">
                        <div>+2000</div>
                        <div>interior & house design</div>
                    </div>
                    <div className="font-semibold text-xl sm:text-4xl lg:text-6xl">TRANSFORM</div>
                </div>
                <div className="font-semibold text-xl sm:text-4xl lg:text-6xl mr-32">YOUR SPACE</div>
                <div className="font-semibold text-xl sm:text-4xl lg:text-6xl"> <span className="text-[#9D9D9D]">/</span> WITH ARCHIES</div>
            </div>
            <div className="flex items-center gap-5 sm:gap-32 lg:gap-72 h-[50%]">
                <div className="relative w-[40%] h-full">
                    <Image className="object-cover" placeholder="blur" src={heroServices3} fill alt=''/>  
                </div>
                <div className="flex flex-col items-end gap-3">
                    <BsArrowDown size={50} />
                    <div>Explore Designs</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection