import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-12 pb-[3.75rem]">
      <div className="max-w-[1120px] mx-auto px-5 grid md:grid-cols-2 gap-11 items-center">
        <div className="flex flex-col gap-[1.4rem] order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-[0.2rem] rounded-full text-[0.72rem] font-semibold uppercase tracking-[0.12em] bg-[#18b57c]/8 text-[#18b57c] border border-[#22c585]/35 w-fit">
            <span className="w-[7px] h-[7px] rounded-full bg-gradient-to-br from-[#f6a800] to-[#18b57c]"></span>
            GCC &amp; Global Food Serialization
          </div>

          <div className="flex flex-col gap-[0.7rem]">
            <h1 className="text-[clamp(2.35rem,3.1vw+1.5rem,3.2rem)] leading-[1.08] font-bold">
              Give Every Product a Voice with Connected Packaging.
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Basiq360 helps food brands and exporters meet serialization mandates, protect authenticity, and engage
              consumers — all from a single platform that connects your packaging to the cloud.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full bg-gradient-to-br from-[#0052cc] to-[#003c96] text-white text-[0.86rem] font-semibold shadow-[0_14px_30px_rgba(0,82,204,0.35)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(0,82,204,0.45)] transition-all"
            >
              Book a Demo
            </Link>
            <Link
              href="#offers"
              className="inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full border border-slate-400/60 bg-white/60 text-slate-600 text-[0.86rem] font-semibold hover:bg-white hover:border-[#0052cc] hover:text-[#0052cc] transition-all"
            >
              Explore Connected Packaging
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 mt-1 text-[0.8rem] text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#18b57c]"></span>
              Built for GCC, MENA &amp; global exporters
            </span>
            <span>Food, beverage, and dairy brands</span>
            <span>GS1 Digital Link &amp; EPCIS-ready</span>
          </div>

          <p className="text-[0.86rem] text-slate-600">
            <strong>From Farm to Fork, Every Product Deserves a Digital Identity.</strong>
          </p>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative bg-gradient-to-br from-[#18b57c]/15 via-transparent to-[#f6a800]/18 rounded-[32px] p-7 shadow-[0_18px_45px_rgba(15,23,42,0.09)] overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/6 text-[0.7rem] uppercase tracking-[0.14em] text-slate-600 mb-3">
              <span>Inkjet Line</span>
              <span className="text-[#0052cc] font-semibold">Connected to Basiq360 Cloud</span>
            </div>

            <h3 className="text-xl font-bold mb-1">Every pack gets its own digital identity.</h3>
            <p className="text-[0.86rem] text-slate-600 mb-3">
              Use your existing TIJ/CIJ printers to print unique QR/DataMatrix codes linked instantly to compliance,
              authentication, and consumer journeys.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
              {[
                { type: "Milk & Dairy", tag: "QR • Serialized" },
                { type: "Sauces & Dips", tag: "GS1 Digital Link" },
                { type: "Snacks & Beverages", tag: "Consumer Campaign" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[18px] p-3 bg-white/88 border border-slate-200/90 flex flex-col justify-between min-h-[120px]"
                >
                  <div>
                    <div className="text-[0.78rem] font-semibold mb-1">{item.type}</div>
                    <div className="inline-flex items-center gap-1 px-2 py-[0.15rem] rounded-full bg-[#0052cc]/8 text-[#0052cc] text-[0.7rem] font-semibold">
                      {item.tag}
                    </div>
                  </div>
                  <div className="w-full h-8 rounded-full bg-gradient-to-r from-[#18b57c]/12 to-[#f6a800]/16 relative overflow-hidden">
                    <div className="absolute inset-[6px] rounded-full bg-gradient-to-r from-transparent via-[#10b981]/55 via-[#f59e0b]/75 via-[#10b981]/90 to-transparent opacity-90"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="items-center rounded-[18px] overflow-hidden">

              <Image
                src="Hero Image.webp"
                alt="Consumer Scanning Product QR Code"
                width={240}
                height={240}
                className="w-full h-auto mx-auto md:mx-0"
              />

              {/* <div className="rounded-[20px] bg-[#020617] p-4 text-slate-200 text-[0.74rem] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <div className="flex justify-between items-center mb-2 text-[0.7rem] text-slate-400">
                  <span>Live Consumer Scan</span>
                  <div className="flex gap-1">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#22c55e]"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-slate-600"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-slate-600"></div>
                  </div>
                </div>
                <div className="grid grid-cols-[1.1fr_1.5fr] gap-3 items-center">
                  <div className="rounded-[14px] bg-gradient-to-b from-[#0f172a] to-[#020617] p-2 border border-slate-400/45">
                    <div className="w-[68px] h-[68px] rounded-xl border-[6px] border-[#020617] bg-gradient-to-br from-[#ea580c] to-[#22c55e] relative overflow-hidden">
                      <div className="absolute inset-2 rounded-lg border-3 border-slate-900/90"></div>
                      <div className="absolute inset-[18px] rounded-md border-2 border-slate-900/90"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-[0.74rem]">
                      <span className="text-slate-400">Product</span>
                      <span className="font-semibold">Camel Milk 500ml</span>
                    </div>
                    <div className="flex justify-between text-[0.74rem]">
                      <span className="text-slate-400">Origin</span>
                      <span className="font-semibold">Al Ain, UAE</span>
                    </div>
                    <div className="flex justify-between text-[0.74rem]">
                      <span className="text-slate-400">Scan Region</span>
                      <span className="font-semibold">Riyadh, KSA</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-2 py-[0.18rem] rounded-full border border-slate-400/60 text-[0.68rem] text-slate-400">
                        Authenticity: Verified
                      </span>
                      <span className="px-2 py-[0.18rem] rounded-full border border-slate-400/60 text-[0.68rem] text-slate-400">
                        Recall: Clear
                      </span>
                      <span className="px-2 py-[0.18rem] rounded-full border border-slate-400/60 text-[0.68rem] text-slate-400">
                        Feedback: 4.8★
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/90 p-3 text-[0.7rem]">
                {[
                  { label: "GCC compliant QR", value: "Serialization OK", chip: true },
                  { label: "Cloud event stored (EPCIS)", value: "03:21:07" },
                  { label: "Consumer opted into loyalty", value: "+25 pts" },
                  { label: "Review submitted", value: '"Tastes fresh"' },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-1 ${
                      i < 3 ? "border-b border-dashed border-slate-700/85" : ""
                    }`}
                  >
                    <span className="text-slate-300">{row.label}</span>
                    {row.chip ? (
                      <span className="px-2 py-[0.1rem] rounded-full text-[0.65rem] bg-[#22c562]/14 text-[#bbf7d0]">
                        {row.value}
                      </span>
                    ) : (
                      <span className="text-slate-300">{row.value}</span>
                    )}
                  </div>
                ))}
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
