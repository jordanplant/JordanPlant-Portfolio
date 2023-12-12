// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import PageOne from "./Components/Pages/Page1";
import PageTwo from "./Components/Pages/Page2";
import Contact from "./Components/Pages/Contact";
import Notfound from "./Components/Pages/Notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page-one" element={<PageOne />} />
          <Route path="page-two" element={<PageTwo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
