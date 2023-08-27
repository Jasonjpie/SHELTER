import HeroSection from "@/components/services/HeroSection"
import Services from "@/components/services/Services"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-24">
        <HeroSection/>
        <Services />
    </div>
  )
}

export default page