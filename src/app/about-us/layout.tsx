import { ReactNode } from "react"
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
import Container from "@/components/common/Container"
type Props = {
    children:ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <NavBar />
        <Container>{children}</Container>
        <Footer />
    </div>
  )
}

export default Layout