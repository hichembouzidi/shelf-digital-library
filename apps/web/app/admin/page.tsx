"use client";
import { useState } from "react";
import { Plus, Trash2, BookOpen, LibraryBig, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLibrary } from "../../components/library-provider";
import type { Collection, LibraryItem } from "@library/shared";

const empty = { title:"", author:"", collection:"scientific" as Collection, category:"Computer Science", cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=700&q=85", pages:100, year:2025, description:"A new demo library entry." };

export default function AdminPage() {
  const { items, setItems } = useLibrary();
  const [form, setForm] = useState(empty);
  const [show, setShow] = useState(false);
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `${form.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${Date.now()}`;
    const next: LibraryItem = { ...form, id, titleAr:form.title, authorAr:form.author, categoryAr:form.category, type:form.category, language:"English", descriptionAr:form.description, featured:false };
    setItems([next, ...items]); setForm(empty); setShow(false);
  };
  return <main className="mx-auto min-h-[80vh] max-w-7xl px-5 py-10">
    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted"><ArrowLeft size={16}/> Back to website</Link>
    <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[.18em] text-brand">Demo control panel</p><h1 className="mt-2 text-4xl font-black">Content manager</h1><p className="mt-2 text-sm text-muted">Manage the sample catalog in this browser.</p></div><button onClick={() => setShow(!show)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white"><Plus size={17}/> Add title</button></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-white p-5 shadow-soft"><LibraryBig className="text-brand"/><p className="mt-4 text-3xl font-black">{items.length}</p><p className="text-sm text-muted">Catalog entries</p></div><div className="rounded-2xl bg-white p-5 shadow-soft"><BookOpen className="text-brand"/><p className="mt-4 text-3xl font-black">{items.filter(x=>x.collection==="scientific").length}</p><p className="text-sm text-muted">Scientific titles</p></div><div className="rounded-2xl bg-white p-5 shadow-soft"><BookOpen className="text-brand"/><p className="mt-4 text-3xl font-black">{items.filter(x=>x.collection==="comics").length}</p><p className="text-sm text-muted">Comics entries</p></div></div>
    {show && <form onSubmit={addItem} className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-2"><h2 className="text-xl font-black md:col-span-2">Add catalog entry</h2>
      <label className="text-sm font-bold">Title<input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand"/></label>
      <label className="text-sm font-bold">Author<input required value={form.author} onChange={e=>setForm({...form,author:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand"/></label>
      <label className="text-sm font-bold">Collection<select value={form.collection} onChange={e=>setForm({...form,collection:e.target.value as Collection})} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal"><option value="scientific">Scientific & Educational</option><option value="stories">Stories & Literature</option><option value="comics">Comics</option></select></label>
      <label className="text-sm font-bold">Category<input value={form.category} onChange={e=>setForm({...form,category:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal"/></label>
      <label className="text-sm font-bold md:col-span-2">Cover image URL<input value={form.cover} onChange={e=>setForm({...form,cover:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal"/></label>
      <div className="flex gap-3 md:col-span-2"><button className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white">Save entry</button><button type="button" onClick={()=>setShow(false)} className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold">Cancel</button></div>
    </form>}
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="border-b border-slate-100 px-5 py-4 font-bold">Catalog entries</div>{items.map(item=><div key={item.id} className="flex items-center gap-4 border-b border-slate-100 px-5 py-4 last:border-0"><img src={item.cover} alt="" className="h-14 w-11 rounded-lg object-cover"/><div className="min-w-0 flex-1"><p className="truncate font-bold">{item.title}</p><p className="text-xs text-muted">{item.author} · {item.collection}</p></div><button onClick={()=>setItems(items.filter(x=>x.id!==item.id))} aria-label={`Delete ${item.title}`} className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={17}/></button></div>)}</div>
    <p className="mt-4 text-xs text-muted">Note: this admin panel is intentionally a frontend demo. It has no login or server-side protection.</p>
  </main>;
}
