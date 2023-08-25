'use client'
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/homepage/HeroSection"
import HouseDesigns from "@/components/homepage/HouseDesigns"
import Testmonials from "@/components/homepage/Testmonials"
import ContactUs from "@/components/homepage/ContactUs"
export default function Home() {
  return (
    <div>
      <NavBar transparent={true}/>
      <HeroSection />
      <HouseDesigns />
      <Testmonials/>
      <ContactUs />
      <Footer />
    </div>
  )
}
