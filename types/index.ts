export interface Holiday {
  date: string;
  name: string;
  description: string;
  type: string;
  country: string;
}

export interface Todo {
  id: string;
  date: string;
  text: string;
  completed: boolean;
  country: string;
}

// https://www.nationsonline.org/oneworld/international-dialing-codes.htm
export type CountryCode =
  | "JP" // Japan
  | "CN" // China
  | "US" // America
  | "GB" // United Kingdom
  | "FR" // France
  | "DE" // Germany
  | "IT" // Italy
  | "ES" // Spain
  | "KR" // Korea
  | "IN" // India
  | "BR" // Brazil
  | "AU" // Australia
  | "CA" // Canada
  | "MX" // Mexico
  | "RU" // Russia
  | "ZA" // South Africa
  | "AR" // Argentina
  | "ID" // Indonesia
  | "TR" // Turkey
  | "SA" // Saudi Arabia
  | "AE" // United Arab Emirates
  | "NG" // Nigeria
  | "PK" // Pakistan
  | "PH" // Philippines
  | "TH" // Thailand
  | "MY" // Malaysia
  | "VN" // Vietnam
  | "TW" // Taiwan
  | "HK" // Hong Kong
  | "SG" // Singapore
  | "NZ" // New Zealand
  | "CL" // Chile
  | "CO" // Colombia
  | "PE" // Peru
  | "UY" // Uruguay
  | "EC" // Ecuador
  | "BO" // Bolivia
  | "PY" // Paraguay
  | "CR" // Costa Rica
  | "SV" // El Salvador
  | "GT" // Guatemala
  | "HN" // Honduras
  | "NI" // Nicaragua
  | "PA" // Panama
  | "DO" // Dominican Republic
  | "";

export type Language = "en" | "zh" | "ja" ;
export type ViewMode = "month" | "week";

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  holiday?: Holiday;
  todos: Todo[];
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export interface CountryInfo {
  code: CountryCode;
  name: string;
  flag: string;
  region: string;
  color: string;
  gradient: string;
}
