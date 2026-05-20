import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out shortly before unmount for a cinematic handoff
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const removeTimer = setTimeout(() => setLoading(false), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="App">
      {loading && <Loader fadeOut={fadeOut} />}
      {!loading && <Home />}
    </div>
  );
}

export default App;
