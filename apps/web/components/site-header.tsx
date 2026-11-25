"use client";
import Link from "next/link";
import { BookOpen, Bookmark, Languages, Settings2 } from "lucide-react";
import { useLibrary } from "./library-provider";

export function SiteHeader() {
  const { language, toggleLanguage } = useLibrary();
  return <header className="sticky top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white"><BookOpen size={19}/></span>Shelf<span className="text-brand">.</span></Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
        <Link className="hover:text-brand" href="/?collection=scientific">Scientific</Link>
        <Link className="hover:text-brand" href="/?collection=stories">Stories</Link>
        <Link className="hover:text-brand" href="/?collection=comics">Comics</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link aria-label="Saved books" href="/saved" className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100"><Bookmark size={19}/></Link>
        <button onClick={toggleLanguage} className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50"><Languages size={16}/>{language.toUpperCase()}</button>
        <Link href="/admin" className="hidden items-center gap-2 rounded-xl bg-ink px-3 py-2 text-sm font-semibold text-white sm:flex"><Settings2 size={16}/> Admin</Link>
      </div>
    </div>
  </header>;
}
