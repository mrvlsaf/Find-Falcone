import "./Result.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ResultContainer from "../../containers/ResultContainer";

const Result = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>({});
  const [totalTimeTaken, setTotalTimeTaken] = useState<any>(0);

  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem("result") ?? ""));
    setTotalTimeTaken(localStorage.getItem("time taken"));
  }, []);

  return (
    <div
      className={`resultContainer ${result.status ? "successBg" : "failureBg"}`}
    >
      <Header handleReset={() => navigate("/")} />
      <ResultContainer result={result} totalTimeTaken={totalTimeTaken} />
      <Footer />
    </div>
  );
};

export default Result;
