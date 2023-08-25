import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { CgQuote } from "react-icons/cg"
import  { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Image from "next/image"
import Container from "../common/Container"

type Props = {}

const Testmonials = (props: Props) => {
  return (
    <Container>
        <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="relative w-full lg:max-w-[50%] ">
                <div className=" flex flex-col gap-10 max-w-md mx-auto p-2 lg:p-10">
                    <div className="text-primary text-xl font-medium">TESTMONIALS</div>
                    <div className="font-semibold text-4xl">Look What Our Customers Say!</div>
                    <div className="text-lg">Rorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="flex gap-8">
                        <button className="p-4 rounded-full border border-primary">
                        <BsArrowLeft className='text-primary'/>
                        </button>
                        <button className="p-4 rounded-full border border-primary">
                        <BsArrowRight className='text-primary' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex justify-center items-center lg:max-w-[50%] overflow-clip py-24">
                <div className="w-[60%] h-fit relative">
                    <div className=" w-full bg-white rounded-2xl divide-y shadow-2xl border p-8 z-10">
                        <div className="flex flex-col pb-10">
                            <div><CgQuote  className='text-[#FFC700]'/></div>
                            <div>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                        </div>
                        <div className="flex justify-between py-3">
                            <div className="flex gap-2 items-center">
                                <div className="relative w-8 h-8 rounded-full">
                                    <Image className="rounded-full object-cover" src='/images/profile.jpg' fill alt='' />
                                </div>
                                <div>Jeno Wagaye</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiFillStar className='text-[#FFC700]' />
                                <AiFillStar className='text-[#FFC700]' />
                                <AiFillStar className='text-[#FFC700]' />
                                <AiFillStar className='text-[#FFC700]' />
                                <AiOutlineStar />
                            </div>
                            
                        </div>
                    </div>
                    <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10'>
                        <div className="w-96 h-96 rounded-full">
                            <div className="absolute inset-0 rounded-full opacity-50" style={{background: 'radial-gradient(circle, #FFD9EB, #ffffff)'}}></div>
                        </div>
                    </div>
                    <div className='absolute w-8 h-8 rounded-full opacity-40 bg-gradient-to-br from-[#4361EE] to-transparent -left-2 -top-0 -translate-y-1/2 -z-50' />

                </div>


            </div>
            
        </div>
    </Container>

  )
}

export default Testmonials