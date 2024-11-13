"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Offmap({ latitude, longitude }) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""
        ></script>
      </head>
      <MapContainer
        center={[latitude, longitude]} // Center the map based on props
        zoom={5} // Zoom level closer to the location
        scrollWheelZoom={true} // Enable zooming with the scroll wheel
        style={{ height: "347px", width: "519px" }} // Adjusted map size
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            {latitude}, {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
