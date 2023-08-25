import Image from "next/image"
import Design from "./Design"
import Container from "../common/Container"
import { Designs } from "@/data"

type Props = {}

const HouseDesigns = (props: Props) => {
  return (
    <Container>
      <div className="relative py-52">
        <div className="absolute hidden xl:block  top-[470px] left-5 w-[55%] h-[1150px]">

          <Image className="relative z-20 object-cover" src='/icons/curve.svg' fill alt='' />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="font-semibold text-3xl">Explore House Design</div>
          <div className="text-[#868686] text-xl">Indulge and experience different modern and classic house designs</div>
        </div>
        <div className=" w-full flex flex-col gap-0">
          {
              Designs.map((design, index) => 
                <Design key={index} design={design} position={index % 2 === 0 ? '-right-44':'-left-44'} color={index % 2 === 0 ? '#DED9FF':'#F3FFD9'}/>
              )
          }
        </div>

      </div>
    </Container>

  )
}

export default HouseDesigns