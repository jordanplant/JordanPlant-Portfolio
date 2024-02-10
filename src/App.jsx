// App.js
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./Sections/Navbar";
import HeroSection from "./Sections/HeroSection";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import ContactForm from "./Sections/ContactForm";

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
      <ContactForm />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
