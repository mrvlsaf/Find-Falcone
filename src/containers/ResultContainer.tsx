import "../pages/Result/Result.css";
import { useNavigate } from "react-router-dom";
import { SuccessPropsInterface } from "../Interfaces/interfaces";

const ResultContainer = ({ result, totalTimeTaken }: SuccessPropsInterface) => {
  const navigate = useNavigate();

  return (
    <div className="resultInnerContainer">
      <h1 className="result_heading">
        {result.status
          ? "Success! Congratulations on Finding Falcone. King Shah is mighty pleased."
          : "Failure! You were unable to find Falcone. King Shah is greatly disappointed."}
      </h1>
      <div className="detials_container">
        <div className="result_details">
          <p>Time taken: {totalTimeTaken}</p>
          <p>
            {result.status
              ? `Planet Found: ${result.planet_name}`
              : "Mission Failed"}
          </p>
        </div>
      </div>
      <div className="btn_container">
        <button className="result_btn" onClick={() => navigate("/")}>
          Start Again
        </button>
      </div>
    </div>
  );
};

export default ResultContainer;
