import Image from "next/image"
import { FaPlus } from "react-icons/fa"
import heroImage from '../../../public/images/hero-image.jpg'
type Props = {}

const Project = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
        <div className="relative w-full min-h-[500px] aspect-video">
            <Image placeholder="blur" src={heroImage} fill alt=''/>
            <button className="absolute text-primary bottom-0 right-0 flex items-center gap-3 px-5 py-3 bg-white">
                <div className="text-sm font-bold">MORE</div>
                <FaPlus/>
            </button>
        </div>
        <div className="font-bold text-sm">Interior</div>
        <div className="text-xl">House design with amazing open sky view</div>           
    </div>
  )
}

export default Project