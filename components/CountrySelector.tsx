"use client";

import { CountryCode, Language } from "@/types";
import { t } from "@/utils/i18n";
import { Search } from "lucide-react";
import { useState } from "react";
import { CountryInfo } from "@/types";

interface CountrySelectorProps {
  country: CountryCode;
  countries: CountryInfo[];
  onCountryChange: (country: CountryCode) => void;
  language: Language;
}

export default function CountrySelector({
  country,
  countries,
  onCountryChange,
  language,
}: CountrySelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter(
    (c) =>
      t(`country.${c.code}`, language)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      c.code.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="glass gradient-border rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-black/60" />
            <input
              type="text"
              placeholder={`${t("calendar.selectCountry", language)}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-black placeholder-white/40"
            />
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredCountries.map((c) => (
          <button
            key={c.code}
            onClick={() => onCountryChange(c.code)}
            className={`
              relative p-4 rounded-xl transition-all duration-300 group
              grid gap-3 overflow-hidden
              ${
                country === c?.code
                  ? `ring-2 ring-white/30 shadow-glow scale-105`
                  : "glass border border-white/10 hover:border-white/20 hover:scale-105"
              }
            `}
          >
            {country === c?.code && (
              <div
                className="absolute inset-0"
                style={{ background: "#2b7fff" }}
              ></div>
            )}
            <div className="flex items-center justify-between">
              <div
                className={`text-3xl relative z-10 ${country === c?.code ? "text-white group-hover:text-white/90" : "text-black/90 group-hover:text-black"}`}
              >
                {c.flag}
              </div>
              <div
                className={`relative z-10 ${country === c?.code ? " text-white group-hover:text-white/90" : "text-black/90 group-hover:text-black"}`}
              >
                {t(`country.${c.code}`, language)}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* No Results */}
      {filteredCountries.length === 0 && (
        <div className="text-center py-8 glass rounded-2xl">
          <div className="text-black/60">
            No countries found matching "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
}
