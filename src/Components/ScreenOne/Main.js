import React from "react";
import { Map, APIProvider, Marker } from "@vis.gl/react-google-maps";

function Main({ showMarkers }) {
  const position = {
    lat: 20.5937,
    lng: 78.9629,
  };
  const retailers = [
    { lat: 16.41888, lng: 75.43811 },
    { lat: 13.21419, lng: 77.29941 },
    { lat: 16.05763, lng: 76.06095 },
    { lat: 15.93909, lng: 74.48794 },
    { lat: 15.61752, lng: 76.90058 },
  ];
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
      <div className="map">
        <Map defaultZoom={5} defaultCenter={position}>
          {showMarkers &&
            retailers.map((marker, index) => (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            ))}
        </Map>
      </div>
    </APIProvider>
  );
}
export default Main;
