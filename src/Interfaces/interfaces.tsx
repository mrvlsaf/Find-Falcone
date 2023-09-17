export interface PlanetsInterface {
  name: string;
  distance: number;
  filter: () => {};
}

export interface VehiclesInterface {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
  map: any;
}

export interface PlanetsPropsInterface {
  index: number;
  planets: {
    name: string;
    distance: number;
    filter: () => {};
  }[];
  handlePlanetChange: any;
  selectedDestinations: string[];
  setShowDestination: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface PlanetsContainerInterface {
  index: number;
  handlePlanetChange: any;
  planets: {
    name: string;
    distance: number;
    filter: () => {};
  }[];
  selectedDestinations: string[];
  setShowDestination: React.Dispatch<React.SetStateAction<boolean[]>>;
  showDestination: boolean[];
  vehicle: string;
  vehicles: VehiclesInterface[];
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
  setVehicles: React.Dispatch<React.SetStateAction<VehiclesInterface[]>>;
  setSelectedVehicles: React.Dispatch<React.SetStateAction<String[]>>;
  setSpeed: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface VehiclePropsInterface {
  vehicle: string;
  vehicles: VehiclesInterface[];
  setVehicles: React.Dispatch<React.SetStateAction<VehiclesInterface[]>>;
  setVehicle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedVehicles: React.Dispatch<React.SetStateAction<String[]>>;
  setSpeed: React.Dispatch<React.SetStateAction<number[]>>;
  index: number;
}

export interface SuccessPropsInterface {
  result: any;
  totalTimeTaken: any;
}
