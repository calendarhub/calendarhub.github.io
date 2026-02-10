"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle,
  Trash2,
  Plus,
  Star,
  Grid,
  List,
} from "lucide-react";
import { CalendarDay, Holiday, Todo, CountryCode, Language } from "@/types";
import { useTodos } from "@/hooks/useTodos";
import {
  generateMonthDays,
  generateWeekDays,
  getMonthYear,
  getWeekRange,
  formatDisplayDate,
} from "@/utils/dateUtils";
import { t } from "@/utils/i18n";
import { getCountryInfo } from "@/utils/countries";

interface CalendarProps {
  date: Date;
  holidays: Holiday[];
  country: CountryCode;
  viewMode: "month" | "week";
  language: Language;
  onDateChange: (date: Date) => void;
  onViewModeChange: (mode: "month" | "week") => void;
  onHolidayClick: (holiday: Holiday) => void;
  isMobile: boolean;
}

export default function Calendar({
  date,
  holidays,
  country,
  viewMode,
  language,
  onDateChange,
  onViewModeChange,
  onHolidayClick,
  isMobile,
}: CalendarProps) {
  const { todos, addTodo, toggleTodo, deleteTodo, getTodosForDate } =
    useTodos(country);
  const [newTodoText, setNewTodoText] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const days = useMemo(() => {
    if (viewMode === "month") {
      return generateMonthDays(date, holidays, todos, country);
    } else {
      return generateWeekDays(date, holidays, todos, country);
    }
  }, [date, holidays, todos, country, viewMode]);

  const handlePrev = () => {
    const newDate = new Date(date);
    if (viewMode === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setDate(newDate.getDate() - 7);
    }
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date);
    if (viewMode === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    onDateChange(newDate);
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  const handleAddTodo = () => {
    if (selectedDate && newTodoText.trim()) {
      addTodo(selectedDate, newTodoText);
      setNewTodoText("");
    }
  };

  const selectedDateTodos = selectedDate ? getTodosForDate(selectedDate) : [];
  const countryInfo = getCountryInfo(country);

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-sm md:shadow">
      {/* Calendar Header  */}
      <div className="p-3 md:p-6">
        <div className="flex items-center justify-between mb-2 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl">{countryInfo.flag}</div>
            <div>
              <h2 className="text-base md:text-lg font-bold text-gray-900">
                {t(`country.${country}`, language)}
              </h2>
              <p className="text-gray-600 text-xs md:text-sm flex items-center">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                {holidays.length} holidays
              </p>
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-600 glass px-2 py-1 md:px-4 md:py-2 rounded-lg">
            {viewMode === "month" ? "Month View" : "Week View"}
          </div>
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="px-3 md:px-6 pb-3 md:pb-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-1 md:space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 md:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-button"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="text-sm md:text-lg font-semibold text-gray-800 px-2 md:px-4 py-1.5 md:py-2.5 bg-white border border-gray-200 rounded-lg min-w-[120px] md:min-w-[200px] text-center">
              {viewMode === "month"
                ? getMonthYear(date, language)
                : getWeekRange(date, language)}
            </div>

            <button
              onClick={handleNext}
              className="p-2 md:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-button"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2">
            <button
              onClick={handleToday}
              className="px-2 py-1.5 md:px-4 md:py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs md:text-sm touch-button flex items-center"
            >
              <CalendarIcon className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              {isMobile ? "Today" : t("calendar.today", language)}
            </button>

            <div className="flex bg-gray-100 rounded-lg p-0.5 md:p-1">
              <button
                onClick={() => onViewModeChange("month")}
                className={`p-1.5 md:p-2 rounded-md transition-all text-xs md:text-sm ${
                  viewMode === "month"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                aria-label="Month view"
              >
                {isMobile ? <Grid className="w-4 h-4" /> : "Month"}
              </button>
              <button
                onClick={() => onViewModeChange("week")}
                className={`p-1.5 md:p-2 rounded-md transition-all text-xs md:text-sm ${
                  viewMode === "week"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                aria-label="Week view"
              >
                {isMobile ? <List className="w-4 h-4" /> : "Week"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div
        className={`grid px-2 md:px-6 pb-3 md:pb-6 ${viewMode === "month" ? "grid-cols-1" : "grid-cols-12"}`}
      >
        {/* Day Headers */}
        <div
          className={`grid gap-1 md:gap-2 ${
            viewMode === "month" ? "grid-cols-7 md:mb-4" : "col-span-1"
          }`}
        >
          {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day) => (
            <div
              key={day}
              className="flex items-center justify-center font-medium text-gray-500 py-1.5 md:py-2 text-xs md:text-sm"
            >
              {isMobile
                ? t(`days.${day}`, language).substring(0, 3)
                : t(`days.${day}`, language)}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div
          className={`grid gap-1 md:gap-2 ${
            viewMode === "month" ? "grid-cols-7" : "col-span-11"
          }`}
        >
          {days.map((day: any, index: any) => {
            const dateStr = format(day.date, "yyyy-MM-dd");
            const dayHoliday = holidays.find((h) => h.date === dateStr);
            const isSelected = selectedDate === dateStr;

            return (
              <div
                key={index}
                className={`
                  min-h-[${isMobile ? "60" : "80"}px] md:min-h-[100px] p-1 md:p-2 rounded-lg transition-all relative overflow-hidden touch-button
                  border ${dayHoliday ? "border-blue-200" : "border-gray-100"}
                  ${!day.isCurrentMonth ? "opacity-40" : ""}
                  ${
                    isSelected
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "bg-white hover:bg-blue-50"
                  }
                  ${day.holiday ? "cursor-pointer" : ""}
                `}
                onClick={() => {
                  setSelectedDate(dateStr);
                  if (day.holiday) {
                    onHolidayClick(day.holiday);
                  }
                }}
              >
                {/* Day Number */}
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span
                    className={`
                    font-semibold text-sm md:text-base
                    ${
                      day.isToday
                        ? "text-white bg-blue-500 px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs md:text-sm"
                        : day.holiday
                          ? "text-blue-600 font-bold"
                          : "text-gray-800"
                    }
                  `}
                  >
                    {day.date.getDate()}
                  </span>
                  {!isMobile && (
                    <div className="flex items-center gap-1 shrink-0">
                      {/* Holiday Indicator*/}
                      {day.holiday && (
                        <span className="text-[10px] md:text-xs font-medium px-1 py-0.5 md:px-2 md:py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 whitespace-nowrap">
                          {day.holiday.name.substring(0, 8)}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {isMobile && (
                  <div className="absolute bottom-0.5 right-1 flex flex-col items-end gap-0.4">
                    {day.holiday && (
                      <span className="text-[10px] leading-none font-semibold px-1 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                        H
                      </span>
                    )}
                    {day.todos.length > 0 && (
                      <span className="inline-flex items-center justify-center min-w-4 h-4 px-1 text-[10px] leading-none font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                        {day.todos.length}
                      </span>
                    )}
                  </div>
                )}

                {/* Todos */}
                {!isMobile && (
                  <div className="space-y-1 mt-1">
                    {day.todos.slice(0, 2).map((todo: any) => (
                      <div
                        key={todo.id}
                        className="flex items-center gap-1 text-xs p-1 rounded bg-gray-50 hover:bg-gray-100 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => toggleTodo(todo.id)}
                          className="text-gray-400 hover:text-green-500"
                        >
                          {todo.completed ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            <Circle className="w-3 h-3" />
                          )}
                        </button>
                        <span
                          className={`flex-1 truncate ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
                        >
                          {todo.text.substring(0, 10)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Todo Input */}
      {selectedDate && (
        <div className="px-3 md:px-6 pb-3 md:pb-6 animate-fade-in">
          <div className="glass rounded-xl p-3 md:p-4">
            <h3 className="font-medium text-gray-800 mb-2 md:mb-3 text-sm md:text-base flex items-center">
              <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Add Todo - {formatDisplayDate(new Date(selectedDate), language)}
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder={
                  isMobile ? "Add todo..." : t("todo.placeholder", language)
                }
                className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base placeholder-gray-400"
                onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
              />
              <button
                onClick={handleAddTodo}
                disabled={!newTodoText.trim()}
                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base touch-button flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                {isMobile ? "Add" : t("todo.add", language)}
              </button>
            </div>

            {/* Selected Date Todos */}
            {selectedDateTodos.length > 0 && (
              <div className="mt-3 md:mt-4">
                <h4 className="font-medium text-gray-800 mb-2 text-sm md:text-base">
                  Todos ({selectedDateTodos.length})
                </h4>
                <div className="space-y-2">
                  {selectedDateTodos.map((todo: any) => (
                    <div
                      key={todo.id}
                      className="flex items-center justify-between p-2 md:p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <button
                          onClick={() => toggleTodo(todo.id)}
                          className={`p-1 rounded transition-all ${
                            todo.completed
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-400 hover:text-blue-600"
                          }`}
                        >
                          {todo.completed ? (
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                          ) : (
                            <Circle className="w-4 h-4 md:w-5 md:h-5" />
                          )}
                        </button>
                        <span
                          className={`text-sm md:text-base ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
                        >
                          {isMobile
                            ? todo.text.substring(0, 20) + "..."
                            : todo.text}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-1 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
