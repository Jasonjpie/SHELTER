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
                    Array.from({length:3}).map((_, index) =>
                    <Project key={index} />
                    )
                }
            </div>
        </div>
    </Container>
  )
}

export default SimilarProjects



