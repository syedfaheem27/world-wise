import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <div>
        Location - Lat:{lat}, Lng:{lng}
      </div>
      <button onClick={() => setSearchParams({ lat: 20, lng: 30 })}>
        Change Location
      </button>
    </div>
  );
};

export default Map;
