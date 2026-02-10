export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-changed";

const PREFERENCE_KEYS = [
  "preferred_language",
  "preferred_country",
  "holiday_calendar_cache",
];

export type CookieConsent = "granted" | "denied" | "unknown";

export const getCookieConsent = (): CookieConsent => {
  if (typeof window === "undefined") return "unknown";
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "true") return "granted";
    if (value === "false") return "denied";
  } catch {
    return "unknown";
  }
  return "unknown";
};

export const canUsePreferenceStorage = () => getCookieConsent() === "granted";

export const setCookieConsent = (value: "true" | "false") => {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
};

export const clearPreferenceStorage = () => {
  if (typeof window === "undefined") return;
  PREFERENCE_KEYS.forEach((key) => localStorage.removeItem(key));
};
