import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
