import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "9vh" }}>
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
