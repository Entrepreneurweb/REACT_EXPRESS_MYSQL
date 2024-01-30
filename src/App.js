import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Add from './Components/Add';
import { Route,Routes } from 'react-router-dom';
import { Path } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Home/> } />
        <Route path='/add' element={ <Add/> } />
      </Routes>
    </BrowserRouter>

   
    </>
  );
}

export default App;
