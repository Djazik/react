import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import Singleroute from './components/pages/single-route/Singleroute';
import Login from './components/pages/home/login/Login';
import Admin from './components/pages/home/admin/Admin';
import Auth from './components/pages/auth/Auth';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:id' element={<Singleroute/>}/>
      <Route path='/' element={<Auth/>}>
      <Route path='/admin' element={<Admin/>}/>
      </Route>

    </Routes>


    </div>
  );
}

export default App;
