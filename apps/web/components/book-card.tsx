"use client";
import Link from "next/link";
import { Bookmark, BookOpen } from "lucide-react";
import type { LibraryItem } from "@library/shared";
import { useLibrary } from "./library-provider";

export function BookCard({ item }: { item: LibraryItem }) {
  const { saved, toggleSaved, language } = useLibrary();
  const title = language === "ar" ? item.titleAr : item.title;
  const author = language === "ar" ? item.authorAr : item.author;
  return <article className="group relative min-w-0">
    <div className="relative overflow-hidden rounded-2xl bg-slate-200 shadow-soft">
      <Link href={`/item/${item.id}`}><img src={item.cover} alt="" className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" /></Link>
      <button onClick={() => toggleSaved(item.id)} aria-label="Save book" className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5 shadow-sm backdrop-blur hover:bg-white"><Bookmark size={17} fill={saved.includes(item.id) ? "#6258e8" : "none"} color={saved.includes(item.id) ? "#6258e8" : "#475569"}/></button>
    </div>
    <div className="pt-3">
      <p className="mb-1 text-[11px] font-bold uppercase tracking-[.13em] text-brand">{language === "ar" ? item.categoryAr : item.category}</p>
      <Link href={`/item/${item.id}`} className="line-clamp-1 font-bold text-ink hover:text-brand">{title}</Link>
      <p className="mt-1 line-clamp-1 text-sm text-muted">{author}</p>
      <p className="mt-2 flex items-center gap-1 text-xs text-slate-400"><BookOpen size={13}/>{item.pages} pages</p>
    </div>
  </article>;
}
