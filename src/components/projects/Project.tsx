import Image, { StaticImageData } from "next/image"
import { FaPlus } from "react-icons/fa"
import heroImage from '../../../public/images/hero-image.jpg'
import Link from "next/link"
import { Routes } from "../../../Routes"

type Props = {
  project:{
        id:string,
        name:string,
        image:string,
      }
}

const Project = ({project}: Props) => {
  return (
    <Link href={`https://jjp-beta.vercel.app/projects/${project.id}`} className="flex flex-col gap-3" target="_blank">
        <div className="relative w-full min-h-[500px] aspect-video">
            <Image className="object-cover" src={project.image} fill alt=''/>
            <button className="absolute text-primary bottom-0 right-0 flex items-center gap-3 px-5 py-3 bg-white">
                <div className="text-sm font-bold">MORE</div>
                <FaPlus/>
            </button>
        </div>
        <div className="font-bold text-sm">Interior</div>
        <div className="text-xl">{project.name}</div>           
    </Link>
  )
}

export default Project