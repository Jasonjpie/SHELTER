import Image, { StaticImageData } from "next/image"
type Props = {
    design:{image:StaticImageData, color:string},
    position:string,
    color:string
}

const Design = ({design, position, color}: Props) => {
  return (
    <div className="relative flex flex-col lg:odd:flex-row-reverse lg:even:flex-row lg:gap-24 p-5 lg:p-16 overflow-clip">
        <div className="flex-auto lg:flex-1 relative h-[500px]">
         <Image placeholder="blur" className="object-cover" src={design.image} fill alt='' />
        </div>
        <div className="flex-auto lg:flex-1 flex flex-col justify-end lg:odd:items-end items-start gap-16 h-[500px] ">
            <div className="flex items-center gap-2">
                <div style={{backgroundColor:design.color}} className={`w-12 h-12 z-30 relative rounded-full`}/>
                <div className="flex flex-col">
                    <div className="font-medium text-lg">Lorem Ipsum is simply dummy text</div>
                    <div className="font-medium text-base text-[#868686]">Lorem Ipsum is simply dummy text</div>
                </div>
            </div>
            <div className="font-semibold text-3xl max-w-md"> <span className="text-primary">Lorem Ipsum</span>  is simply dummy text of the printing. </div>
            <div className="max-w-md">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
            <button className="bg-primary text-white rounded-lg px-8 py-2">Go to Project</button>
        </div>
        <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${position} -z-10`}>
            <div className="w-96 h-96 rounded-full relative ">
                <div className="absolute inset-0 rounded-full opacity-50" style={{background: `radial-gradient(circle, ${color}, #ffffff)`}}></div>
            </div>
        </div>


    </div>
  )
}

export default Design