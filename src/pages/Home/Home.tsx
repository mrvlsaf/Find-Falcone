import "./Home.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLogic from "../../components/MainLogic/MainLogic";

const Home = (): JSX.Element => {
  const [reset, handleReset] = useState<Boolean>(false);

  return (
    <div className="mainContainer">
      <div>
        <Header handleReset={handleReset} />
        <MainLogic reset={reset} handleReset={handleReset} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
