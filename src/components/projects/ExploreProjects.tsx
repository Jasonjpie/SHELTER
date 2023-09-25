
import { Projects } from "@/data"
import Container from "../common/Container"
import Project from "./Project"
type Props = {}

const ExploreProjects = (props: Props) => {
  return (
    <Container>
        <div className="flex flex-col gap-8 items-center mt-24">
            <div className="flex flex-col items-center">
                <div className="font-bold text-4xl">EXPLORE PROJECTS</div>
                <div className="text-xl text-[#858585]">Architecture</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-16">
                {
                    Projects.map((project, index) =>
                    <Project key={index} project={project} />
                    )
                }
            </div>
            <button className="text-white px-10 py-4 bg-primary from-[#696CE6] to-[#1C1F9F] mt-10 lg:mt-16">Discover More</button>
        </div>
    </Container>
  )
}

export default ExploreProjects



