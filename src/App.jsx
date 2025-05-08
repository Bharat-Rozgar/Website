import Homepage from './pages/Homepage.jsx'
import Work from './pages/Work.jsx'
import Offer1 from './pages/Offer1.jsx'
import Offer2 from './pages/Offer2.jsx'
import Offer3 from './pages/Offer3.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

function App() {

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/offer1" element={<Offer1 />} />
        <Route path="/offer2" element={<Offer2 />} />
        <Route path="/offer3" element={<Offer3 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    
    
  )
}

export default App;
