import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import LatestArticle from "./components/LatestArticle";
import Footer from "./components/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <PropagateLoader color="white" />
        </div>
      ) : (
        <>
          <Hero />
          <AboutUs />
          <LatestArticle />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
