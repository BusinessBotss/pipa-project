import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl">404</h1>
      <p className="mt-2 text-muted">Página não encontrada / Page not found.</p>
      <Link href="/pt-BR" className="mt-6 rounded-full bg-gold px-5 py-2 text-sm font-medium text-black">
        Pipa
      </Link>
    </section>
  );
}
