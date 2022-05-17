import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Seachstudent from './component/Seachstudent';


function App() {
  return (
    <div>
      <Addstudent/>
      <Seachstudent/>
      
    </div>
   
  );
}

export default App;
