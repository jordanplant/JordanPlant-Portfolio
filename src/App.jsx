// App.js
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const client = new ApolloClient({
  uri: "https://eu-west-2.cdn.hygraph.com/content/clq29w7in57pe01uq3rc71su3/master", // Replace with your Hygraph endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
