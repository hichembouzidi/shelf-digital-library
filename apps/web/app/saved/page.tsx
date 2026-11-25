"use client";
import Link from "next/link";
import { useLibrary } from "../../components/library-provider";
import { BookCard } from "../../components/book-card";
export default function SavedPage() {
  const { items, saved } = useLibrary();
  const list = items.filter(x => saved.includes(x.id));
  return <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-14"><p className="text-xs font-black uppercase tracking-[.18em] text-brand">Your personal shelf</p><h1 className="mt-2 text-4xl font-black">Saved titles</h1><p className="mt-2 text-muted">{list.length} saved titles</p>{list.length ? <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-5">{list.map(x => <BookCard key={x.id} item={x}/>)}</div> : <div className="mt-8 rounded-3xl bg-white p-12 text-center"><p className="font-bold">Your shelf is waiting.</p><p className="mt-2 text-sm text-muted">Save titles from the library and they will appear here.</p><Link href="/" className="mt-5 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white">Explore library</Link></div>}</main>;
}
