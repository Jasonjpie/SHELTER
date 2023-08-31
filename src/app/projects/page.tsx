import ExploreProjects from "@/components/projects/ExploreProjects"
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <NavBar/>
        <ExploreProjects/>
        <Footer />
    </div>
  )
}

export default page