import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Feeling from './pages/Feeling.tsx'
import Genres from './pages/Genres.tsx'
import Attendance from './pages/Attendance.tsx'
import Streaming from './pages/Streaming.tsx'



function App() {
  const [selectedFeeling, setSelectedFeeling] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAttendance, setSelectedAttendance] = useState(null)
  const [selectedStreaming, setSelectedStreaming] = useState<string[]>([]);

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feeling" element={<Feeling selectedFeeling={selectedFeeling} setSelectedFeeling={setSelectedFeeling} />} />
          <Route path="/genres" element={<Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />} />
          <Route path="/attendance" element={<Attendance selectedAttendance={selectedAttendance} setSelectedAttendance={setSelectedAttendance} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path='/streaming' element={<Streaming setSelectedStreaming={setSelectedStreaming} selectedStreaming={selectedStreaming}/>} />
        
        </Routes>
      </Router>
   
    </>
  )
}

export default App
