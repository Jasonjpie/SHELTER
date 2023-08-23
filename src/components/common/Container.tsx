import { ReactNode } from "react"

type Props = {
    children:ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className="max-w-[1540px] w-full mx-auto px-2 lg:px-10">{children}</div>
  )
}

export default Container