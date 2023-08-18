import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../components/SideBar";
import Map from "../components/Map";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
