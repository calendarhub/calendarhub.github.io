"use client";

import { Holiday, Language } from "@/types";
import { t } from "@/utils/i18n";
import { X, Calendar, Tag, Info, Globe, Star } from "lucide-react";
import { useEffect } from "react";

interface HolidayModalProps {
  holiday: Holiday | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function HolidayModal({
  holiday,
  isOpen,
  onClose,
  language,
}: HolidayModalProps) {
  const getRegionGradient = (country: string) => {
    switch (country) {
      case "JP":
        return "from-red-100 to-red-50";
      case "CN":
        return "from-orange-100 to-orange-50";
      case "US":
        return "from-blue-100 to-blue-50";
      case "GB":
        return "from-blue-100 to-red-50";
      default:
        return "from-blue-100 to-purple-50";
    }
  };

  const getRegionBorder = (country: string) => {
    switch (country) {
      case "JP":
        return "border-red-200";
      case "CN":
        return "border-orange-200";
      case "US":
        return "border-blue-200";
      case "GB":
        return "border-blue-300";
      default:
        return "border-blue-200";
    }
  };

  const getRegionColor = (country: string) => {
    switch (country) {
      case "JP":
        return "text-red-600";
      case "CN":
        return "text-orange-600";
      case "US":
        return "text-blue-600";
      case "GB":
        return "text-blue-700";
      default:
        return "text-blue-600";
    }
  };

  const getCountryName = (countryCode: string) => {
    return t(`country.${countryCode}`, language) || countryCode;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !holiday) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible backdrop-blur-sm" : "opacity-0 invisible"
      }`}
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div
        className={`relative w-full max-w-md transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden border-2 ${getRegionBorder(holiday.country)} shadow-2xl`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${getRegionGradient(holiday.country)} opacity-50 pointer-events-none`}
          ></div>

          <div className="relative z-10">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${getRegionColor(holiday.country)} bg-opacity-20`}
                  >
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {holiday.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">
                        {getCountryName(holiday.country)}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {holiday.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div
                    className={`p-2 rounded-lg ${getRegionColor(holiday.country)} bg-opacity-20`}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">
                      {t("holiday.date", language)}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {formatDate(holiday.date)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div
                    className={`p-2 rounded-lg ${getRegionColor(holiday.country)} bg-opacity-20`}
                  >
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">
                      {t("holiday.country", language)}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {getCountryName(holiday.country)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div
                    className={`p-2 rounded-lg ${getRegionColor(holiday.country)} bg-opacity-20`}
                  >
                    <Tag className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">
                      {t("holiday.type", language)}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {holiday.type}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-gray-400" />
                  <div className="text-sm font-medium text-gray-700">
                    {t("holiday.description", language)}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="text-gray-700 leading-relaxed">
                    {holiday.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
