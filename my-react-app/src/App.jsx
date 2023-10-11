import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected 'Link'
import About from './components/About';
import Home from './components/Home'
import HolidayList from './components/HolidayList';


const App = () => {

  const [holidays, setHolidays] = useState([]);

 const addHoliday = (newHoliday) => {
    setHolidays([...holidays, newHoliday]);
  };


   return (
    <Router>
       <div>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
         <Main />
     <HolidayList addHoliday={addHoliday} />
        <Footer />
        
      </div>
    </Router>
  );
}


export default App;