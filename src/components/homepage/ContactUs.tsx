import Container from "../common/Container"
type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className="w-full bg-[#E8F4FA]">
        <Container>
            <div className="flex flex-col items-center gap-10 py-44">
                <div className="text-center text-4xl font-semibold max-w-md">Want your dream house? Contact Us</div>
                <div className="flex gap-3 max-w-[50%] w-full">
                    <input className='px-5 py-2 rounded-md w-full' type="text" placeholder="Enter Your Email" />
                    <button className="text-white bg-black px-5 py-3 rounded-lg">Subscribe</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ContactUs