"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { id: "en" as const, label: "EN", name: "English" },
    { id: "zh" as const, label: "中文", name: "Chinese" },
    { id: "ja" as const, label: "日本語", name: "Japanese" },
  ];

  return (
    <>
      <div
        className="flex items-center justify-between"
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
      >
        <Globe className="w-4 h-4 text-gray-400" />
        <div className="relative">
          <button className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-button">
            <span className="font-medium text-gray-800">
              {languages.filter((lang) => lang.id == language)?.[0]?.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10 animate-fade-in">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
