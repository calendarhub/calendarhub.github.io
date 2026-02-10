"use client";

import { useState, useEffect } from "react";
import { Calendar, Filter, MapPin, Info, ChevronDown } from "lucide-react";
import { CountryCode, Holiday } from "@/types";
import { useHolidays } from "@/hooks/useHolidays";
import CalendarComponent from "@/components/Calendar";
import CountrySelector from "@/components/CountrySelector";
import HolidayModal from "@/components/HolidayModal";
import {
  t,
  getDefaultCountry,
  getDefaultLanguage,
  saveUserPreferences,
} from "@/utils/i18n";
import { countries, countriesByRegion, regions } from "@/utils/countries";
import { getHolidaysForMonth } from "@/utils/dateUtils";
import { useLanguage } from "@/contexts/LanguageContext";
export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [country, setCountry] = useState<CountryCode>("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const { holidays, loading, error, refetch } = useHolidays(
    country,
    currentYear,
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    setCountry(getDefaultCountry());
    setLanguage(getDefaultLanguage());
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentMonthHolidays = getHolidaysForMonth(
    holidays,
    currentYear,
    currentMonth,
  );

  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  const handleYearChange = (year: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
    setIsYearOpen(false);
  };

  const handleHolidayClick = (holiday: Holiday) => {
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  const filteredCountries =
    selectedRegion === "all"
      ? countries
      : countriesByRegion[selectedRegion as keyof typeof countriesByRegion] ||
        [];

  return (
    <main className="pb-safe">
      <div className="container mx-auto px-3 sm:px-4 py-4 md:py-8 max-mobile">
        <div className="mb-4 md:mb-6  z-10">
          <div className="glass rounded-2xl p-3 md:p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700 text-sm md:text-base">
                {t("calendar.year", language)}:
              </span>
              <div className="relative z-10">
                <button
                  onClick={() => setIsYearOpen(!isYearOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-button"
                >
                  <span className="font-medium text-gray-800">
                    {currentYear}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isYearOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isYearOpen && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20 animate-fade-in">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => handleYearChange(year)}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <div className="glass rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-medium text-gray-700 text-sm md:text-base flex items-center">
                <Filter className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t("calendar.selectRegion", language)}
              </h3>
              {isMobile && (
                <button
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className="text-blue-600 text-sm font-medium"
                >
                  {isRegionOpen ? "Collapse" : "Expand"}
                </button>
              )}
            </div>

            <div
              className={`${isMobile && !isRegionOpen ? "hidden" : "block"}`}
            >
              <div className="flex flex-wrap gap-1.5 md:gap-2 touch-scroll">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all border text-xs md:text-sm ${
                      selectedRegion === region.id
                        ? "glass bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border-blue-300"
                        : "bg-white text-gray-600 hover:text-blue-700 hover:bg-blue-50 border-gray-200"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <CountrySelector
            country={country}
            countries={filteredCountries}
            onCountryChange={(countryCode) => {
              setCountry(countryCode);
              saveUserPreferences(language, countryCode);
            }}
            language={language}
          />
        </div>

        <div className="mb-6 md:mb-8">
          <div className="glass rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                    {t(`country.${country}`, language)}
                  </h2>
                  <div className="flex items-center space-x-2 md:space-x-4 mt-1">
                    <p className="text-gray-600 text-xs md:text-sm flex items-center">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      {t(
                        `region.${countries.find((c) => c.code === country)?.region || "asia"}`,
                        language,
                      )}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm flex items-center">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      {currentYear}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600 text-xs md:text-sm">
                  {t("calendar.holidays", language)}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  {currentMonthHolidays.length}{" "}
                  <span className="text-sm md:text-base text-gray-500">
                    / {holidays.length}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {isMobile ? "Month / Year" : "This month / This year"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-8 md:py-16 glass rounded-2xl p-6 md:p-8 my-4 md:my-8">
            <div className="relative">
              <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-500 animate-pulse" />
              </div>
            </div>
            <span className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
              {t("loading.holidays", language)}
            </span>
          </div>
        )}

        {error && !loading && (
          <div className="glass rounded-2xl p-4 md:p-8 text-center my-4 md:my-8 border border-red-200">
            <div className="text-red-500 font-medium text-base md:text-lg mb-2 flex items-center justify-center">
              <Info className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              {t("error.loading", language)}
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              {error}
            </p>
            <button
              onClick={refetch}
              className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-red-100 to-red-50 hover:from-red-200 hover:to-red-100 text-red-700 rounded-xl transition-all border border-red-300 hover:border-red-400 text-sm md:text-base touch-button"
            >
              {t("retry", language)}
            </button>
          </div>
        )}

        {!loading && (
          <div className="animate-fade-in">
            <CalendarComponent
              date={currentDate}
              holidays={holidays}
              country={country}
              viewMode={viewMode}
              language={language}
              onDateChange={setCurrentDate}
              onViewModeChange={setViewMode}
              onHolidayClick={handleHolidayClick}
              isMobile={isMobile}
            />
          </div>
        )}

        {isMobile && !loading && (
          <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-xl text-center">
            <p className="text-blue-700 text-sm">
              💡 <span className="font-medium">Tip:</span> Tap on dates with
              holiday badges for details
            </p>
          </div>
        )}
      </div>
      {/* Holiday Modal */}
      <HolidayModal
        holiday={selectedHoliday}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </main>
  );
}
