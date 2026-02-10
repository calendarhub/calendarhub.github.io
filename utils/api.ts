import axios from "axios";
import { Holiday } from "@/types";

const HOLIDAY_API_BASE = "https://date.nager.at/api/v3";

export const fetchHolidays = async (
  countryCode: string,
  year: number,
): Promise<Holiday[]> => {
  try {
    const response = await axios.get(
      `${HOLIDAY_API_BASE}/PublicHolidays/${year}/${countryCode}`,
    );

    if (response?.data)
      return response?.data?.map((holiday: any) => ({
        date: holiday.date,
        name: holiday.localName || holiday.name,
        description: holiday.name,
        type: holiday.types?.[0] || "Public",
        country: countryCode,
      }));
    else return [];
  } catch (error) {
    console.error(`Failed to fetch holidays for ${countryCode}:`, error);
    return getFallbackHolidays(countryCode, year);
  }
};

const getFallbackHolidays = (countryCode: string, year: number): Holiday[] => {
  const fallbackData: Record<string, Record<number, Holiday[]>> = {
    JP: {
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
    FR: {
      2024: [
        {
          date: `${year}-01-01`,
          name: "Jour de l'an",
          description: "New Year's Day",
          type: "Public",
          country: "FR",
        },
        {
          date: `${year}-04-01`,
          name: "Lundi de Pâques",
          description: "Easter Monday",
          type: "Public",
          country: "FR",
        },
        {
          date: `${year}-05-01`,
          name: "Fête du Travail",
          description: "Labour Day",
          type: "Public",
          country: "FR",
        },
        {
          date: `${year}-05-08`,
          name: "Victoire 1945",
          description: "Victory in Europe Day",
          type: "Public",
          country: "FR",
        },
        {
          date: `${year}-07-14`,
          name: "Fête nationale",
          description: "Bastille Day",
          type: "Public",
          country: "FR",
        },
      ],
    },
  };

  return fallbackData[countryCode]?.[year] || [];
};
