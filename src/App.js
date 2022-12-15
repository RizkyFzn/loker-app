import { Route, Routes } from 'react-router-dom';
import AddJobForm from './components/AddJobForm';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<AddJobForm />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
// /Buat Json server data joblist
// pop up add job

export default App;
