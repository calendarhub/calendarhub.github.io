import { Language, CountryCode } from "@/types";
import { canUsePreferenceStorage } from "@/utils/consent";

export const translations: any = {
  en: {
    // Header
    "app.title": "Global CalendarHub",
    "app.subtitle": "Real-time holiday data with Todo feature",

    // Countries
    "country.JP": "Japan",
    "country.CN": "China",
    "country.US": "United States",
    "country.GB": "United Kingdom",
    "country.FR": "France",
    "country.DE": "Germany",
    "country.IT": "Italy",
    "country.ES": "Spain",
    "country.KR": "South Korea",
    "country.IN": "India",
    "country.BR": "Brazil",
    "country.AU": "Australia",
    "country.CA": "Canada",
    "country.MX": "Mexico",
    "country.RU": "Russia",
    "country.ZA": "South Africa",
    "country.AR": "Argentina",
    "country.ID": "Indonesia",
    "country.TR": "Turkey",
    "country.SA": "Saudi Arabia",

    // Regions
    "region.asia": "Asia",
    "region.europe": "Europe",
    "region.america": "America",
    "region.africa": "Africa",
    "region.oceania": "Oceania",
    "region.middle_east": "Middle East",

    // Calendar
    "calendar.holidays": "holidays this month",
    "calendar.today": "Today",
    "calendar.monthView": "Month View",
    "calendar.weekView": "Week View",
    "calendar.year": "Year",
    "calendar.selectCountry": "Select Country",
    "calendar.selectRegion": "Filter by Region",

    // Todo
    "todo.add": "Add Todo",
    "todo.placeholder": "Add a todo for this day...",
    "todo.list": "Todos",
    "todo.completed": "Completed",
    "todo.incomplete": "Incomplete",
    "todo.delete": "Delete",

    // Days
    "days.mon": "Mon",
    "days.tue": "Tue",
    "days.wed": "Wed",
    "days.thu": "Thu",
    "days.fri": "Fri",
    "days.sat": "Sat",
    "days.sun": "Sun",

    // Holiday Modal
    "holiday.date": "Date",
    "holiday.name": "Name",
    "holiday.country": "Country",
    "holiday.type": "Type",
    "holiday.description": "Description",
    "holiday.close": "Close",

    // Loading States
    "loading.holidays": "Loading holidays...",
    "error.loading": "Failed to load data",
    retry: "Retry",

    // Language
    "language.en": "English",
    "language.zh": "中文",
    "language.ja": "日本語",

    // Default
    "default.select": "Select",
    "default.all": "All",
  },

  zh: {
    // Header
    "app.title": "全球节假日日历",
    "app.subtitle": "实时节假日数据与待办事项功能",

    // Countries
    "country.JP": "日本",
    "country.CN": "中国",
    "country.US": "美国",
    "country.GB": "英国",
    "country.FR": "法国",
    "country.DE": "德国",
    "country.IT": "意大利",
    "country.ES": "西班牙",
    "country.KR": "韩国",
    "country.IN": "印度",
    "country.BR": "巴西",
    "country.AU": "澳大利亚",
    "country.CA": "加拿大",
    "country.MX": "墨西哥",
    "country.RU": "俄罗斯",
    "country.ZA": "南非",
    "country.AR": "阿根廷",
    "country.ID": "印度尼西亚",
    "country.TR": "土耳其",
    "country.SA": "沙特阿拉伯",

    // Regions
    "region.asia": "亚洲",
    "region.europe": "欧洲",
    "region.america": "美洲",
    "region.africa": "非洲",
    "region.oceania": "大洋洲",
    "region.middle_east": "中东",

    // Calendar
    "calendar.holidays": "本月节假日",
    "calendar.today": "今天",
    "calendar.monthView": "月视图",
    "calendar.weekView": "周视图",
    "calendar.year": "年份",
    "calendar.selectCountry": "选择国家",
    "calendar.selectRegion": "按地区筛选",

    // Todo
    "todo.add": "添加待办",
    "todo.placeholder": "为此日添加待办事项...",
    "todo.list": "待办事项",
    "todo.completed": "已完成",
    "todo.incomplete": "未完成",
    "todo.delete": "删除",

    // Days
    "days.mon": "周一",
    "days.tue": "周二",
    "days.wed": "周三",
    "days.thu": "周四",
    "days.fri": "周五",
    "days.sat": "周六",
    "days.sun": "周日",

    // Holiday Modal
    "holiday.date": "日期",
    "holiday.name": "名称",
    "holiday.country": "国家",
    "holiday.type": "类型",
    "holiday.description": "描述",
    "holiday.close": "关闭",

    // Loading States
    "loading.holidays": "加载节假日中...",
    "error.loading": "加载数据失败",
    retry: "重试",

    // Language
    "language.en": "English",
    "language.zh": "中文",
    "language.ja": "日本語",

    // Default
    "default.select": "选择",
    "default.all": "全部",
  },

  ja: {
    // Header
    "app.title": "世界の祝日カレンダー",
    "app.subtitle": "リアルタイム祝日データとToDo機能",

    // Countries
    "country.JP": "日本",
    "country.CN": "中国",
    "country.US": "アメリカ",
    "country.GB": "イギリス",
    "country.FR": "フランス",
    "country.DE": "ドイツ",
    "country.IT": "イタリア",
    "country.ES": "スペイン",
    "country.KR": "韓国",
    "country.IN": "インド",
    "country.BR": "ブラジル",
    "country.AU": "オーストラリア",
    "country.CA": "カナダ",
    "country.MX": "メキシコ",
    "country.RU": "ロシア",
    "country.ZA": "南アフリカ",
    "country.AR": "アルゼンチン",
    "country.ID": "インドネシア",
    "country.TR": "トルコ",
    "country.SA": "サウジアラビア",

    // Regions
    "region.asia": "アジア",
    "region.europe": "ヨーロッパ",
    "region.america": "アメリカ",
    "region.africa": "アフリカ",
    "region.oceania": "オセアニア",
    "region.middle_east": "中東",

    // Calendar
    "calendar.holidays": "今月の祝日",
    "calendar.today": "今日",
    "calendar.monthView": "月表示",
    "calendar.weekView": "週表示",
    "calendar.year": "年",
    "calendar.selectCountry": "国を選択",
    "calendar.selectRegion": "地域でフィルター",

    // Todo
    "todo.add": "ToDoを追加",
    "todo.placeholder": "この日のToDoを追加...",
    "todo.list": "ToDoリスト",
    "todo.completed": "完了",
    "todo.incomplete": "未完了",
    "todo.delete": "削除",

    // Days
    "days.mon": "月",
    "days.tue": "火",
    "days.wed": "水",
    "days.thu": "木",
    "days.fri": "金",
    "days.sat": "土",
    "days.sun": "日",

    // Holiday Modal
    "holiday.date": "日付",
    "holiday.name": "名前",
    "holiday.country": "国",
    "holiday.type": "種類",
    "holiday.description": "説明",
    "holiday.close": "閉じる",

    // Loading States
    "loading.holidays": "祝日を読み込み中...",
    "error.loading": "データの読み込みに失敗しました",
    retry: "再試行",

    // Language
    "language.en": "English",
    "language.zh": "中文",
    "language.ja": "日本語",

    // Default
    "default.select": "選択",
    "default.all": "すべて",
  },
};

