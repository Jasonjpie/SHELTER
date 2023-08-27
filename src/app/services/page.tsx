import HeroSection from "@/components/services/HeroSection"
import Services from "@/components/services/Services"
import MoreOnServices from "@/components/services/MoreOnServices"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-24">
        <HeroSection/>
        <Services />
        <MoreOnServices />
    </div>
  )
}

export default page