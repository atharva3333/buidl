import React, { useEffect, useState } from "react";
import Angels from "./components/Angels";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Herocomponent from "./components/Herocomponent";
import Partners from "./components/Partners";
import Programs from "./components/Programs";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import TickerTape from "./components/TickerTape";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [showStatistics, setShowStatistics] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStatistics(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div>
        <Herocomponent />
        {showStatistics && (
          <>
            <Statistics />
            <Programs />
            <Testimonials />
            <Features />
            <TickerTape />
            <Angels />
            <Partners />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
