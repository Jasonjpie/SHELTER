import Container from "./Container"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa' 
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mb-5 mt-16">
      <Container>
        <div className="divide-y-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-3 items-start p-3">
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
              <div>@Shelter</div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="font-bold">About Us</div>
              <div>Portfolio</div>
              <div>Projects</div>
              <div>Contact Us</div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="font-bold">Contact Us</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
              <div>+908 89097 890</div>
            </div>
            <div className="flex gap-3 items-end p-3">
              <div className="rounded-full p-3 shadow-lg border">
                <FaFacebookF />
              </div>
              <div className="rounded-full p-3 shadow-lg border">
                <FaInstagram />
              </div>
              <div className="rounded-full p-3 shadow-lg border">
                <FaTwitter />
              </div>
              <div className="rounded-full p-3 shadow-lg border">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="w-full text-center py-3">Copyright ® 2021 Lorem All rights Reserved</div>
        </div>
      </Container>
    </div>
  )
}

export default Footer