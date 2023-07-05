import { useState } from 'react'
import SubmitForm from './SubmitForm';
import './App.css'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group'; 
//const { ReactCSSTransitionGroup } = require('react-transition-group');

import DoneSubmission from './DoneSubmission';

function App() {
  const AnimatedRoutes = () => {
    const location = useLocation();
  
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={2000} classNames="page">
          <div>

          <Routes location={location}>
              <Route path="/" element={<SubmitForm />} />
              <Route path="submitted" element={<DoneSubmission />} />
            </Routes>


          </div>
           
          
        </CSSTransition>
      </TransitionGroup>
    );
  };
  
  

  return (
    
    <>
    
    <BrowserRouter>
   
      <AnimatedRoutes />
  </BrowserRouter>
    </>
    
  );
}

export default App;