export const t = (key: string, lang: Language): string => {
  return translations[lang]?.[key] || key;
};

export const getDefaultLanguage = (): Language => {
  if (typeof window !== "undefined") {
    if (canUsePreferenceStorage()) {
      const savedLang = localStorage.getItem("preferred_language") as Language;
      if (savedLang && ["en", "zh", "ja"].includes(savedLang)) {
        return savedLang;
      }
    }

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("zh")) {
      if (browserLang.includes("hans") || browserLang.includes("cn")) {
        return "zh";
      }
    }
    if (browserLang.startsWith("ja")) {
      return "ja";
    }

    const acceptLang = navigator.languages?.[0] || "";
    if (acceptLang.toLowerCase().startsWith("zh")) return "zh";
    if (acceptLang.toLowerCase().startsWith("ja")) return "ja";
  }

  return "en";
};

export const getDefaultCountry = (): CountryCode => {
  if (typeof window !== "undefined") {
    if (canUsePreferenceStorage()) {
      const savedCountry = localStorage.getItem(
        "preferred_country",
      ) as CountryCode;
      if (savedCountry && savedCountry.length === 2) {
        return savedCountry;
      }
    }

    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log("User timezone:", timezone);

      if (timezone.includes("Asia/Tokyo") || timezone.includes("Japan"))
        return "JP";
      if (
        timezone.includes("Asia/Shanghai") ||
        timezone.includes("Asia/Hong_Kong") ||
        timezone.includes("Asia/Taipei") ||
        timezone.includes("China")
      )
        return "CN";
      if (
        timezone.includes("America/New_York") ||
        timezone.includes("America/Los_Angeles") ||
        timezone.includes("America/Chicago") ||
        timezone.includes("US/")
      )
        return "US";
      if (timezone.includes("Europe/London") || timezone.includes("Europe/"))
        return "GB";
      if (timezone.includes("Australia/")) return "AU";
      if (timezone.includes("Canada/")) return "CA";

      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("zh")) return "CN";
      if (browserLang.startsWith("ja")) return "JP";
      if (browserLang.startsWith("ko")) return "KR";
      if (browserLang.startsWith("de")) return "DE";
      if (browserLang.startsWith("fr")) return "FR";
      if (browserLang.startsWith("es")) return "ES";
      if (browserLang.startsWith("pt")) return "BR";
      if (browserLang.startsWith("ru")) return "RU";
    } catch (error) {
      console.warn("Error detecting timezone:", error);
    }
  }
  return "";
};

export const saveUserPreferences = (
  language: Language,
  country: CountryCode,
) => {
  if (typeof window !== "undefined") {
    try {
      if (!canUsePreferenceStorage()) return;
      localStorage.setItem("preferred_language", language);
      localStorage.setItem("preferred_country", country);
    } catch (error) {
      console.warn("Failed to save preferences:", error);
    }
  }
};
