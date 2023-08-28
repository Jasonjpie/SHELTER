import HeroSection from "@/components/about-us/HeroSection"
import Teams from "@/components/about-us/Teams"
import ContactUs from "@/components/about-us/ContactUs"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-44">
        <HeroSection/>
        <Teams/>
        <ContactUs/>
    </div>
  )
}

export default page