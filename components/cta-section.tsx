"use client"

import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function CtaSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <section className="py-14 pb-16 px-5" id="cta">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px] text-left">
            <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#f6a800] font-semibold mb-2">
              Get Started
            </div>
            <h2 className="text-[clamp(1.7rem,1.9vw+1.2rem,2.1rem)] leading-[1.08] font-bold">
              Ready to make every product intelligent?
            </h2>
          </div>

          <div
            className="mt-8 rounded-[32px] p-8 text-slate-50 grid md:grid-cols-[1.4fr_1fr] gap-7 items-center shadow-[0_30px_70px_rgba(15,23,42,0.8)]"
            style={{
              background: `
              radial-gradient(circle at top left, rgba(34, 197, 94, 0.2), transparent 55%),
              radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.2), transparent 55%),
              linear-gradient(135deg, #020617, #020617 55%, #0b1120 100%)
            `,
            }}
          >
            <div className="flex flex-col gap-3">
              <p className="text-slate-200">
                Whether you're a manufacturer, exporter, or packaging partner, <strong>Basiq360</strong> helps you
                achieve compliance today — and build lasting consumer relationships tomorrow.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Food & Beverage", "Dairy & Fresh", "Snacks & Beverages", "Private Labels & Co-packers"].map(
                  (badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[0.7rem] border border-slate-400/70 text-[#cbd5f5]"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full bg-gradient-to-br from-[#18b57c] to-[#22c55e] text-white text-[0.86rem] font-semibold shadow-[0_18px_40px_rgba(34,197,94,0.6)] hover:translate-y-[-1px] hover:shadow-[0_22px_55px_rgba(34,197,94,0.75)] transition-all"
                >
                  Talk to Our Team
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full border border-slate-400/60 bg-white/60 text-slate-600 text-[0.86rem] font-semibold hover:bg-white hover:border-[#0052cc] hover:text-[#0052cc] transition-all"
                >
                  Request a Pilot
                </button>
              </div>

              <div className="text-[0.76rem] text-slate-400 mt-1">
                From compliance to connection. Your packaging, now intelligent.
              </div>
            </div>

            <div className="justify-self-center max-w-[340px]">
              <div className="rounded-[24px] p-4 bg-slate-900/85 border border-slate-400/70 text-[0.82rem] grid gap-2">
                {[
                  { label: "Implementation window", value: "Go live in weeks" },
                  { label: "Printer compatibility", value: "TIJ / CIJ / Laser" },
                  { label: "Regions", value: "GCC, MENA, EU, North America" },
                  { label: "Focus", value: "Serialization, authenticity & engagement" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between gap-3">
                    <span className="text-slate-400">{row.label}</span>
                    <span className="font-semibold text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[0.8rem] text-slate-300">
                Share your current packaging and printer setup — our team will map a clear path to GCC-compliant
                connected packaging, using your existing lines wherever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
