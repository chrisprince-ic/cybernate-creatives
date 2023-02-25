import { Routes, Route } from 'react-router-dom';
import HireUsForm from './components/HireUsForm';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hire-us" element={<HireUsForm />}></Route>
    </Routes>
  );
}
