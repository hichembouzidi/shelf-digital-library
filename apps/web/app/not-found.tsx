import Link from "next/link";
export default function NotFound(){return <main className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="text-5xl font-black">404</h1><p className="mt-3 text-muted">This page doesn't exist.</p><Link href="/" className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white">Return home</Link></main>}
