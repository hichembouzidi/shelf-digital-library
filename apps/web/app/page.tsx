"use client";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useLibrary } from "../components/library-provider";
import { BookCard } from "../components/book-card";
import type { Collection } from "@library/shared";

const filters: { id: "all" | Collection; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "scientific", label: "Scientific & Educational" },
  { id: "stories", label: "Stories & Literature" },
  { id: "comics", label: "Comics" }
];

export default function Home() {
  const { items, language } = useLibrary();
  const params = useSearchParams();
  const initial = params.get("collection") as Collection | null;
  const [filter, setFilter] = useState<"all" | Collection>(initial || "all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => items.filter(item => {
    const matchesFilter = filter === "all" || item.collection === filter;
    const haystack = `${item.title} ${item.titleAr} ${item.author} ${item.category}`.toLowerCase();
    return matchesFilter && haystack.includes(query.toLowerCase());
  }), [items, filter, query]);
  const featured = items.filter(x => x.featured);
  return <main>
    <section className="relative overflow-hidden bg-[#171b35] text-white">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand/40 blur-3xl"/>
      <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-indigo-100"><Sparkles size={14}/> YOUR NEXT CHAPTER STARTS HERE</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">A whole world of stories, <span className="text-[#b8b2ff]">in one place.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Explore ideas, discover new worlds, and keep your favorite reads close. Welcome to a library made for curious minds.</p>
          <div className="mt-9 flex max-w-xl items-center gap-3 rounded-2xl bg-white p-2 text-ink shadow-2xl">
            <Search className="ml-3 text-slate-400" size={20}/>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search books, authors, comics..." className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none"/>
            <button onClick={() => document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"})} className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-indigo-600">Explore</button>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300"><span>✦ Three curated collections</span><span>✦ English & Arabic UI</span><span>✦ Read at your pace</span></div>
        </div>
        <div className="relative mx-auto hidden h-[410px] w-full max-w-[470px] md:block">
          <div className="absolute left-8 top-4 h-72 w-52 rotate-[-9deg] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl"><img src={featured[0]?.cover} className="h-full w-full object-cover" alt="Featured book cover"/></div>
          <div className="absolute right-7 top-16 h-72 w-52 rotate-[9deg] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl"><img src={featured[1]?.cover} className="h-full w-full object-cover" alt="Featured book cover"/></div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center backdrop-blur-xl"><p className="text-3xl font-black">Your shelf.</p><p className="text-sm text-slate-300">Your own little universe.</p></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.18em] text-brand">Browse by collection</p><h2 className="mt-2 text-3xl font-black tracking-tight">Find your kind of read</h2></div><span className="hidden text-sm text-muted sm:block">A place for every curiosity</span></div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {id:"scientific", name:"Scientific & Educational", ar:"علمي وتعليمي", desc:"Learn, explore, and expand your knowledge.", icon:"⌘", color:"from-blue-600 to-indigo-500"},
          {id:"stories", name:"Stories & Literature", ar:"قصص وأدب", desc:"Novels, poetry, short stories, and more.", icon:"✧", color:"from-rose-500 to-orange-400"},
          {id:"comics", name:"Comics", ar:"قصص مصورة", desc:"Manga, manhwa, manhua, webtoons, and comics.", icon:"▤", color:"from-violet-600 to-fuchsia-500"}
        ].map(c => <button key={c.id} onClick={() => {setFilter(c.id as Collection); document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"});}} className={`group overflow-hidden rounded-3xl bg-gradient-to-br ${c.color} p-6 text-left text-white shadow-soft transition hover:-translate-y-1`}>
          <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-2xl">{c.icon}</span><ArrowRight className="transition group-hover:translate-x-1"/></div>
          <h3 className="mt-8 text-xl font-black">{language === "ar" ? c.ar : c.name}</h3><p className="mt-2 max-w-xs text-sm text-white/80">{c.desc}</p>
        </button>)}
      </div>
    </section>

    <section id="catalog" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 pt-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="text-xs font-black uppercase tracking-[.18em] text-brand">The library</p><h2 className="mt-2 text-3xl font-black tracking-tight">Explore the collection</h2><p className="mt-2 text-sm text-muted">{visible.length} titles to discover</p></div>
        <div className="flex flex-wrap gap-2">{filters.map(f => <button key={f.id} onClick={() => setFilter(f.id)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter === f.id ? "bg-ink text-white" : "bg-white text-slate-600 hover:bg-slate-100"}`}>{f.label}</button>)}</div>
      </div>
      {visible.length ? <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{visible.map(item => <BookCard key={item.id} item={item}/>)}</div> : <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-muted">No titles match your search. Try another keyword.</div>}
    </section>
    <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row"><span className="font-black text-ink">Shelf<span className="text-brand">.</span></span><span>Made for readers. Demo project · 2026</span></div></footer>
  </main>;
}
