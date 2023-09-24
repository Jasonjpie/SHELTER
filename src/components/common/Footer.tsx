import Link from "next/link"
import Container from "./Container"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaHouzz, FaYoutube } from 'react-icons/fa'
import { Routes } from "../../../Routes"


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mb-5 mt-16">
      <Container>
        <div className="divide-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-3 items-start p-3">
              {/* <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div> */}
              <div className="text-primary text-2xl font-bold">SHELTER</div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="font-bold">About Us</div>
              {/* <div>Portfolio</div> */}
              <Link href={Routes.PROJECTS} passHref>
                <div>Projects</div>
              </Link>
              <Link href={Routes.HOME + '#Testimonial'} passHref>
                <div>Testimonials</div>
              </Link>
              <Link href={Routes.SERVICES} passHref>
                <div>Services</div>
              </Link>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="font-bold">Contact Us</div>
              <div>North Hollywood, CA 91605, US. </div>
              <div> +1 818-915-1831</div>
              <div> jasonjpinc@gmail.com</div>
            </div>
            <div className="flex gap-3 items-end p-3">
              <div className="rounded-full p-3 shadow-lg border">
                <Link href='https://www.facebook.com/Jjpconstruction/'
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </div>
              <div className="rounded-full p-3 shadow-lg border">
                <Link href='https://www.instagram.com/jjpconstruction/'
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
              {/* <div className="rounded-full p-3 shadow-lg border">
                <Link href='https://www.instagram.com/jjpconstruction/'
                    target="_blank"
                  >
                  <FaTwitter />
                  </Link>
                </div> */}
              {/* <div className="rounded-full p-3 shadow-lg border">
              <Link href='https://www.instagram.com/jjpconstruction/'
                  target="_blank"
                >
                <FaLinkedinIn />
                </Link>
              </div> */}
              <div className="rounded-full p-3 shadow-lg border">
                <Link href='https://www.houzz.com/professionals/home-builders/jjp-construction-pfvwus-pf~724293494?'
                  target="_blank"
                >
                  <FaHouzz />
                </Link>
              </div>
              <div className="rounded-full p-3 shadow-lg border">
                <Link href='https://www.youtube.com/@JasonPie/videos'
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full text-center py-3">Copyright ® 2023 All rights Reserved</div>
        </div>
      </Container>
    </div>
  )
}

export default Footer