'use client'
import Image from "next/image"
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs"
import { useState } from "react"
import { architecturalDesign } from "@/data"
type Props = {}

const Services = (props: Props) => {
    const [active, setActive ] = useState(-1)
  return (
    <div className="flex flex-col gap-5 lg:gap-10 py-16">
        <div className='text-right text-3xl lg:text-6xl font-bold'>Services </div>
        <div>
            {
                architecturalDesign.map(design => <Service key={design.id} design={design} active={active === design.id} setActive={(a:number)=>setActive(a)} />)
            }
        </div>

    </div>
  )
}

type ServiceProp = {
    design:{id:number, name:string, description:string, image:string}
    active?:boolean
    setActive:(a:number) => void
}

const Service = ({ setActive, design, active = false}: ServiceProp) => {
    const handleClick = () => {
        if(active){
            setActive(-1)
        }else{
            setActive(design.id)
        }
    }
  return (
    <div className={`relative flex flex-wrap lg:flex-nowrap gap-2 justify-between  w-full border-t-2 border-t-[#7F6666] py-3 ${active ? 'bg-[#515151] bg-opacity-20':''}`}>
        <div className="flex gap-2">
            <div>1</div>
            {active && 
            <div className="relative w-[500px] h-[300px]">
                <Image className="object-cover aspect-video" src={design.image} fill alt=''/>
            </div>}
        </div>
        <div className="flex flex-wrap lg:flex-nowrap text-[#515151] gap-5 p-2">
            <div className="flex-initial">{design.name}</div>
            {active && <div className="max-w-md">{design.description}</div>}
        </div>
        <button onClick={handleClick} className="flex-initial flex items-center justify-center w-12 h-12 rounded-full border-2 border-black">
            {active ? <BsArrowUpRight size={30} className='' />:<BsArrowDownLeft size={30} className='' />}
        </button>
    </div>
  )
}

export default Services