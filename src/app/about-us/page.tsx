import HeroSection from "@/components/about-us/HeroSection"
import Teams from "@/components/about-us/Teams"
import ContactUs from "@/components/about-us/ContactUs"
import FAQ from "@/components/about-us/FAQ"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-44">
        <HeroSection/>
        <Teams/>
        <ContactUs/>
        <FAQ />
    </div>
  )
}

export default page