
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import SubmitTicket from './pages/submitticket';

function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Navbar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn}/>
    <Routes>
      <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            isloggedIn ? (
              <Dashboard setIsloggedIn={setIsloggedIn} />
            ) : (
              <Login setIsloggedIn={setIsloggedIn} />
            )
          }/>

        <Route
          path="/ticket"
          element={
            isloggedIn ? (
              <SubmitTicket />
            ) : (
              <Login setIsloggedIn={setIsloggedIn} />
            )
          }/>



      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      
      <Route path='ticket' element={<SubmitTicket/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
