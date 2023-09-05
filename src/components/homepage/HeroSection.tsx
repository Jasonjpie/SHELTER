import Container from "../common/Container"
import Image from "next/image"
import heroImage from '../../../public/images/hero-image.jpg'
import  { BsArrowUpRight } from "react-icons/bs"
import { useState } from "react"
type Props = {}

const HeroSection = (props: Props) => {
  const [ index, setIndex ] = useState(0)
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#74C3FF] to-white">
      <Container>
        <div className="flex gap-10 lg:gap-0 flex-wrap lg:flex-nowrap lg:min-h-[100vh] justify-between items-center p-5 pt-32">
          <div className="lg:flex-1 h-fit flex flex-col gap-10">
            <div className="font-bold text-4xl leading-relaxed">TRANSFORMING SPACES INTO WORKS FOR ART</div>
            <div className="leading-loose text-xl">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </div>
            <div className="flex flex-wrap gap-3">
              <button className="text-primary bg-white rounded-lg px-10 py-3 border border-primary">View Projects</button>
              <button className="bg-primary rounded-lg text-white px-10 py-3">Contact Us</button>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-5 lg:flex-1">
            <div className="flex gap-5">
              <div className="relative lg:w-[400px] w-[60vw] lg:h-[400px] h-[60vw] ">
               <Image placeholder="blur" className="relative z-20 rounded-[44px] object-cover" src={heroImage} fill alt="" />
               <div className="absolute -top-16 -left-20 lg:w-[400px] w-[60vw] lg:h-[400px] h-[60vw] ">
                <Image placeholder="blur" className="relative z-0 rounded-[44px] object-cover" src={heroImage} fill alt="" />
               </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                {Array.from({length:6}).map((_, _index) => <button key={_index} onClick={() => setIndex(_index)} className={`w-3 h-3 rounded-full ${_index === index ? "bg-[#1D1D1D]":"bg-white"} `}></button>)}
              </div>
            </div>
            <div className="text-lg lg:text-right">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
            <button className="flex items-center gap-3 border border-black rounded-full px-5 py-3">
              <div>Explore a project</div>
              <BsArrowUpRight />
            </button>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default HeroSection