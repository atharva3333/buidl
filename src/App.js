import React, { useState , useEffect} from "react";
import Angels from "./components/Angels";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Herocomponent from "./components/Herocomponent";
import Partners from "./components/Partners";
import Programs from "./components/Programs";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import TickerTape from "./components/TickerTape";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showComponents, setShowComponents] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);

  useEffect(() => {
    // Set a timeout to show the Statistics component after 2-3 seconds
    const timeout = setTimeout(() => {
      setShowStatistics(true);
    }, 2000); // Change this timeout value according to your needs (in milliseconds)

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowComponents(true);
  };

  return (
    <Router>
    <div>
      {showPopup && (
        <div className="popup bg-blue-500 max-w-[600px] text-white text-center mx-auto mt-[10%] p-10 text-lg">
          <p>Welcome to the revamped version of <NavLink to="http://buidl.so/" className="underline" target="_blank" rel="noopener noreferrer">buidl.so</NavLink>  website! I'm excited to share
            that I've applied my frontend knowledge to make it even better than
            before (Maybe!).</p>
          <p className="mt-5">Feel free to leave a feedback at <a className="underline" href="mailto:atharvad660@gmail.com">atharvad660@gmail.com</a></p>  
          <button className="mt-10 text-center text-black underline font-medium" onClick={handleClosePopup}>Explore Website</button>
        </div>
      )}

      {showComponents && (
        <>
          <Herocomponent />
          {showStatistics && <Statistics />}
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
