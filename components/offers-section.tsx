export function OffersSection() {
  return (
    <section className="py-14 px-5" id="offers">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[640px]">
          <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#f6a800] font-semibold mb-2">
            Platform Value
          </div>
          <h2 className="text-[clamp(1.7rem,1.9vw+1.2rem,2.1rem)] leading-[1.08] font-bold mb-3">
            One Platform. Endless Value.
          </h2>
          <p className="text-[0.98rem] leading-relaxed text-slate-600">
            Basiq360 brings your factory, packaging lines, and consumers onto a single connected packaging platform — so
            every scan serves compliance <em>and</em> brand growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <article className="rounded-[24px] p-6 bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 mb-3 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-slate-600">
              <span className="w-[9px] h-[9px] rounded-full bg-gradient-to-br from-[#18b57c] to-[#0ea5e9]"></span>
              For Compliance &amp; Operations
            </div>
            <ul className="grid gap-2 text-[0.93rem]">
              {[
                {
                  title: "GS1 Digital Link & EPCIS-ready serialization engine",
                  desc: "that manages unique codes, events, and traceability history.",
                },
                {
                  title: "Basiq360 Print Gateway",
                  desc: "for TIJ/CIJ/laser printers — connect HP TIJ, KGK, Domino and more without replacing your lines.",
                },
                {
                  title: "Product authentication and recall tracking",
                  desc: "with real-time flags on suspicious or out-of-market scans.",
                },
                {
                  title: "Secure cloud dashboards",
                  desc: "for QA, operations, and regulators with full pack-level traceability.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <div className="mt-1 w-[14px] h-[14px] rounded-full border-2 border-slate-400/70 relative shrink-0">
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#0052cc] to-[#18b57c]"></div>
                  </div>
                  <div>
                    <strong className="font-semibold">{item.title}</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[24px] p-6 bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 mb-3 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-slate-600">
              <span className="w-[9px] h-[9px] rounded-full bg-gradient-to-br from-[#f6a800] to-[#f97316]"></span>
              For Marketing &amp; Brand Teams
            </div>
            <ul className="grid gap-2 text-[0.93rem]">
              {[
                {
                  title: "Consumer engagement via smart QR codes",
                  desc: "— unlock stories, recipes, and campaigns with a single scan.",
                },
                {
                  title: "Real-time feedback and review collection",
                  desc: "directly on the product, without extra apps.",
                },
                {
                  title: "Loyalty and reward integrations",
                  desc: "to drive repeat purchase, referrals, and advocacy.",
                },
                {
                  title: "Scan analytics and regional insights",
                  desc: "that show where, when, and how consumers interact with your packs.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <div className="mt-1 w-[14px] h-[14px] rounded-full border-2 border-slate-400/70 relative shrink-0">
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#0052cc] to-[#18b57c]"></div>
                  </div>
                  <div>
                    <strong className="font-semibold">{item.title}</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 p-4 rounded-[18px] border border-dashed border-slate-400/60 bg-white/85 text-[0.9rem]">
          <span className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#fef9c3] via-[#f97316] to-[#22c55e]"></span>
          <div>From the factory line to your customer's hand — Basiq360 connects every step.</div>
        </div>
      </div>
    </section>
  )
}
