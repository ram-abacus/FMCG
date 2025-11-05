import Image from "next/image"

export function TechSection() {
  return (
    <section className="py-14 px-5" id="tech">
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="max-w-[640px]">
            <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#f6a800] font-semibold mb-2">
              Technology Advantage
            </div>
            <h2 className="text-[clamp(1.7rem,1.9vw+1.2rem,2.1rem)] leading-[1.08] font-bold mb-3">
              Built for Both the Factory Floor and the Marketing Cloud.
            </h2>
            <p className="text-[0.98rem] leading-relaxed text-slate-600 mb-3">
              Unlike typical engagement platforms, <strong>Basiq360 is engineered for manufacturing realities.</strong>{" "}
              Our Print Gateway sits next to your industrial inkjet printers and syncs every printed code with the
              Basiq360 Cloud.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-slate-600">
              The result: your <strong>serialization data</strong> and <strong>consumer engagement journeys</strong>{" "}
              stay perfectly aligned — from QR generation to scan analytics.
            </p>
          </div>
        </div>

        <aside className="rounded-[24px] p-6 bg-gradient-to-br from-[#3b82f6]/13 via-transparent to-[#22c562]/16 bg-[#020617] text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
          <h3 className="text-base font-bold mb-4">How Basiq360 Print Gateway connects your world</h3>

          <div className="rounded-[18px] overflow-hidden mb-4">
            <Image
              src="Technology Advantage copy.webp"
              alt="Basiq360 Technology Diagram"
              width={400}
              height={300}
              className="w-full h-auto mx-aut"
            />
          </div>


          {/* <div className="grid gap-3">
            {[
              {
                left: "Packaging line generates unique QR/DataMatrix for each unit.",
                right: "Industrial printers (HP TIJ, KGK, Domino) print codes via Basiq360 Print Gateway.",
                primary: true,
              },
              {
                left: "Code & pack data registered into Basiq360 Cloud & EPCIS.",
                right: "QA & operations see traceability dashboards and alerts.",
              },
              {
                left: "Consumer scans pack in-store or at home for authenticity + story.",
                right: "Engagement, feedback, and loyalty events are written back to the same digital identity.",
                consumer: true,
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[0.85fr_0.35fr_0.85fr] gap-2 items-center">
                <div className="rounded-[14px] p-3 text-[0.78rem] border border-slate-400/70 bg-slate-900/90">
                  {row.left}
                </div>
                <div className="text-center text-2xl text-slate-400">→</div>
                <div
                  className={`rounded-[14px] p-3 text-[0.78rem] border ${
                    row.primary
                      ? "border-[#3b82f6]/90 bg-gradient-to-br from-[#2563eb]/90 to-[#083d49]"
                      : row.consumer
                        ? "border-[#22c562]/90 bg-gradient-to-br from-[#16a34a]/95 to-[#064e3b]"
                        : "border-slate-400/70 bg-slate-900/90"
                  }`}
                >
                  {row.right}
                </div>
              </div>
            ))}
          </div> */}

          <p className="mt-4 text-[0.7rem] text-slate-400">
            Every scan becomes a verified event against the same code — giving you{" "}
            <strong>compliance-grade traceability</strong> and
            <strong> marketing-grade insight</strong> in one place.
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-[0.72rem] text-slate-400">
            {[
              { label: "Factory & packaging line", color: "#38bdf8" },
              { label: "Basiq360 Cloud & EPCIS", color: "#a855f7" },
              { label: "Consumer & loyalty journeys", color: "#22c55e" },
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-slate-400/70 bg-slate-900/90"
              >
                <span className="w-[10px] h-[10px] rounded-full" style={{ background: item.color }}></span>
                {item.label}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
