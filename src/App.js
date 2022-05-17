import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Seachstudent from './component/Seachstudent';
import Navebar from './component/Navebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Addstudent/>}/>
        <Route path='/search' exact element={ <Seachstudent/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
