
import Country from './Components/Country';
import CountryDetails from './Components/CountryDetails';
import Home from './Components/Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Protect from './Components/Protect';

function App() {
  return (
   <BrowserRouter>
   <>
   <Routes>
    <Route path='/home' element={<Protect Child={Home}/>}/>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Protect Child={Login}/>}/>
    <Route path='/country/:word' element={<Protect Child={Country}/>}/>
   </Routes>
   </>
   </BrowserRouter>

  );
}

export default App;
