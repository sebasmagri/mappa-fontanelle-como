import React from "react";
import logo from "./logo.jpeg";
import icona from "./icona.png";
import "leaflet/dist/leaflet.css";
import "./App.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from 'leaflet';


import fontanelle from "./fontanelle.json";

const iconaFontanella = new L.Icon({
  iconUrl: icona,
  iconRetinaUrl: icona,
  iconSize: new L.Point(25, 25),
  className: 'leaflet-div-icon',
  shadowAnchor: [10, 18],
      popupAnchor: [-4, -18],
      tooltipAnchor: [13, -4],
      iconAnchor: [18, 18]
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>SFM: Mappa delle fontanelle di Como</h1>
        </div>
      </header>
      <div>
        <MapContainer
          center={[45.8135, 9.0772]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {fontanelle.map(({position, description}, idx) => {
            return (
              // @ts-ignore
              <Marker position={position} icon={iconaFontanella} key={idx}>
                <Popup>{description}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
