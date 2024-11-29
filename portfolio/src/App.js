
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Projects } from './pages/Projects/Projects';
import { Skills } from './pages/Skills/Skills';
import { Contact } from './pages/Contact/Contact';



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
