import { useState } from 'react'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feeling from './pages/Feeling'
import Genres from './pages/Genres'
import Attendance from './pages/Attendance'
import Streaming from './pages/Streaming'
import Results from './pages/Results'
import Loading from '../components/Loading'

const baseUrl = import.meta.env.VITE_API_BASE_URL

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

  async function handleBack() {
    const currentIndex = steps.indexOf(pathname);
    if (currentIndex > 0) {
      navigate(steps[currentIndex - 1]!);
    }
  }

  async function handleNext() {
    const currentIndex = steps.indexOf(pathname);
    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]!);
      return;
    }

    setLoading(true);
    
    setError(null);

    try {
      const res = await fetch(`${baseUrl}/api/submit`, {
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
  if (loading) {
      return <Loading />
    };

  return (
    <Routes>
      <Route path="/" element={<Home handleNext={handleNext} />} />
      <Route path="/feeling" element={<Feeling selectedFeeling={selectedFeeling} setSelectedFeeling={setSelectedFeeling} handleNext={handleNext} handleBack={handleBack}/>} />
      <Route path="/genres" element={<Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} handleNext={handleNext} handleBack={handleBack}/>} />
      <Route path="/attendance" element={<Attendance selectedAttendance={selectedAttendance} setSelectedAttendance={setSelectedAttendance} handleNext={handleNext} handleBack={handleBack}/>} />
      <Route path="/streaming" element={<Streaming selectedStreaming={selectedStreaming} setSelectedStreaming={setSelectedStreaming} handleNext={handleNext} handleBack={handleBack}/>} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/results" element={<Results recommendations={recommendations} loading={loading} error={error} setSelectedStreaming={setSelectedStreaming} setSelectedGenres={setSelectedGenres} setSelectedAttendance={setSelectedAttendance} setSelectedFeeling={setSelectedFeeling} setRecommendations={setRecommendations} />} />
    </Routes>
  )
}

export default App