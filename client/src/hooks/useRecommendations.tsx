import { useState } from 'react';

export type FormData = {
  feeling: string;
  genres: string[];
  attendance: string;
  streaming: string;
};

export function useRecommendations() {
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchRecommendations(formData: FormData): Promise<boolean> {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');

      const data: { recommendations: string } = await res.json();
      setRecommendations(data.recommendations);
      return true;
    } catch {
      setError('Something went wrong. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { recommendations, loading, error, fetchRecommendations };
}