import React from "react";
import logo from "./logo.jpeg";
import "leaflet/dist/leaflet.css";
import "./App.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import fontanelle from "./fontanelle.json";

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
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {fontanelle.map(fontanella => {
            return (
            // @ts-ignore
            <Marker position={fontanella.position}>
            <Popup>
              {fontanella.description}
            </Popup>
          </Marker>);
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
