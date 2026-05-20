import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : <Home />}
    </div>
  );
}

export default App;
