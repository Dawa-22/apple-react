import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// body
import First from './components/body/First'
import Second from './components/body/Second'
import Third from './components/body/Third'
import Fourth from './components/body/Fourth'
import Fifth from './components/body/Fifth'
import Sixth from './components/body/Sixth'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Footer/>
    </div>
  );
}

export default App;
