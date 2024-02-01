import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter bg-black">
      <div className="padding-container py-4 max-container flex w-full flex-col gap-14 bacdrop-blur-md bg-white/30">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="tarazakilogo2.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 pb-4">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="hover:text-black">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
                <ul className="reguular-14 flex gap-4 text-gray-30">
                    <Link href="https://www.facebook.com/BruceNgima" target="_blank" rel="noopener noreferer">
                      <Image src='facebook.svg' alt="logo" width={24} height={24} className="hover:fill-white" />
                    </Link>
                    <Link href="https://x.com/BruceNgima" target="_blank" rel="noopener noreferer">
                        <Image src='twitter.svg' alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://instagram.com/ngimabruce" target="_blank" rel="noopener noreferer">
                        <Image src='instagram.svg' alt="logo" width={24} height={24} />
                    </Link>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer