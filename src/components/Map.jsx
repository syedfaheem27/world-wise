import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([33, 74]);
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  const { cities } = useCities();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={9}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(({ position: { lat, lng }, id, emoji, cityName }) => (
          <Marker position={[lat, lng]} key={id}>
            <Popup>
              <span>{emoji}</span> <span>{cityName}</span>
            </Popup>
          </Marker>
        ))}
        <CenterMap position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function CenterMap({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default Map;
