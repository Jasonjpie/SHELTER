"use client"
import { faq } from "@/data"
import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

type Props = {}

const FAQ = (props: Props) => {
    const [ index, setIndex ] = useState(-1)
    const handleClick = (id:number) => {
        if(index === id){
            setIndex(-1)
        }else{
            setIndex(id)
        }
    }
  return (
    <div id="faq" className="flex flex-col gap-10 mb-44">
        <div className="flex flex-col items-center gap-3 font-semibold">
            <div className="text-base text-[#929292]">IN CASE YOUR WONDERING</div>
            <div className="text-3xl lg:text-6xl">FAQ</div>
        </div>
        <div className="flex flex-col gap-8 self-center">
            {
                faq.map(question => 
                <button key={question.id} className="flex gap-5 border-b-2 py-5" onClick={() => handleClick(question.id)}>
                    {index === question.id ? <AiOutlineMinus size={30} className='shrink-0 rounded-full p-2 text-white bg-[#324A89]'/>:<AiOutlinePlus size={30} className='shrink-0 rounded-full p-2 text-white bg-[#324A89]'/>}
                    <div className="flex flex-col items-start text-left gap-5">
                        <div className="font-semibold text-2xl">{question.question}</div>
                        {index === question.id && <div className="max-w-md">{question.description}</div>}
                    </div>
                </button>
                )
            }
        </div>
    </div>
  )
}

export default FAQ