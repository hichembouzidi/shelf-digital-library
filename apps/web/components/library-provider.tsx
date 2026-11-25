"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { seedItems, type LibraryItem } from "@library/shared";

type LibraryContextType = {
  items: LibraryItem[];
  setItems: (items: LibraryItem[]) => void;
  saved: string[];
  toggleSaved: (id: string) => void;
  language: "en" | "ar";
  toggleLanguage: () => void;
};
const LibraryContext = createContext<LibraryContextType | null>(null);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<LibraryItem[]>(seedItems);
  const [saved, setSaved] = useState<string[]>([]);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  useEffect(() => {
    try {
      const raw = localStorage.getItem("shelf-demo-items");
      if (raw) setItems(JSON.parse(raw));
      const bookmarks = localStorage.getItem("shelf-demo-saved");
      if (bookmarks) setSaved(JSON.parse(bookmarks));
    } catch { /* Ignore malformed demo browser state. */ }
  }, []);
  const updateItems = (next: LibraryItem[]) => {
    setItems(next);
    localStorage.setItem("shelf-demo-items", JSON.stringify(next));
  };
  const toggleSaved = (id: string) => setSaved(current => {
    const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
    localStorage.setItem("shelf-demo-saved", JSON.stringify(next));
    return next;
  });
  const value = useMemo(() => ({
    items, setItems: updateItems, saved, toggleSaved, language,
    toggleLanguage: () => setLanguage(v => v === "en" ? "ar" : "en")
  }), [items, saved, language]);
  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}
export function useLibrary() {
  const value = useContext(LibraryContext);
  if (!value) throw new Error("useLibrary must be used inside LibraryProvider");
  return value;
}
