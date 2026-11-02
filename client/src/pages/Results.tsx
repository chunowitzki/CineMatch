import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';

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

  console.log('Recommendations:', recommendations); // Log the recommendations to the console

  return (
    <div>
      <h1>Your Recommendations</h1>
      {recommendations.map((rec) => (
        <MovieCard key={rec.id} title={rec.title} description={rec.overview} platform={rec.platform} year={rec.year} image={rec.posterUrl} />
      ))}
      <Link to="/">Start over</Link>
    </div>
  );
}