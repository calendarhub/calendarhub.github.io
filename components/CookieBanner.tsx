"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-fade-in-up">
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
          </div>
          <button
            onClick={handleReject}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. By clicking "Accept All", you
          consent to our use of cookies.
        </p>

        <div className="flex gap-3 mb-3">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors flex-1 font-medium"
          >
            Accept All Cookies
          </button>
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors flex-1"
          >
            Reject Non-essential
          </button>
        </div>

        <div className="text-center">
          <Link
            href="/cookies"
            className="text-blue-500 text-sm hover:text-blue-600 transition-colors inline-flex items-center"
          >
            Learn more about how we use cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
