import { teams } from "@/data"
import Image from "next/image"
type Props = {}

const Teams = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 font-semibold">
            <div className="text-base text-[#929292]">BEHIND THE DESIGNS</div>
            <div className="text-3xl lg:text-6xl">MEET OUR TEAM</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16'>
            {
                teams.map((team, index) => 
                    <div key={index} className="flex flex-col items-center border shadow-md p-5 hover:scale-110">
                        <Image className="rounded-full border border-dashed aspect-square object-cover border-red-500 p-3" src={team.image} width={200} height={200} alt={`${team.name}'s picture`}/>
                        <div className="font-semibold text-2xl mt-10">{team.name}</div>
                        <div className="mb-10">{team.role}</div>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default Teams