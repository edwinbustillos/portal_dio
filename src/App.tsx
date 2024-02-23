import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Home/>}  />
          <Route path="/feed" element={<Feed/>}  />
          <Route path="/signup" element={<SignUp/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
