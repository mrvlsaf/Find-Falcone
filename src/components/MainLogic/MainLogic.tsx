import "./MainLogic.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { apiUrl, config } from "../../config/config";
import TimeContainer from "../../containers/TimeContainer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VehiclesContainer from "../../containers/VehiclesContainer";
import {
  PlanetsInterface,
  VehiclesInterface,
} from "../../Interfaces/interfaces";
import Table from "../VehicleTable/Table";

const MainLogic = ({
  reset,
  handleReset,
}: {
  reset: Boolean;
  handleReset: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");
  const [vehicle1, setVehicle1] = useState<string>("");
  const [vehicle2, setVehicle2] = useState<string>("");
  const [vehicle3, setVehicle3] = useState<string>("");
  const [vehicle4, setVehicle4] = useState<string>("");
  const [timeTaken, setTimeTaken] = useState<number[]>([]);
  const [speed, setSpeed] = useState<number[]>([0, 0, 0, 0]);
  const [planets, setPlanets] = useState<PlanetsInterface[]>([]);
  const [distance, setDistance] = useState<number[]>([0, 0, 0, 0]);
  const [vehicles, setVehicles] = useState<VehiclesInterface[]>([]);
  const [loadingVehicles, setLoadingVehicles] = useState<boolean>(true);
  const [selectedVehicles, setSelectedVehicles] = useState<String[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [showDestination, setShowDestination] = useState<boolean[]>(
    new Array(4).fill(false)
  );

  const vehicleList = [
    { value: vehicle1, setter: setVehicle1 },
    { value: vehicle2, setter: setVehicle2 },
    { value: vehicle3, setter: setVehicle3 },
    { value: vehicle4, setter: setVehicle4 },
  ];

  const getToken = async () => {
    try {
      const { data } = await axios.post(`${apiUrl}/token`, {}, config);
      setToken(data.token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  const getPlanetsAndVehicles = async () => {
    setLoadingVehicles(true);
    getPlanets();
    getVehicles();
    setLoadingVehicles(false);
    handleReset(false);
  };

  const getPlanets = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/planets`);
      setPlanets(data);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  const getVehicles = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/vehicles`);
      setVehicles(data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const findFalcone = async () => {
    try {
      const { data } = await axios.post(
        `${apiUrl}/find`,
        {
          token: token,
          planet_names: selectedDestinations,
          vehicle_names: selectedVehicles,
        },
        config
      );
      const result = {
        planet_name: data.planet_name ? data.planet_name : "",
        status: data.status === "success" ? true : false,
      };
      localStorage.setItem("result", JSON.stringify(result));
      const totalTimeTaken = timeTaken.reduce((a, b) => a + b, 0);
      localStorage.setItem("time taken", JSON.stringify(totalTimeTaken));
      navigate("/result");
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  const handlePlanetChange = (planet: any, i: number) => {
    setSelectedDestinations((prevState: any) => {
      prevState[i] = planet.name;
      return [...prevState];
    });
    setDistance((prevDistance: any) => {
      prevDistance[i] = planet.distance;
      return [...prevDistance];
    });
  };

  useEffect(() => {
    const timeArray = distance
      .map((d, i) => (speed[i] !== 0 ? d / speed[i] : 0))
      .filter((t) => !isNaN(t));
    setTimeTaken(timeArray);
  }, [speed, distance]);

  useEffect(() => {
    if (reset) {
      setShowDestination([false, false, false, false]);
      setSelectedDestinations([]);
      setSpeed([0, 0, 0, 0]);
      setDistance([0, 0, 0, 0]);
      getPlanetsAndVehicles();
    }
  }, [reset]);

  useEffect(() => {
    getPlanetsAndVehicles();
    getToken();
  }, []);

  return (
    <div className="subContainer">
      <div>
        <div className="headingContainer">
          <h1 className="heading">Select planets you want to search in :</h1>
          <Tooltip title={<Table vehicles={vehicles} />}>
            <InfoOutlinedIcon />
          </Tooltip>
        </div>
        <div className="destinationContainer">
          {vehicleList.map((vehicle, index) => {
            return (
              <VehiclesContainer
                index={index}
                handlePlanetChange={handlePlanetChange}
                planets={planets}
                selectedDestinations={selectedDestinations}
                setShowDestination={setShowDestination}
                showDestination={showDestination}
                vehicle={vehicle.value}
                vehicles={vehicles}
                setVehicle={vehicle.setter}
                setVehicles={setVehicles}
                setSelectedVehicles={setSelectedVehicles}
                setSpeed={setSpeed}
              />
            );
          })}
          <TimeContainer timeTaken={timeTaken} />
        </div>
      </div>
      <div className="btn_container">
        <button
          className={
            selectedDestinations.length !== 4 || selectedVehicles.length !== 4
              ? "findDisabled find"
              : "find"
          }
          disabled={
            selectedDestinations.length !== 4 || selectedVehicles.length !== 4
          }
          onClick={findFalcone}
        >
          Find Falcone!
        </button>
      </div>
    </div>
  );
};

export default MainLogic;
