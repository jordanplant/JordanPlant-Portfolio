// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import PageOne from "./Components/Pages/Page1";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Notfound from "./Components/Pages/Notfound";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://eu-west-2.cdn.hygraph.com/content/clq29w7in57pe01uq3rc71su3/master", // Replace with your Hygraph endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="page-one" element={<PageOne />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
