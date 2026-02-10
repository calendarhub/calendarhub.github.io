import { useState, useEffect, useCallback } from "react";
import { Todo, CountryCode } from "@/types";

const TODO_STORAGE_KEY = "calendar_todos";

export const useTodos = (country: CountryCode) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
      }
    }
  }, []);

  const persistTodos = (next: Todo[]) => {
    try {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn("Failed to save todos to localStorage:", error);
    }
  };

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

      setTodos((prev) => {
        const next = [...prev, newTodo];
        persistTodos(next);
        return next;
      });
    },
    [country],
  );

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) => {
      const next = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      persistTodos(next);
      return next;
    });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => {
      const next = prev.filter((todo) => todo.id !== id);
      persistTodos(next);
      return next;
    });
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    setTodos((prev) => {
      const next = prev.map((todo) =>
        todo.id === id ? { ...todo, ...updates } : todo,
      );
      persistTodos(next);
      return next;
    });
  }, []);

  const getTodosForDate = useCallback(
    (date: string) => {
      return todos.filter((todo) => todo.date === date);
    },
    [todos],
  );

  const getTodosForMonth = useCallback(
    (year: number, month: number) => {
      const monthStr = month.toString().padStart(2, "0");
      return todos.filter((todo) => {
        const [todoYear, todoMonth] = todo.date.split("-");
        return todoYear === year.toString() && todoMonth === monthStr;
      });
    },
    [todos],
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
