import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import AddNew from './Components/AddNew';
import EditStudent from './Components/EditStudent';


function App() {
  return (
    <div className="App">
    
    <Navbar/>
    
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/addnewstudent' element={<AddNew/>}/>
      <Route path='/editstudent' element={<EditStudent/>}/>
    </Routes>
    
    
    </div>
  );
}

export default App;