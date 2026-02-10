import { CountryInfo, CountryCode } from "@/types";

export const countries: CountryInfo[] = [
  // Asia
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    region: "asia",
    color: "#bc002d",
    gradient: "from-[#bc002d] to-[#ff6b6b]",
  },
  {
    code: "CN",
    name: "China",
    flag: "🇨🇳",
    region: "asia",
    color: "#de2910",
    gradient: "from-[#de2910] to-[#ff9e6d]",
  },
  {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    region: "asia",
    color: "#003478",
    gradient: "from-[#003478] to-[#4a6fa5]",
  },
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    region: "asia",
    color: "#FF9933",
    gradient: "from-[#FF9933] to-[#138808]",
  },
  {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    region: "asia",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#FFFFFF]",
  },

  // Europe
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "europe",
    color: "#00247D",
    gradient: "from-[#00247D] to-[#CF142B]",
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    region: "europe",
    color: "#002395",
    gradient: "from-[#002395] to-[#ED2939]",
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    region: "europe",
    color: "#000000",
    gradient: "from-[#000000] to-[#DD0000]",
  },
  {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    region: "europe",
    color: "#009246",
    gradient: "from-[#009246] to-[#CE2B37]",
  },
  {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    region: "europe",
    color: "#AA151B",
    gradient: "from-[#AA151B] to-[#F1BF00]",
  },

  // America
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    region: "america",
    color: "#3C3B6E",
    gradient: "from-[#3C3B6E] to-[#B22234]",
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    region: "america",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#FFFFFF]",
  },
  {
    code: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    region: "america",
    color: "#006847",
    gradient: "from-[#006847] to-[#CE1126]",
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    region: "america",
    color: "#009C3B",
    gradient: "from-[#009C3B] to-[#FFDF00]",
  },
  {
    code: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    region: "america",
    color: "#74ACDF",
    gradient: "from-[#74ACDF] to-[#FFFFFF]",
  },

  // Ohther
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    region: "oceania",
    color: "#012169",
    gradient: "from-[#012169] to-[#E4002B]",
  },
  {
    code: "RU",
    name: "Russia",
    flag: "🇷🇺",
    region: "europe",
    color: "#b3e00f",
    gradient: "from-[#FFFFFF] to-[#D52B1E]",
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    region: "africa",
    color: "#007A4D",
    gradient: "from-[#007A4D] to-[#FFB612]",
  },
  {
    code: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    region: "middle_east",
    color: "#E30A17",
    gradient: "from-[#E30A17] to-[#FFFFFF]",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    region: "middle_east",
    color: "#006C35",
    gradient: "from-[#006C35] to-[#FFFFFF]",
  },
];

export const countriesByRegion = {
  asia: countries.filter((c) => c.region === "asia"),
  europe: countries.filter((c) => c.region === "europe"),
  america: countries.filter((c) => c.region === "america"),
  africa: countries.filter((c) => c.region === "africa"),
  oceania: countries.filter((c) => c.region === "oceania"),
  middle_east: countries.filter((c) => c.region === "middle_east"),
};

export const getCountryInfo = (code: CountryCode): CountryInfo => {
  return countries.find((c) => c.code === code) || countries[0];
};

export const regions = [
  { id: "all", name: "All Regions" },
  { id: "asia", name: "Asia" },
  { id: "europe", name: "Europe" },
  { id: "america", name: "America" },
  { id: "africa", name: "Africa" },
  { id: "oceania", name: "Oceania" },
  { id: "middle_east", name: "Middle East" },
];
