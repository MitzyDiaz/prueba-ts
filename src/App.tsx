import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { PageOne } from "./pages/PageOne";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};