import React from 'react';
import './App.css';
import Ordersummary from './components/Ordersummary';
import Image from './components/Image';
import Annual from './components/Annual';
import Payment from './components/Payment'
import Footer from './components/Footer';


function App() {
  return (
     <div className="container">
       <Image />
       <Ordersummary />
       <Annual />
       <Payment />
       <p className="cancel">cancel order</p>
       <Footer />
     
     
    </div>
  )
    
};

export default App;
