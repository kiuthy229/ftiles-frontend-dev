import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Dashboard />} />
            <Route path="sell">
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Dashboard />} />
              <Route path="products/:productId" element={<Dashboard />} />
            </Route>
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
