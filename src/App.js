import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index={true} element={<HomePage />} />
        <Route path=':id' element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
