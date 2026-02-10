"use client";

import { useEffect } from "react";

export function useTouchOptimization() {
  useEffect(() => {
    let lastTouchEnd = 0;
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    const preventLongPress = (event: TouchEvent) => {
      event.preventDefault();
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("touchcancel", handleTouchEnd);

    const elements = document.querySelectorAll("button, a, input");
    elements.forEach((el) => {
      el.addEventListener("contextmenu", (e) => e.preventDefault());
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);

      elements.forEach((el) => {
        el.removeEventListener("contextmenu", (e) => e.preventDefault());
      });
    };
  }, []);
}
