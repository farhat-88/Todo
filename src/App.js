import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login.js'
import Firmware from './components/Firmware.js'
import UploadFirmware from './components/UploadFirmware.js';
import FirmwareEditPage from './components/FirmwareEditPage';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/firmware" element={<Firmware/>} />
        <Route path="/firmware/upload" element={<UploadFirmware/>} />
        <Route path="/firmware/:id" element={<FirmwareEditPage/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
