import { Projects } from "@/data"
import Project from "../Project"
import Container from "@/components/common/Container"
type Props = {}

const SimilarProjects = (props: Props) => {
  return (
    <Container> 
        <div className="flex flex-col gap-8 mb-24">
            <div className="font-bold text-4xl">SIMILAR PROJECTS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-16">
                {
                    Projects.slice(0, 3).map((project, index) =>
                    <Project key={index} project={project}/>
                    )
                }
            </div>
        </div>
    </Container>
  )
}

export default SimilarProjects



