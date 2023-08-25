'use client'
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/homepage/HeroSection"
import HouseDesigns from "@/components/homepage/HouseDesigns"
export default function Home() {
  return (
    <div>
      <NavBar transparent={true}/>
      <HeroSection />
      <HouseDesigns />
      <Footer />
    </div>
  )
}
