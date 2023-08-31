'use client'
import Container from "@/components/common/Container"
import Image from "next/image"
import { useRef, useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
type Props = {}

const HeroSection = (props: Props) => {
    const container = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const images = ['/images/design-1.jpg','/images/design-2.jpg','/images/design-3.jpg']
    const handleScroll = (forward:boolean) => {
        if(container.current){
            if(forward){
                setIndex(index + 1)
                container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth
            }else{
                setIndex(index - 1)
                container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth
            }
        }
    }
    const handleClick = (index:number) => {
        if(container.current){
            container.current.scrollLeft = container.current.clientWidth * index
            setIndex(index)
        }
    }
  return (
    <div  className="relative w-full h-[100vh] mb-44">
        <div ref={container} className="flex absolute top-0 w-full h-[100vh] scroll-smooth overflow-x-hidden">    
            {images.map((image, _index) => 
            <div key={_index} className="relative shrink-0 w-full h-[100vh]">
                <Image className=' object-cover' src={image} fill alt='' />
            </div>)}
        </div>
        <Container>
            <div className="relative w-full h-[100vh] text-white z-20">
                <div className="absolute flex items-center justify-between bottom-1/4 lg:bottom-0 left-0 gap-5 lg:gap-10"> 
                    <button disabled={index === 0} onClick={() => handleScroll(false)} className="flex items-center gap-5 p-5">
                        <BsArrowLeft className='text-white text-4xl'/>
                       <div>Prev</div> 
                    </button>
                    <div className="flex gap-2 lg:gap-5">
                        {
                        images.map((_, _index) => <button key={_index} onClick={() => handleClick(_index)} className={`w-3 h-3 rounded-full ${index === _index ? 'bg-gray-400':'bg-gray-200'}`}/>)
                        }
                    </div>
                    <button disabled={index === images.length - 1} onClick={() => handleScroll(true)} className="flex items-center gap-5 p-5">
                       <div>Next</div> 
                       <BsArrowRight className='text-white text-4xl'/>
                     </button>
                </div>
            </div>
        </Container>
            <div className="absolute right-0 -bottom-20 flex flex-col text-white gap-10 w-full max-w-2xl bg-[#202020] p-10">
                <div className="flex flex-col gap-1">
                    <div className="h-2 w-24 bg-white rounded-sm"/>
                    <div className="font-bold text-3xl">Highlights of the House</div>
                </div>
                <div className="flex items-center justify-between max-w-md">
                    <div>01</div>
                    <div className="w-12 h-0.5 bg-white"/>
                    <div>Living Room</div>
                    <div className="w-12 h-0.5 bg-white"/>
                    <div>Modern Design</div>
                </div>
            </div>
    </div>
  )
}

export default HeroSection