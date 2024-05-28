"use client";
import Image from "next/image"
import { MenuIcon } from "@bitcoin-design/bitcoin-icons-react/filled"
import React from "react"
import Link from "next/link"

interface HeaderProps {
    shy?: boolean;
}

export default function Header(props:HeaderProps){
    const [showNav, setShowNav] = React.useState(false)
    const [showHeader, setShowHeader] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setShowHeader(true)
          } else {
            setShowHeader(false)
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    const headerLinks = [
        {
          href: "/ux-design",
          text: "User Stories"
        },
        {
          href: "/developers",
          text: "Developer Docs"
        },
        {
          href: "https://github.com/lightning/bolts/pull/798",
          text: "Read the Spec"
        },
        {
          href: "/#get-involved",
          text: "Get Involved"
        },
    ]

    return(
        <>
            <div className={"fixed bg-slate-200/75 w-full h-full z-40 transition-opacity duration-500" + (showNav ? " animate-menu-overlay-fade" : " hidden")} onClick={()=>setShowNav(!showNav)}></div>
            <header className={"fixed w-full z-50 md:flex md:flex-row md:justify-between md:border-b md:border-b-slate-300 drop-shadow-lg" + (!showHeader && props.shy ? " md:hidden" : props.shy ? " md:animate-header-slide" : "")}>
                <div className="flex flex-row justify-between items-center p-4 bg-white relative z-40 border-b border-b-slate-300 md:border-0 lg:px-6">
                <a href="/"><Image src={'/bolt12-logo.svg'} alt="BOLT 12" width={124} height={69} className="w-[72px] md:w-[144px]" /></a>
                <MenuIcon className="w-8 h-8 md:hidden" onClick={()=>setShowNav(!showNav)} />
                </div>
                <nav className={"w-full transition-all md:block" + (showNav ? " block animate-menu-slide" : " hidden")}>
                <ul className="bg-[#37869F] w-full md:flex md:flex-row md:bg-white md:items-center md:justify-end md:h-full">
                    {headerLinks.map((link, index) => (
                    <li key={index} className="block md:h-full">
                        <Link href={link.href} className="text-[#FFF963] font-headings text-3xl p-4 border-b border-[#4998B1] block w-full md:text-[#37869F] md:text-2xl md:font-normal md:border-0 md:h-full md:flex md:items-center lg:p-6">{link.text}</Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </header>
        </>
    )
}