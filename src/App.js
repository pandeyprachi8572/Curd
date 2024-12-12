import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import   {BrowserRouter , Route ,Routes } from "react-router-dom";
import Read from './components/Read';
import Update from './components/Update';
//import Sidebar from './components/Sidebar';
function App() {
return (

      <BrowserRouter>

      <Navbar/>
      <Dashboard/>
      
      <Routes>
      <Route exact path='/' element={<Read/>}/>
      <Route exact path='/read' element ={<Create/>}/>
      
      <Route exact path= {'/edit/:id'} element={<Update/>}/>
      </Routes>
      </BrowserRouter>      
);
}
export default App;
