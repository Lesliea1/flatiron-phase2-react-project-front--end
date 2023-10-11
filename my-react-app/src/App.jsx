import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected 'Link'
import About from './components/About';
import Home from './components/Home'


const App = () => {
  const [count, setCount] = useState(0);

   return (
    <Router>
       <div>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
        <Main />
        <Footer />
        
      </div>
    </Router>
  );
}


export default App;
