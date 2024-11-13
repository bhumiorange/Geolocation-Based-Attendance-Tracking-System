"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  const officeLocations = [
    {
      latitude: 13.057903,
      longitude: 77.592044,
      address: "Swan, 2nd Floor, #323, Kodigehalli Main Road, Sahakar Nagar, Bangalore",
      leader: "Priya Mahajan",
      employees: 27,
    },
    {
      latitude: 28.568884,
      longitude: 77.186144,
      address: "GAIL Bhawan, 16 Bhikaji Cama Place, R K Puram, Delhi HQ",
      leader: "Ravi Kumar",
      employees: 45,
    },
    {
      latitude: 23.022592,
      longitude: 72.572615,
      address: "809, Sakar-II, Opp. Town Hall, Near Ellisbridge, Ahmedabad",
      leader: "Anjali Patel",
      employees: 30,
    },
    {
      latitude: 23.182400,
      longitude: 77.454674,
      address: "8-Mapple High Street (2nd Floor), Opp. Aashima Mall, Hoshangabad Road, Bhopal",
      leader: "Suresh Mehta",
      employees: 22,
    },
    {
      latitude: 20.342579,
      longitude: 85.811152,
      address: "UGF-DCB016, DLF Cyber City IDCo Info Park, Chandaka Industrial Estate, Patia, Bhubaneswar",
      leader: "Pooja Nanda",
      employees: 18,
    },
    {
      latitude: 30.738570,
      longitude: 76.786827,
      address: "Udyog Bhavan Annexe Building, 18 Himalaya Marg, Sector 17, Chandigarh",
      leader: "Rajiv Gupta",
      employees: 35,
    },
    {
      latitude: 13.059024,
      longitude: 80.254433,
      address: "3rd Floor, CTS building (Above SBI), BSNL Complex, No: 16, Greams Road, Chennai",
      leader: "Meera Iyer",
      employees: 40,
    },
    {
      latitude: 26.112578,
      longitude: 91.798508,
      address: "2nd Floor, Advika 87, MG Road, Pan Bazar, Guwahati",
      leader: "Arun Sharma",
      employees: 20,
    },
    {
      latitude: 17.478393,
      longitude: 78.565383,
      address: "Module No.105, NSIC Business Park, Kamala Nagar, Dr. A.S. Rao Nagar, Hyderabad",
      leader: "Vishal Rao",
      employees: 50,
    },
  ];

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
        center={[23.5937, 80.9629]} // Centering the map on India
        zoom={4} // Zoom level to fit the whole of India
        scrollWheelZoom={true} // Enable zooming with the scroll wheel
        style={{ height: "347px", width: "519px" }} // Adjusted map size
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {officeLocations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              {location.address}<br />
              Leader: {location.leader}<br />
              Employees: {location.employees}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
