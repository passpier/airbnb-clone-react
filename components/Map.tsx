"use client";

import { getCenter } from "geolib";

import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import ReactMapGL, { AttributionControl, Marker, Popup } from "react-map-gl";

interface MapProps {
  searchResults: Accommodation[];
}

const Map: React.FC<MapProps> = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState<Accommodation>(
    {} as Accommodation,
  );

  // Transform the search results object into the
  // { latitude: 52.516722, longitude: 12.377722 } object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The longitude and latitude of the center of locations coordinates
  const center = getCenter(coordinates);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/passpier/clkqnhtav009901ohdx5r0eln"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      style={{ width: "100%", height: "100%" }}
      initialViewState={{
        longitude: (
          center as {
            longitude: number;
            latitude: number;
          }
        )?.longitude,
        latitude: (
          center as {
            longitude: number;
            latitude: number;
          }
        )?.latitude,
        zoom: 11,
      }}
      attributionControl={false}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              role="img"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLocation(result);
              }}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/*The popup that should show iff we click on a Maker*/}
          {result.long === selectedLocation.long && (
            <Popup
              onClose={() => setSelectedLocation({} as Accommodation)}
              closeOnClick
              longitude={result.long}
              latitude={result.lat}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
      <AttributionControl customAttribution="Map design by me" />
    </ReactMapGL>
  );
};

export default Map;
