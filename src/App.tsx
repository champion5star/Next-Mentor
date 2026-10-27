import { useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Credibility from "./components/Credibility.tsx";
import Expertise from "./components/Expertise.tsx";
import Approach from "./components/Approach.tsx";
import Journey from "./components/Journey.tsx";
import Eligibility from "./components/Eligibility.tsx";
import Mentorship from "./components/Mentorship.tsx";
import FAQ from "./components/FAQ.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('Let’s find the right fit');
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Credibility />
        <Expertise />
        <Approach />
        <Journey />
        <Eligibility />
        <Mentorship onSelectPlan={setSelectedPlan} />
        <FAQ />
        <Contact selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
      </main>
      <Footer />
    </>
  );
}
