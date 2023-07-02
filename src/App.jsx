import { useState } from 'react'
import SubmitForm from './SubmitForm';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DoneSubmission from './DoneSubmission';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
         
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<SubmitForm />}/>
      <Route path="submitted" element={<DoneSubmission/>}/>
      </Routes>

    </BrowserRouter>
    </>
    
  );
}

export default App;
