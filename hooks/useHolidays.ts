import { useState, useEffect, useCallback } from "react";
import { Holiday, CountryCode } from "@/types";
import { fetchHolidays } from "@/utils/api";

const HOLIDAY_STORAGE_KEY = "holiday_calendar_cache";

export const useHolidays = (country: CountryCode, year: number) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cachedYears, setCachedYears] = useState<Set<number>>(new Set());

  const loadHolidays = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const cacheKey = `${country}_${year}`;
      const cachedData = localStorage.getItem(HOLIDAY_STORAGE_KEY);

      if (cachedData) {
        const cache = JSON.parse(cachedData);
        if (
          cache[cacheKey] &&
          cache[cacheKey].timestamp > Date.now() - 7 * 24 * 60 * 60 * 1000
        ) {
          setHolidays(cache[cacheKey].data);

          const years = new Set(cachedYears);
          years.add(year);
          setCachedYears(years);

          setLoading(false);
          return;
        }
      }

      console.log(`Fetching holidays for ${country} in ${year}...`);
      const data = await fetchHolidays(country, year);
      console.log(`Received ${data.length} holidays for ${country} in ${year}`);

      setHolidays(data);

      const newCache = cachedData ? JSON.parse(cachedData) : {};
      newCache[cacheKey] = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(HOLIDAY_STORAGE_KEY, JSON.stringify(newCache));

      const years = new Set(cachedYears);
      years.add(year);
      setCachedYears(years);
    } catch (err) {
      console.error("Error loading holidays:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load holidays";
      setError(errorMessage);
      const fallbackData = getFallbackHolidays(country, year);
      setHolidays(fallbackData);
    } finally {
      setLoading(false);
    }
  }, [country, year]);

  const getFallbackHolidays = (
    countryCode: string,
    year: number,
  ): Holiday[] => {
    const fallbackData: Record<string, Record<number, Holiday[]>> = {
      JP: {
        2023: [
          {
            date: `${year}-01-01`,
            name: "元日",
            description: "New Year's Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-01-08`,
            name: "成人の日",
            description: "Coming of Age Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-02-11`,
            name: "建国記念の日",
            description: "National Foundation Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-02-23`,
            name: "天皇誕生日",
            description: "Emperor's Birthday",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-03-20`,
            name: "春分の日",
            description: "Vernal Equinox Day",
            type: "Public",
            country: "JP",
          },
        ],
        2024: [
          {
            date: `${year}-01-01`,
            name: "元日",
            description: "New Year's Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-01-08`,
            name: "成人の日",
            description: "Coming of Age Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-02-11`,
            name: "建国記念の日",
            description: "National Foundation Day",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-02-23`,
            name: "天皇誕生日",
            description: "Emperor's Birthday",
            type: "Public",
            country: "JP",
          },
          {
            date: `${year}-03-20`,
            name: "春分の日",
            description: "Vernal Equinox Day",
            type: "Public",
            country: "JP",
          },
        ],
      },
      CN: {
        2023: [
          {
            date: `${year}-01-01`,
            name: "元旦",
            description: "New Year's Day",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-01-22`,
            name: "春节",
            description: "Chinese New Year",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-04-05`,
            name: "清明节",
            description: "Qingming Festival",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-05-01`,
            name: "劳动节",
            description: "Labour Day",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-06-22`,
            name: "端午节",
            description: "Dragon Boat Festival",
            type: "Public",
            country: "CN",
          },
        ],
        2024: [
          {
            date: `${year}-01-01`,
            name: "元旦",
            description: "New Year's Day",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-02-10`,
            name: "春节",
            description: "Chinese New Year",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-04-04`,
            name: "清明节",
            description: "Qingming Festival",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-05-01`,
            name: "劳动节",
            description: "Labour Day",
            type: "Public",
            country: "CN",
          },
          {
            date: `${year}-06-10`,
            name: "端午节",
            description: "Dragon Boat Festival",
            type: "Public",
            country: "CN",
          },
        ],
      },
      US: {
        2023: [
          {
            date: `${year}-01-01`,
            name: "New Year's Day",
            description: "New Year's Day",
            type: "Public",
            country: "US",
          },
          {
            date: `${year}-01-16`,
            name: "Martin Luther King Jr. Day",
            description: "Birthday of Martin Luther King, Jr.",
            type: "Public",
            country: "US",
          },
          {
            date: `${year}-02-20`,
            name: "Presidents Day",
            description: "Washington's Birthday",
            type: "Public",
            country: "US",
          },
          {
            date: `${year}-05-29`,
            name: "Memorial Day",
            description: "Memorial Day",
            type: "Public",
            country: "US",
          },
          {
            date: `${year}-06-19`,
            name: "Juneteenth",
            description: "Juneteenth National Independence Day",
            type: "Public",
            country: "US",
          },
        ],
      },
    };

    return (
      fallbackData[countryCode]?.[year] || [
        {
          date: `${year}-01-01`,
          name: "New Year's Day",
          description: "New Year's Day",
          type: "Public",
          country: countryCode,
        },
      ]
    );
  };

  useEffect(() => {
    loadHolidays();
  }, [loadHolidays]);

  const refetch = () => {
    loadHolidays();
  };

  return {
    holidays,
    loading,
    error,
    refetch,
    cachedYears,
  };
};
