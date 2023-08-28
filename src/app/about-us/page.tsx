import HeroSection from "@/components/about-us/HeroSection"
import Teams from "@/components/about-us/Teams"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-44">
        <HeroSection/>
        <Teams/>
    </div>
  )
}

export default page