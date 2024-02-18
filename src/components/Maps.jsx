import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Maps() {
  return (
    <div className="h-[400px] w-[600px]">
      <MapContainer
        center={[28.642, -106.1463]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "60%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
