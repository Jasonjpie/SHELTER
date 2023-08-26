"use client"
import Container from "@/components/common/Container"
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <NavBar/>
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
