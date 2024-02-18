import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Maps() {
  return (
    <div className="">
      <p className="text-sm text-black font-semibold flex justify-center my-3">
        Av. Montes Americanos #9501, Col. Sector 35, C.P. 31216, Chihuahua,
        Chih., México.
      </p>
      <div className="h-[250px] w-[600px] border-4 border-dark-500/75 shadow-lg">
        <MapContainer
          center={[28.642, -106.1463]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}
