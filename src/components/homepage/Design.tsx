import Image, { StaticImageData } from "next/image"
import Link from "next/link"
type Props = {
    design: { image: string, color: string, desc_1: string, desc_2: string, desc_3: string, desc_4: string, title: string,link: string },
    position: string,
    color: string
}

const Design = ({ design, position, color }: Props) => {
    return (
        <div className="relative flex flex-col lg:odd:flex-row-reverse lg:even:flex-row lg:gap-24 p-5 lg:p-16 overflow-clip">
            <div className="flex-auto lg:flex-1 relative h-[500px]">
                <Image  className="object-cover" src={design.image} fill alt='' />
            </div>
            <div className="flex-auto lg:flex-1 flex flex-col justify-end lg:odd:items-end items-start gap-16 h-[500px] ">
                <div className="flex items-center gap-2">
                    <div style={{ backgroundColor: design.color }} className={`w-12 h-12 z-30 relative rounded-full`} />
                    <div className="flex flex-col">
                        <div className="font-medium text-lg">{design.desc_1}</div>
                        <div className="font-medium text-base text-[#868686]">{design.desc_2}</div>
                    </div>
                </div>
                <div className="font-semibold text-2xl max-w-md"> <span className="text-primary">{design.title}</span>  {design.desc_3} </div>
                <div className="max-w-md">{design.desc_4}</div>
                <Link href={design.link} className="bg-primary text-white rounded-lg px-8 py-2 relative z-40" target="_blank">
                   Go to Project
                </Link>
            </div>
            <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${position} -z-10`}>
                <div className="w-96 h-96 rounded-full relative ">
                    <div className="absolute inset-0 rounded-full opacity-50" style={{ background: `radial-gradient(circle, ${color}, #ffffff)` }}></div>
                </div>
            </div>


        </div>
    )
}

export default Design