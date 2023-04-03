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
            <Route path="users">
              <Route index element={<Dashboard />} />
              <Route path=":userId" element={<Dashboard />} />
              <Route path="new" element={<Dashboard />} />
            </Route>
            <Route path="products">
              <Route index element={<Dashboard />} />
              <Route path=":productId" element={<Dashboard />} />
              <Route path="new" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
