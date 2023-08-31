import Container from "@/components/common/Container"
import Image from "next/image"

type Props = {}

const MoreImages = (props: Props) => {
  return (
    <Container>
        <div className='grid grid-cols-12 items-center gap-8 lg:gap-16 py-24'>
            <div className="relative col-span-6 w-full h-[300px] lg:h-[500px]">
                <Image className="object-cover" src='/images/design-3.jpg' fill alt='' />
            </div>
            <div className="relative col-span-6 w-full h-[500px] lg:h-[800px]">
                <Image className="object-cover" src='/images/design-2.jpg' fill alt='' />
            </div>
            <div className="relative col-span-12 w-full h-[500px] lg:h-[800px]">
                <Image className="object-cover" src='/images/design-1.jpg' fill alt='' />
            </div>
        </div>
    </Container>
  )
}

export default MoreImages