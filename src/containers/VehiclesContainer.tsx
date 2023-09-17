import Vehicle from "../components/Vehicle";
import Planets from "../components/Planets";
import { PlanetsContainerInterface } from "../Interfaces/interfaces";

const PlanetsContainer = ({
  index,
  handlePlanetChange,
  planets,
  selectedDestinations,
  setShowDestination,
  showDestination,
  vehicle,
  vehicles,
  setVehicle,
  setVehicles,
  setSelectedVehicles,
  setSpeed,
}: PlanetsContainerInterface) => {
  return (
    <div className="selectDestinationContainer">
      <h3>Destination {index + 1}</h3>{" "}
      <Planets
        index={index}
        handlePlanetChange={handlePlanetChange}
        planets={planets}
        selectedDestinations={selectedDestinations}
        setShowDestination={setShowDestination}
      />
      {showDestination[index] && (
        <Vehicle
          vehicle={vehicle}
          vehicles={vehicles}
          setVehicle={setVehicle}
          setVehicles={setVehicles}
          setSelectedVehicles={setSelectedVehicles}
          setSpeed={setSpeed}
          index={index}
        />
      )}
    </div>
  );
};

export default PlanetsContainer;
