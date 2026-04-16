import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div className="center-page">
      <h2>
        <span>Our Services:</span>
      </h2>
      <Outlet />
    </div>
  );
}
