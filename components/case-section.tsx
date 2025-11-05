import Image from "next/image"

export function CaseSection() {
  return (
    <section className="py-14 px-5" id="case">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[640px]">
          <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#f6a800] font-semibold mb-2">Use Case</div>
          <h2 className="text-[clamp(1.7rem,1.9vw+1.2rem,2.1rem)] leading-[1.08] font-bold mb-3">
            Camelicious: Traceability Meets Trust.
          </h2>
          <p className="text-[0.98rem] leading-relaxed text-slate-600">
            The UAE's leading camel milk brand uses <strong>Basiq360</strong> to print serialized QR codes through
            <strong> KGK industrial printers</strong>. Each scan transforms a simple pack into a trust-building
            touchpoint.
          </p>
        </div>

        <article className="mt-8 rounded-[24px] p-6 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] border border-slate-300/90 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-[0.75rem] uppercase tracking-[0.16em] text-[#f6a800] font-semibold mb-1">
              What consumers see
            </div>
            <h3 className="text-xl font-bold mb-4">One scan to verify, learn, and engage.</h3>
            <ul className="grid gap-2 text-[0.92rem]">
              {[
                "Instant authenticity check to confirm the product is genuinely from Camelicious.",
                "Visibility into farm origin, processing date, and batch journey.",
                "Optional access to recipes, nutrition education, and brand storytelling.",
                "Ability to share feedback, ratings, or join a loyalty program tied to that specific bottle.",
              ].map((item, i) => (
                <li key={i} className="list-none pl-5 relative">
                  <span className="absolute left-0 top-[-1px] text-[0.82rem] text-[#f6a800]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-[18px] overflow-hidden text-slate-200">

              <Image
                src="Dashboard copy.webp"
                alt="Camelicious Brand Dashboard"
                width={400}
                height={300}
                className="w-full h-auto mx-auto"
              />


            {/* <div className="flex justify-between items-center mb-3 text-[0.76rem]">
              <span>Live Brand Dashboard</span>
              <span className="text-[0.7rem] text-slate-400">Camelicious • GCC region</span>
            </div>

            <div className="rounded-[14px] bg-slate-900/85 p-4 grid md:grid-cols-[1.1fr_1.2fr] gap-3 text-[0.75rem]">
              <div className="grid gap-2">
                {[
                  { label: "Today's Pack Scans", value: "12,487", tag: "+31% vs last week" },
                  { label: "Authenticity Alerts", value: "0 suspicious scans", tag: "Across GCC", green: true },
                  { label: "Opt-in to Loyalty", value: "42%", tag: "Of total scans this month" },
                ].map((kpi, i) => (
                  <div key={i}>
                    <div className="text-[0.7rem] text-slate-400">{kpi.label}</div>
                    <div className={`text-[0.86rem] font-semibold ${kpi.green ? "text-[#bef264]" : ""}`}>
                      {kpi.value}
                    </div>
                    <div className="text-[0.65rem] text-slate-400 mt-[0.2rem]">{kpi.tag}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-[14px] bg-gradient-to-b from-[#60a5fa]/30 to-transparent p-3">
                {[
                  { label: "KSA", width: "82%" },
                  { label: "UAE", width: "68%" },
                  { label: "Kuwait", width: "40%" },
                  { label: "Export (EU)", width: "24%" },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <div className="w-[90px] text-[0.7rem] text-slate-300">{bar.label}</div>
                    <div className="flex-1 h-[6px] rounded-full bg-slate-900/95 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#fbbf24]"
                        style={{ width: bar.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </aside>
        </article>
      </div>
    </section>
  )
}
