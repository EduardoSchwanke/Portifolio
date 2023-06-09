import { MenuClose } from "@/components/icons/MenuClose";
import Image from "next/image";
import Link from "next/link"

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({isVisible, onClose}: MenuProps) => {
  return (
    <div onClick={onClose} className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}>
      <div className="w-full bg-h-blue-900 h-96 shadow-md py-3 px-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-5">
          <Link href='/' className="w-16 h-16">
            <Image src="/Rocket.png" width={200} height={200} alt="minha logo" />
          </Link>
          <button onClick={onClose} className="flex justify-center items-center pr-1 text-white">
            <MenuClose/>
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center text-white">
          <Link href="/" onClick={onClose}>Sobre mim</Link>
          <Link href="/contatos" onClick={onClose}>Entre em contato</Link>
        </nav>
      </div>
    </div>
  )
}