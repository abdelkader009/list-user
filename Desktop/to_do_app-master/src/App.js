import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMovie from './components/ListMovie';
import FiltreMovie from './components/FiltreMovie';
import { useState } from 'react';

function App() {
  const [doneType, setDoneType] = useState('')
  return (
    <div >
      <center>
          <h1 style={{padding:'50px'}}>Movies List </h1>
       </center>
      
      <Routes>
        
        <Route path='/' element={<ListMovie/>} ></Route>
        <Route path='/Movie_type' element={<FiltreMovie doneType={doneType} />} ></Route>
       

      </Routes>

    </div>
  );
}

export default App;
