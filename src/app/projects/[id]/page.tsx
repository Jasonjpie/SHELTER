import HeroSection from "@/components/projects/project/HeroSection"
import ProjectDetail from "@/components/projects/project/ProjectDetail"
import MoreImages from "@/components/projects/project/MoreImages"
import SimilarProjects from "@/components/projects/project/SimilarProjects"
import { projects } from "@/data"

type Props = {
  params:{id:string}
}

const page = ({params}: Props) => {
  const project = projects.find(project => project.id === Number(params.id))
  return (
    <div className="flex flex-col gap-24">
        <HeroSection />
        <ProjectDetail />
        <MoreImages />
        <SimilarProjects />
    </div>
  )
}

export default page