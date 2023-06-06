import './App.css';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<Outlet />}>
              <Route index element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path='projects' element={<ProjectsPage />} />
        </Routes>
        </main>
        <Footer showSocialLinks={!isHomePage}/>
      
    </div>
  );
}

export default App;
