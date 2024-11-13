import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Login />} /> {/* Home component for root path */}
          <Route path="/dashboard" element={<Login />} /> {/* Home component for root path */}

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
