import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <ScrollProgressBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
