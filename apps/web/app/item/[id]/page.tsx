"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Bookmark, BookOpen, Download, FileText } from "lucide-react";
import { useLibrary } from "../../../components/library-provider";
import { useState } from "react";

export default function ItemPage() {
  const params = useParams<{id:string}>();
  const { items, saved, toggleSaved, language } = useLibrary();
  const item = items.find(x => x.id === params.id);
  const [reading, setReading] = useState(false);
  if (!item) return <main className="mx-auto max-w-4xl px-5 py-24 text-center"><h1 className="text-3xl font-black">Title not found</h1><Link className="mt-5 inline-block text-brand" href="/">Back to library</Link></main>;
  const title = language === "ar" ? item.titleAr : item.title;
  return <main className="mx-auto max-w-6xl px-5 py-10">
    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand"><ArrowLeft size={16}/> Back to library</Link>
    <div className="mt-8 grid gap-10 md:grid-cols-[300px_1fr]">
      <div><img src={item.cover} alt="" className="w-full rounded-3xl shadow-soft"/><button onClick={() => toggleSaved(item.id)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold"><Bookmark size={17} fill={saved.includes(item.id) ? "#6258e8" : "none"}/>{saved.includes(item.id) ? "Saved to your shelf" : "Save to my shelf"}</button></div>
      <div className="py-2">
        <p className="text-xs font-black uppercase tracking-[.18em] text-brand">{item.category}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-lg text-muted">by {item.author}</p>
        <div className="mt-6 flex flex-wrap gap-2">{[item.type, item.language, String(item.year), `${item.pages} pages`].map(x => <span key={x} className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">{x}</span>)}</div>
        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600">{language === "ar" ? item.descriptionAr : item.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button onClick={() => setReading(!reading)} className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/20 hover:bg-indigo-600"><BookOpen size={18}/>{reading ? "Close reader preview" : "Read preview"}</button>
          <button onClick={() => alert("Demo only: connect a licensed PDF file to enable downloads.")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold"><Download size={18}/> Download PDF</button>
        </div>
        {reading && <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center gap-2 font-bold"><FileText size={18} className="text-brand"/> Reading preview</div><p className="mt-3 text-sm leading-7 text-muted">This portfolio demo does not include copyrighted book files. Connect a public-domain or licensed PDF to display it here. A full PDF.js reader can be added in a later phase.</p><div className="mt-5 rounded-xl bg-paper p-8 text-center text-sm text-slate-400">PDF preview area</div></div>}
      </div>
    </div>
  </main>;
}
