import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/world-110m.json"; // Local JSON in public folder

const WorldMap = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center px-4 py-10 text-white">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">
        World Map Display
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 max-w-5xl w-full">
        <ComposableMap projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#1e293b", outline: "none" },
                    hover: {
                      fill: "#3b82f6",
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: { fill: "#2563eb", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;
