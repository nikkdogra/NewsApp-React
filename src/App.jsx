import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from 'react';
import ModeContext from './context/ModeContext';

const App = () => {
  const [news, setNews] = useState([]);

  const [error, setError] = useState(null);

  const [mode, setMode] = useState('light');

  const heightRefs = { navbarRef: useRef(null), footerRef: useRef(null), newsBoardRef: useRef(null) };

  const fetchNews = async (value) => {
    setNews([]);

    const response = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${import.meta.env.VITE_API_KEY}`);

    if (!response.ok) {
      setError('Something went Wrong!');
      return;
    }

    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    heightRefs.newsBoardRef.current.style.minHeight = `calc(100svh - ${heightRefs.navbarRef.current.offsetHeight}px - ${heightRefs.footerRef.current.offsetHeight}px)`;

    fetchNews('India');
  }, []);

  return (
    <ModeContext.Provider value={mode}>

      <Navbar
        ref={heightRefs.navbarRef}
        brand='News App'
        onChangeMode={(mode) => setMode(mode)}
        fetchNews={fetchNews}
      />

      <NewsBoard
        ref={heightRefs.newsBoardRef}
        news={news}
        error={error}
      />

      <Footer ref={heightRefs.footerRef}>Copyright &copy; NewsApp</Footer>

    </ModeContext.Provider>
  )
}

export default App
