import React from "react";
import { Header } from "./components";
import {Login ,SignUP,Home} from './pages'
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/login"  element={<Login />}/>
          <Route  path="/signup"  element={<SignUP />}/>
      </Routes>

    </div>
  );
}

export default App;
