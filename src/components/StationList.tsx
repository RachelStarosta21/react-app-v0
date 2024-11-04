// src/components/StationList.tsx
import React, { useEffect, useState } from 'react';



//this is broken, the stations do not import
const StationList: React.FC = () => {
  const [stationNames, setStationNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch('/data/stations.json'); 
      const data = await response.json();
      const names = Object.keys(data[0]); 
      setStationNames(names);
    };

    fetchStations();
  }, []);

  return (
    <div>
      <h1>Station Names</h1>
      <ul>
        {stationNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};


export default StationList;