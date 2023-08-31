import Container from "@/components/common/Container"
import Image from "next/image"
type Props = {}

const ProjectDetail = (props: Props) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative w-full h-[80vh] max-h-[900px] p-10">
          <Image className="object-cover" src='/images/hero-image.jpg' fill alt=''/>
        </div>
        <div className="flex flex-col capitalize gap-10 p-10">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-0.5 bg-black"/>
            <div className="font-bold">The Project</div>
          </div>
          <div className="font-medium text-2xl text-[#818181]">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat </div>
          <div className="font-medium text-lg text-[#818181]">lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu </div>
        </div>
      </div>
    </Container>
  )
}

export default ProjectDetail