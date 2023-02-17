import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadOrDelete from './pages/ReadDeleteUpdateSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />    
        <div className="content m-4 px-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/read-delete-update-search' element={<ReadOrDelete />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
