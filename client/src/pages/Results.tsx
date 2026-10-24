import { Link } from 'react-router-dom';

type Props = {
  recommendations: any[];
  loading: boolean;
  error: string | null;
};

export default function Results({ recommendations, loading, error }: Props) {
  if (loading) return <p>Finding your recommendations...</p>;
  if (error) return <p>{error}</p>;

  if (recommendations.length === 0) {
    return (
      <div>
        <p>No recommendations yet.</p>
        <Link to="/">Start over</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Recommendations</h1>
      {recommendations.map((rec) => (
        <div key={rec.title}>
          <h2>{rec.title}</h2>
          <p><em>{rec.tagline}</em></p>
          <p>{rec.description}</p>
          <p>Watch on: {rec.platform}</p>
        </div>
      ))}
      <Link to="/">Start over</Link>
    </div>
  );
}