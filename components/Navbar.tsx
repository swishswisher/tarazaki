"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="fixed w-full left-0 top-0 z-10 ease-in duration-300 justify-between bg-black/95">
      <div className="max-w-[1240px] m-auto flexBetween p-4 text-white">
        <Link href="/">
          <Image src="/tarazakilogo.svg" alt="logo" width={50} height={25}  />
        </Link>

        <ul className="hidden sm:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold p-4">
              {link.label}
            </Link>
          ))}
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile menu */}
        <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : 
        "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
          <ul className="flex-row">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="flex-row regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-gray-500 p-4">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar