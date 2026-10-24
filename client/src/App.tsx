import { useState } from 'react'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Feeling from './pages/Feeling.tsx'
import Genres from './pages/Genres.tsx'
import Attendance from './pages/Attendance.tsx'
import Streaming from './pages/Streaming.tsx'
import Results from './pages/Results.tsx'

const steps = ["/", "/feeling", "/genres", "/attendance", "/streaming"];

function App() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [selectedFeeling, setSelectedFeeling] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAttendance, setSelectedAttendance] = useState<string[]>([]);
  const [selectedStreaming, setSelectedStreaming] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function handleNext() {
    const currentIndex = steps.indexOf(pathname);
    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5001/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feeling: selectedFeeling,
          genres: selectedGenres,
          attendance: selectedAttendance,
          streaming: selectedStreaming,
        }),
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      const data = await res.json();
      setRecommendations(data.recommendations ?? data); // adjust to your API's shape
      navigate('/results');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong getting your recommendations.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home handleNext={handleNext} />} />
      <Route path="/feeling" element={<Feeling selectedFeeling={selectedFeeling} setSelectedFeeling={setSelectedFeeling} handleNext={handleNext} />} />
      <Route path="/genres" element={<Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} handleNext={handleNext} />} />
      <Route path="/attendance" element={<Attendance selectedAttendance={selectedAttendance} setSelectedAttendance={setSelectedAttendance} handleNext={handleNext} />} />
      <Route path="/streaming" element={<Streaming selectedStreaming={selectedStreaming} setSelectedStreaming={setSelectedStreaming} handleNext={handleNext} />} />
      <Route path="/results" element={<Results recommendations={recommendations} loading={loading} error={error} />} />
    </Routes>
  )
}

export default App