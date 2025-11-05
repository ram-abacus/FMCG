import Image from "next/image"

export function WhySection() {


  return (
    <section className="py-14 px-5" id="why">
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div>
          <div className="max-w-[640px]">
            <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#f6a800] font-semibold mb-2">
              The Serialization Imperative
            </div>
            <h2 className="text-[clamp(1.7rem,1.9vw+1.2rem,2.1rem)] leading-[1.08] font-bold mb-3">
              Global Regulations Are Changing — GCC, EU, and Beyond.
            </h2>
            <p className="text-[0.98rem] leading-relaxed text-slate-600">
              Governments across <strong>Saudi Arabia, UAE, and Qatar</strong> are enforcing{" "}
              <strong>QR-based product serialization</strong> by
              <strong> 2025–2026</strong>, with similar initiatives accelerating in{" "}
              <strong>Europe and North America</strong>.
            </p>
          </div>

          <div className="mt-5 p-5 rounded-[18px] bg-slate-50 border border-slate-200/90">
            <h3 className="text-base font-semibold mb-4">Why food and beverage brands can't wait:</h3>
            <ul className="grid gap-2 text-[0.95rem]">
              {[
                "Every pack now needs a unique, scannable identity — printed and tracked from factory to consumer.",
                "Regulatory focus is shifting from batch-level logs to item-level traceability, recalls, and anti-counterfeit controls.",
                "Serialization is not just about compliance — it unlocks transparency, trust, and data directly from your consumers.",
              ].map((item, i) => (
                <li key={i} className="list-none pl-5 relative text-slate-600">
                  <span className="absolute left-0 top-[0.45rem] w-2 h-2 rounded-full bg-gradient-to-br from-[#18b57c] to-[#f6a800]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[18px] overflow-hidden bg-[#020617] text-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <Image
            src="Serialization Imperative copy.webp"
            alt="Global Serialization Regulations Map"
            width={400}
            height={300}
            className="w-full h-auto mx-auto"
          />
          {/* <div className="p-5 rounded-[18px] bg-[#020617] text-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            <div className="text-[0.78rem] uppercase tracking-[0.16em] text-slate-400 mb-2">
              High-Level Timeline (Illustrative)
            </div>
            {[
              { year: "2025", event: "KSA QR codes for priority categories" },
              { year: "2026", event: "Wider GCC rollout for F&B" },
              { year: "2027+", event: "EU & North America expand digital traceability" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex justify-between gap-3 text-[0.82rem] py-2 ${
                  i < 2 ? "border-b border-dashed border-slate-700/85" : ""
                }`}
              >
                <span className="text-slate-300">{item.year}</span>
                <span className="text-[#fbbf24] font-semibold text-right">{item.event}</span>
              </div>
            ))}
            <div className="inline-flex items-center gap-2 mt-3 text-[0.75rem] text-slate-400">
              <span className="w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#22c55e] to-[#f97316]"></span>
              <span>Plan serialization once, deploy globally with Basiq360.</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
