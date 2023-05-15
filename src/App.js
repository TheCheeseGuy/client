import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './components/header.js'
import Banner from './components/banner.js'
import Application from './components/application.js';
import Staff from './components/staff'
import RequestForm from './components/requestForm'

function App() {
  return (
    <body itemScope>
      <main>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/staff" element={<Staff />} />
          <Route path='/request-form' element={<RequestForm />} />
        </Routes>
      </main>
    </body>

  );
}

export default App;
