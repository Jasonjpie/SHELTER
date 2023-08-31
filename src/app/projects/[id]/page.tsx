import HeroSection from "@/components/projects/project/HeroSection"
import ProjectDetail from "@/components/projects/project/ProjectDetail"
import MoreImages from "@/components/projects/project/MoreImages"
import SimilarProjects from "@/components/projects/project/SimilarProjects"

type Props = {}

const page = (props: Props) => {
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