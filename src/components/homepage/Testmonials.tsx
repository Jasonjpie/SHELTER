import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { CgQuote } from "react-icons/cg"
import  { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Image from "next/image"
import Container from "../common/Container"
import { useEffect, useRef, useState } from "react"
import { testmonials } from "@/data"

type Props = {}

const Testmonials = (props: Props) => {
    const container = useRef<HTMLDivElement>(null)
    const scrollTo = (forward:boolean) => {
        if(container.current){
            if(forward){
                container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth 
            }else{
                container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth 
            }
        }

    }
  return (
    <Container>
        <div className="flex flex-wrap lg:flex-nowrap gap-10" id="Testimonial">
            <div className="relative w-full lg:max-w-[50%] ">
                <div className=" flex flex-col gap-10 max-w-md mx-auto p-2 lg:p-10">
                    <div className="text-primary text-xl font-medium">TESTMONIALS</div>
                    <div className="font-semibold text-4xl">Look What Our Customers Say!</div>
                    <div className="text-lg font-semibold">Twilight Staging & Design.</div>
                    <div className="flex gap-8">
                        <button onClick={() => scrollTo(false)} className="p-4 rounded-full border border-primary">
                            <BsArrowLeft className='text-primary'/>
                        </button>
                        <button onClick={() => scrollTo(true)} className="p-4 rounded-full border border-primary">
                            <BsArrowRight className='text-primary' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex justify-center items-center lg:max-w-[50%] overflow-clip py-24">
                <div className="w-[60%] h-fit relative">
                    <div ref={container} className="w-full h-fit flex items-start overflow-x-hidden scroll-smooth">
                        {testmonials.map((testimonial, index) => 
                        <div key={index} className="shrink-0 w-full bg-white rounded-2xl divide-y border p-8 z-10">
                            <div className="flex flex-col pb-10">
                                <Image className="pb-5 object-cover" src='/icons/quote.svg' width={70} height={70} alt='' />
                                <div className="font-semibold">{testimonial.testmony}</div>
                            </div>
                            <div className="flex justify-between py-3">
                                <div className="flex gap-2 items-center">
                                    <div className="relative w-8 h-8 rounded-full">
                                        <Image className="rounded-full object-cover" src='/images/profile.jpg' fill alt='' />
                                    </div>
                                    <div>{testimonial.name}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiFillStar className='text-[#FFC700]' />
                                    <AiFillStar className='text-[#FFC700]' />
                                    <AiFillStar className='text-[#FFC700]' />
                                    <AiFillStar className='text-[#FFC700]' />
                                    <AiFillStar className='text-[#FFC700]' />
                                    {/* <AiOutlineStar /> */}
                                </div>
                                
                            </div>
                        </div>)}
                    </div>

                    <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10'>
                        <div className="w-96 h-96 rounded-full">
                            <div className="absolute inset-0 rounded-full opacity-50" style={{background: 'radial-gradient(circle, #FFD9EB, #ffffff)'}}></div>
                        </div>
                    </div>
                    <div className='absolute w-8 h-8 rounded-full opacity-40 bg-gradient-to-br from-[#4361EE] to-transparent -left-2 -top-0 -translate-y-1/2 -z-50' />

                </div>


            </div>
            
        </div>
    </Container>

  )
}

export default Testmonials