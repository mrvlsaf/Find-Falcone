import "./Table.css";
import { VehiclesInterface } from "../../Interfaces/interfaces";

const Table = ({ vehicles }: { vehicles: VehiclesInterface[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Vehicle</td>
          <td>Available</td>
          <td>Max Distance</td>
          <td>Speed</td>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle: VehiclesInterface) => (
          <tr key={vehicle.name}>
            <td>{vehicle.name}</td>
            <td>{vehicle.total_no}</td>
            <td>{vehicle.max_distance}</td>
            <td>{vehicle.speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
