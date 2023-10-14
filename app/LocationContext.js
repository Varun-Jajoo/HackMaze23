import { createContext, useState, useContext } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({});

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocationContext = () => {
  return useContext(LocationContext);
};

export { LocationProvider, useLocationContext };
