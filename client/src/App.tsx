import { useState } from 'react'
import { useLocation, useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Feeling from './pages/Feeling.tsx'
import Genres from './pages/Genres.tsx'
import Attendance from './pages/Attendance.tsx'
import Streaming from './pages/Streaming.tsx'

const steps = ["/", "/feeling", "/genres", "/attendance", "/streaming"];

function App() {
  const [selectedFeeling, setSelectedFeeling] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedAttendance, setSelectedAttendance] = useState<string[]>([]);
  const [selectedStreaming, setSelectedStreaming] = useState<string[]>([]);

  const navigate = useNavigate();
  const {pathname} = useLocation();
  

  function handleNext() {
    const currentIndex = steps.indexOf(pathname);
    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]);
    } 

    if (currentIndex === steps.length - 1) {
      // Final step reached, handle form submission or any other logic here
      console.log('Selected Feeling:', selectedFeeling);
      console.log('Selected Genres:', selectedGenres);
      console.log('Selected Attendance:', selectedAttendance);
      console.log('Selected Streaming:', selectedStreaming);
    }
  }
  


  return (
    <>
      
    
        <Routes>
          <Route path="/" element={<Home handleNext={handleNext} />} />
          <Route path="/feeling" element={<Feeling selectedFeeling={selectedFeeling} setSelectedFeeling={setSelectedFeeling} handleNext={handleNext}/>} />
          <Route path="/genres" element={<Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} handleNext={handleNext}/>} />
          <Route path="/attendance" element={<Attendance selectedAttendance={selectedAttendance} setSelectedAttendance={setSelectedAttendance} handleNext={handleNext}/>} />
          <Route path='/streaming' element={<Streaming setSelectedStreaming={setSelectedStreaming} selectedStreaming={selectedStreaming} handleNext={handleNext}/>} />
        
        </Routes>
      
   
    </>
  )
}

export default App
