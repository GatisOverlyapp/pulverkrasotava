'use client';

import { useState, FormEvent } from 'react';

export default function QuickQuestionForm() {
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
      message: formData.get('message') as string,
      formType: 'quick-question',
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
      <div className="bg-pulver-grey rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-pulver-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-pulver-light text-lg font-semibold mb-2">Paldies!</p>
        <p className="text-pulver-text">Jūsu ziņa ir nosūtīta. Mēs ar Jums sazināsimies pēc iespējas ātrāk.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 text-pulver-gold hover:text-pulver-light transition-colors"
        >
          Nosūtīt vēl vienu ziņu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Vārds"
          required
          className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-pasts"
          required
          className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Jūsu jautājums"
          required
          rows={4}
          className="w-full bg-pulver-grey text-pulver-light placeholder:text-pulver-text rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pulver-gold resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
      </button>
    </form>
  );
}
