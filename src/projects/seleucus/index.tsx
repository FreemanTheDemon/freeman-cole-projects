import React from 'react';
import { Link } from "react-router-dom";

export default function SeleucusApp() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <Link to={'/'}>
          Home
        </Link>
      <h2>Seleucus</h2>
    </main>
  );
}