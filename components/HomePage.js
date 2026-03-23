"use client";
import React from "react";

function HomePage({ brandName }) {
  return (
    <div style={{
      backgroundImage: "url('/baku.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      color: "white"
    }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <h2>{brandName}</h2>
        <nav>
          <a href="#">Ev</a> | <a href="#">Avtomobillər</a> | <a href="#">Xidmətlərimiz</a> | <a href="#">Əlaqə</a> | <a href="#">Bloq</a>
        </nav>
        <div>
          <select>
            <option value="az">AZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </header>

      <main style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Bakıda ən rahat avtomobil kirayəsi</h1>
        <button style={{ marginTop: "20px" }}>WhatsApp ilə sifariş</button>
      </main>
    </div>
  );
}

export default HomePage;
