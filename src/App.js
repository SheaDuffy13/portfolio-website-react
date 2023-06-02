import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<Outlet />}>
              <Route index element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path='projects' element={<ProjectsPage />} />
        </Routes>
      
    </div>
  );
}

export default App;
