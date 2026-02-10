import { useState, useEffect, useCallback } from "react";
import { Todo, CountryCode } from "@/types";
import { canUsePreferenceStorage } from "@/utils/consent";

const TODO_STORAGE_KEY = "holiday_calendar_todos";

export const useTodos = (country: CountryCode) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    if (!canUsePreferenceStorage()) return;
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (!canUsePreferenceStorage()) return;
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(
    (date: string, text: string) => {
      if (!text.trim()) return;

      const newTodo: Todo = {
        id: Date.now().toString(),
        date,
        text: text.trim(),
        completed: false,
        country,
      };

      setTodos((prev) => [...prev, newTodo]);
    },
    [country],
  );

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)),
    );
  }, []);

  const getTodosForDate = useCallback(
    (date: string) => {
      return todos.filter(
        (todo) => todo.date === date && todo.country === country,
      );
    },
    [todos, country],
  );

  const getTodosForMonth = useCallback(
    (year: number, month: number) => {
      const monthStr = month.toString().padStart(2, "0");
      return todos.filter((todo) => {
        const [todoYear, todoMonth] = todo.date.split("-");
        return (
          todo.country === country &&
          todoYear === year.toString() &&
          todoMonth === monthStr
        );
      });
    },
    [todos, country],
  );

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    getTodosForDate,
    getTodosForMonth,
  };
};
