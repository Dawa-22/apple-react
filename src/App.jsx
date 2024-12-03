import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
