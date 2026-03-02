import Link from 'next/link';

export const metadata = {
  title: 'Lapa nav atrasta',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pulver-dark">
      <div className="container text-center py-24">
        <h1 className="text-pulver-gold text-8xl md:text-9xl font-extrabold mb-4">404</h1>
        <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
          Lapa nav atrasta
        </h2>
        <p className="text-pulver-text text-lg mb-10 max-w-md mx-auto">
          Atvainojiet, bet meklētā lapa neeksistē vai ir pārvietota.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Uz sākumlapu
          </Link>
          <Link href="/pakalpojumi" className="btn btn-secondary">
            Mūsu pakalpojumi
          </Link>
        </div>
      </div>
    </section>
  );
}
