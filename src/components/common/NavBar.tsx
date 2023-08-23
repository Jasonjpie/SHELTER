import { Navigations } from "@/data"
import Link from "next/link"
import { Routes } from "../../../Routes"
import { usePathname } from 'next/navigation'
import Container from "./Container"
import { useEffect, useState } from "react"

type Props = {
    dark?:boolean,
    transparent?:boolean
}

const NavBar = ({dark = false, transparent = false}: Props) => {
    const path = usePathname()
    const [ transparency, setTransparency ] = useState(transparent) 
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 200){
                setTransparency(false)
            }else{
                setTransparency(true)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
  return (
    <div className={`w-full ${transparent && transparency ? 'bg-transparent':''} fixed top-0`}>
        <Container>
            <div className="flex justify-between p-3">
                <div className="text-primary text-5xl font-bold">
                    SHELTER
                </div>
                <div className="hidden lg:flex items-center gap-5">
                    {
                        Navigations.slice(0, 4).map(navigation => 
                        dark ?
                        <Link key={navigation.route} className={`${path === navigation.route ? 'text-primary':''} px-5 py-2`} href={navigation.route}>
                            {navigation.name}
                        </Link>:
                        <Link key={navigation.route} className={`${path === navigation.route ? 'text-primary':''} px-5 py-2`} href={navigation.route}>
                            {navigation.name}
                        </Link>
                            )
                    }
                    <Link className={`bg-primary text-white ml-10 rounded-lg px-5 py-2`} href={Routes.CONTACTUS}>
                        Contact Us
                    </Link> 
                </div>
            </div>
        </Container>
       
        
    </div>
  )
}

export default NavBar