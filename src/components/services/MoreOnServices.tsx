import { services } from "@/data"
import Image from "next/image"

type Props = {}

const MoreOnServices = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-16 pb-24">
        <div className="flex flex-col gap-2 items-center">
            <div className="max-w-[100px] text-center text-[#717171] font-medium text-base">More on our services</div>
            <div className="max-w-lg font-bold text-center text-xl lg:text-4xl">COMMERCIAL AND PUBLIC USE ARCHITECTURE</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            {
                services.map((service, index) => 
                    <div key={index} className="flex flex-col gap-10 bg-white p-10 shadow-xl hover:scale-110 border">
                        <Image src={service.icon}  width={50} height={50} alt={`${service.name}'s Logo`}/>
                        <div className="font-medium text-2xl mt-10 lg:mt-16">{service.name}</div>
                        <div className="text-base">{service.description}</div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default MoreOnServices