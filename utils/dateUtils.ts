import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { Language } from "@/types";

export const formatDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};

export const formatDisplayDate = (date: Date, language: Language): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (language === "en") {
    return format(date, "MMMM d, yyyy");
  } else if (language === "ja") {
    return `${year}年${month}月${day}日`;
  } else {
    return `${year}年${month}月${day}日`;
  }
};

export const getMonthYear = (date: Date, language: Language): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  if (language === "en") {
    return format(date, "MMMM yyyy");
  } else if (language === "ja") {
    return `${year}年${month}月`;
  } else {
    return `${year}年${month}月`;
  }
};

export const getWeekRange = (date: Date, language: Language): string => {
  const weekStart = startOfWeek(date);
  const weekEnd = endOfWeek(date);

  if (language === "en") {
    return `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d, yyyy")}`;
  } else {
    return `${formatDisplayDate(weekStart, language)} - ${formatDisplayDate(weekEnd, language)}`;
  }
};

export const generateMonthDays = (
  date: Date,
  holidays: any[],
  todos: any[],
  country: string,
) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);

  // Start from Sunday of the week containing the 1st
  const calendarStart = startOfWeek(start);
  // End on Saturday of the week containing the last day
  const calendarEnd = endOfWeek(end);

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  return days.map((day) => {
    const dateStr = formatDate(day);
    const isCurrentMonth = day.getMonth() === date.getMonth();
    const isToday = isSameDay(day, new Date());

    const holiday = holidays.find((h) => h.date === dateStr);
    const dayTodos = todos.filter(
      (t) => t.date === dateStr && t.country === country,
    );

    return {
      date: day,
      isCurrentMonth,
      isToday,
      holiday,
      todos: dayTodos,
    };
  });
};

export const getHolidaysForMonth = (
  holidays: any[],
  year: number,
  month: number,
) => {
  const monthStr = month.toString().padStart(2, "0");
  return holidays.filter((holiday) => {
    const [holidayYear, holidayMonth] = holiday.date.split("-");
    return holidayYear === year.toString() && holidayMonth === monthStr;
  });
};

export const generateWeekDays = (
  date: Date,
  holidays: any[],
  todos: any[],
  country: string,
) => {
  const weekStart = startOfWeek(date);
  const days = eachDayOfInterval({
    start: weekStart,
    end: new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000),
  });

  return days.map((day) => {
    const dateStr = formatDate(day);
    const holiday = holidays.find((h) => h.date === dateStr);
    const dayTodos = todos.filter(
      (t) => t.date === dateStr && t.country === country,
    );

    return {
      date: day,
      isCurrentMonth: true,
      isToday: isSameDay(day, new Date()),
      holiday,
      todos: dayTodos,
    };
  });
};
