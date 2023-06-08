import Image from "next/image";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiAxios, SiTailwindcss } from "react-icons/si";
import { TbBrandRadixUi, TbBrandTypescript, TbBrandVite } from "react-icons/tb";

export function Portifolio() {
  return (
    <div className="w-full flex justify-evenly">
      <div className="w-[500px] cursor-pointer">
        <Image
          src="/habit-removebg-1.png"
          width={1300}
          height={600}
          alt="Picture of the author"
        />
        <div className="bg-blue-100 mx-1 p-2 rounded-b-xl h-fit">
          <h1 className="text-4xl font-bold p-2">Habits Web</h1>
          <div className="pl-2 flex gap-2 flex-wrap">
            <p className="flex"><TbBrandTypescript className="pr-1 text-2xl text-blue-700"/>Typescript</p> |
            <p className="flex"><FaReact className="pr-1 text-2xl text-blue-400"/>React</p> |
            <p className="flex"><TbBrandVite className="pr-1 text-2xl text-violet-600"/>Vite</p> | 
            <p className="flex"><DiJavascript1 className="pr-1 text-2xl text-yellow-500"/>Javascript</p> | 
            <p className="flex"><SiTailwindcss className="pr-1 text-2xl text-blue-500"/>Tailwindcss</p> | 
            <p className="flex"><TbBrandRadixUi className="pr-1 text-2xl text-blue-500"/>Radix ui</p>  
          </div>
        </div>
      </div>

      <div className="w-[500px] cursor-pointer">
        <Image
          src="/video-1.png"
          width={1300}
          height={600}
          alt="Picture of the author"
        />
        <div className="bg-blue-100 ml-1 p-2 rounded-b-xl">
          <h1 className="text-4xl font-bold p-2">Videoteca web</h1>
          <div className="pl-2 flex gap-2 flex-wrap">
            <p className="flex"><DiJavascript1 className="pr-1 text-2xl text-yellow-500"/>Javascript</p> |
            <p className="flex"><FaReact className="pr-1 text-2xl text-blue-400"/>React</p> |
            <p className="flex"><TbBrandVite className="pr-1 text-2xl text-violet-600"/>Vite</p> |  
            <p className="flex"><SiTailwindcss className="pr-1 text-2xl text-blue-500"/>Tailwindcss</p> | 
            <p className="flex"><SiAxios className="pr-1 text-2xl text-blue-500"/>Axios</p>  
          </div>
        </div>
      </div>
    </div>
  )
}