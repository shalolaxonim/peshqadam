import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet";
import Title from "../title";
import Container from "../container";

// Custom marker icon (fixes default icon issue in Leaflet)
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // Default Leaflet marker size
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Library locations
const libraries = [
  { id: 1, name: "Library 1", lat: 41.2995, lng: 69.2401 }, // Tashkent
  { id: 2, name: "Library 2", lat: 40.1033, lng: 65.3735 }, // Bukhara
  { id: 3, name: "Library 3", lat: 40.7895, lng: 72.3586 }, // Namangan
];

const LibraryMap: React.FC = () => {
  return (
    <Container style={{ width: "100%" }} className="my-12">
      <Title className="text-secondary dark:text-textDark text-center my-8">
        Bizning Kutubxonalar manzili
      </Title>
      <div className="my-12">
        <MapContainer
          center={[41.2995, 69.2401]} // Default center (Tashkent)
          zoom={6}
          style={{ height: "500px", width: "100%", zIndex: "0" }}
        >
          {/* OpenStreetMap Tile Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Markers for libraries */}
          {libraries.map((library) => (
            <Marker
              key={library.id}
              position={[library.lat, library.lng]}
              icon={customIcon}
            >
              <Popup>{library.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};

export default LibraryMap;
