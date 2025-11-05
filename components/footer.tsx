"use client"

import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-slate-300/80 bg-slate-50/95">
        <div className="max-w-[1120px] mx-auto px-5 py-5 flex flex-wrap justify-between gap-4 items-center text-[0.8rem] text-slate-600">
          <div>© {currentYear} Basiq360. All rights reserved.</div>
          <div className="flex gap-4 flex-wrap">
            {/* <Link href="https://www.basiq360.com" className="hover:text-[#0052cc] transition-colors">
              basiq360.com
            </Link>
            <Link href="https://www.basiq360.com/about" className="hover:text-[#0052cc] transition-colors">
              About
            </Link> */}
            <button onClick={() => setIsContactModalOpen(true)} className="hover:text-[#0052cc] transition-colors">
              Contact
            </button>
            <Link href="/privacy-policy" className="hover:text-[#0052cc] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" className="hover:text-[#0052cc] transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
