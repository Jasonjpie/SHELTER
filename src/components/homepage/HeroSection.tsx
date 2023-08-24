import Container from "../common/Container"
import Image from "next/image"
import heroImage from '../../../public/images/hero-image.jpg'
import  { BsArrowUpRight } from "react-icons/bs"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#89A5BA] to-[#EFECF3]">
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
               <Image placeholder="blur" className=" rounded-full object-cover" src={heroImage} fill alt="" />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <button className="w-3 h-3 rounded-full bg-[#1D1D1D]"></button>
                <button className="w-3 h-3 rounded-full bg-white"></button>
                <button className="w-3 h-3 rounded-full bg-white"></button>
                <button className="w-3 h-3 rounded-full bg-white"></button>
                <button className="w-3 h-3 rounded-full bg-white"></button>
                <button className="w-3 h-3 rounded-full bg-white"></button>
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