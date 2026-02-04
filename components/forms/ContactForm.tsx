'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      formType: 'contact',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        setError(result.error || 'Kļūda nosūtot ziņu. Lūdzu, mēģiniet vēlreiz.');
      }
    } catch {
      setError('Kļūda nosūtot ziņu. Lūdzu, mēģiniet vēlreiz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-pulver-grey rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-pulver-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-pulver-light text-2xl font-bold mb-3">Paldies!</h3>
        <p className="text-pulver-text mb-6">
          Jūsu ziņa ir veiksmīgi nosūtīta. Mēs ar Jums sazināsimies pēc iespējas ātrāk.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn btn-secondary"
        >
          Nosūtīt vēl vienu ziņu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-pulver-light font-medium mb-2">
            Vārds *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold"
            placeholder="Jūsu vārds"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-pulver-light font-medium mb-2">
            E-pasts *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold"
            placeholder="jusu@epasts.lv"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-pulver-light font-medium mb-2">
          Tālrunis
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold"
          placeholder="+371 20 000 000"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-pulver-light font-medium mb-2">
          Ziņa *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold resize-none"
          placeholder="Aprakstiet savu projektu vai jautājumu..."
        />
      </div>

      {error && (
        <div className="bg-red-500/20 text-red-400 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Nosūta...
          </span>
        ) : (
          'Nosūtīt ziņu'
        )}
      </button>
    </form>
  );
}
