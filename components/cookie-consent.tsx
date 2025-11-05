"use client"

import { useState, useEffect } from "react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1120px] mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-200 text-sm flex-1">
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By
            clicking "Accept", you consent to our use of cookies.{" "}
            <a href="/cookies-policy" className="text-[#f6a800] hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2 rounded-full border border-slate-500 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-all"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-full bg-gradient-to-br from-[#18b57c] to-[#22c55e] text-white text-sm font-semibold shadow-lg hover:translate-y-[-1px] hover:shadow-xl transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
