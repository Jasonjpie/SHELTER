"use client"
import { Navigations } from "@/data"
import Link from "next/link"
import Image from "next/image"
import { Routes } from "../../../Routes"
import { usePathname } from 'next/navigation'
import Container from "./Container"
import { useEffect, useRef, useState } from "react"
import  { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from "react-icons/ai"

type Props = {
    dark?: boolean,
    transparent?: boolean
}

const NavBar = ({ dark = false, transparent = false }: Props) => {
    const path = usePathname()
    const [transparency, setTransparency] = useState(transparent)
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setTransparency(false)
            } else {
                setTransparency(true)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <div className={`w-full z-50 ${transparent && transparency ? 'bg-transparent' : 'bg-white'} fixed top-0`}>
            <Container>
                <div className="flex justify-between py-3">
                    <Link href={Routes.HOME}>
                        <Image src='/icons/shelter-logo.svg' width={200} height={200} alt="" />
                    </Link>
                    {!showMenu && <BiMenu onClick={() => setShowMenu(true)} className={`lg:hidden cursor-pointer ${dark ? 'text-white':'text-black'}`} size={40} />}
                    {showMenu &&
                    <div className="p-1">
                        <AiOutlineClose size={35} className={`ml-auto p-1 ${dark ? 'text-white':'text-black'}`} onClick={() => setShowMenu(false)}/>
                    </div>}
                    <div className="hidden lg:flex items-center gap-5">
                    {
                        Navigations.slice(0, 4).map(navigation =>
                            dark ?
                                <Link key={navigation.route} className={`${path === navigation.route ? 'text-primary' : ''} px-5 py-2`} href={navigation.route}>
                                    {navigation.name}
                                </Link> :
                                <Link key={navigation.route} className={`${path === navigation.route ? 'text-primary' : ''} px-5 py-2`} href={navigation.route}>
                                    {navigation.name}
                                </Link>
                        )
                    }
                    <Link className={`bg-primary text-white ml-10 rounded-lg px-5 py-2`} href={Routes.CONTACTUS}>
                        Contact Us
                    </Link>
                    </div>
                </div>
                {showMenu && <MobileBar close={() => setShowMenu(false)}/>}
            </Container>


        </div>
    )
}


type MobileBarProps = {
    close: () => void
}

const MobileBar = ({close}: MobileBarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const path = usePathname()
    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                close()
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })
  return (
    <div ref={ref} className=" w-full border pb-10 h-fit bg-white z-50">

        <div>
            {
        Navigations.map((bar, index) => (
            <Link key={index} href={bar.route} className={`flex justify-center gap-3 py-2 rounded-md  ${path === bar.route && 'bg-primary bg-opacity-10 text-primary'}`}>
                <div>{bar.name}</div> 
            </Link>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar