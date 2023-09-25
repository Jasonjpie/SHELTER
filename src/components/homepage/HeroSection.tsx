import Container from "../common/Container"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
type Props = {}

const HeroSection = (props: Props) => {
  const [index, setIndex] = useState(0)
  const images = ['/images/services/hero-services-1.jpg', '/images/services/hero-services-2.jpg', '/images/design-1.jpg', '/images/design-2.jpg', '/images/design-3.jpg']

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#74C3FF] to-white">
      <Container>
        <div className="flex gap-10 lg:gap-0 flex-wrap lg:flex-nowrap lg:min-h-[100vh] justify-between items-center p-5 pt-32">
          <div className="lg:flex-1 h-fit flex flex-col gap-10">
            <div className="font-bold text-4xl leading-relaxed">TRANSFORMING SPACES INTO WORKS FOR ART</div>
            <div className="leading-loose text-xl">We go beyond aesthetics, emphasizing sustainability, functionality, and cutting-edge technology in our designs. Our spaces combine beauty with purpose, enhancing comfort and enjoyment. </div>
            <div className="flex flex-wrap gap-3">
              <Link href='/projects' className="text-primary bg-white rounded-lg px-10 py-3 border border-primary">View Projects</Link>
              <Link href='/#contact-us' className="bg-primary rounded-lg text-white px-10 py-3">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-5 lg:flex-1">
            <div className="flex gap-5">
              <div className="relative lg:w-[400px] w-[60vw] lg:h-[400px] h-[60vw] ">
                <Image className="relative z-20 rounded-[44px] object-cover" src={images[index]} fill alt="" />
                <div className="absolute -top-16 -left-20 lg:w-[400px] w-[60vw] lg:h-[400px] h-[60vw] ">
                  <Image className="relative z-0 rounded-[44px] object-cover" src={images[(index + 1) % images.length]} fill alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                {Array.from({ length: images.length }).map((_, _index) => <button key={_index} onClick={() => setIndex(_index)} className={`w-3 h-3 rounded-full ${_index === index ? "bg-[#1D1D1D]" : "bg-white"} `}></button>)}
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default HeroSection