"use client";

import React, { useState, useEffect } from "react";

// ==================== TIPLƏR ====================
interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
}

// ==================== STIL FUNKSIYALARI ====================
const getContainerStyle = (): React.CSSProperties => ({
  padding: "20px",
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  minHeight: "100vh",
  color: "white",
  fontFamily: "'Segoe UI', system-ui, sans-serif"
});

const getInputStyle = (): React.CSSProperties => ({
  padding: "12px 16px",
  marginBottom: 12,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  color: "white",
  fontSize: 14,
  width: "100%",
  maxWidth: 300,
  outline: "none"
});

const getButtonStyle = (variant: "primary" | "danger" = "primary"): React.CSSProperties => ({
  padding: "12px 24px",
  borderRadius: 8,
  border: "none",
  backgroundColor: variant === "primary" ? "#f59e0b" : "#ef4444",
  color: variant === "primary" ? "#0f172a" : "white",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: 14,
  marginRight: 8,
  marginBottom: 8
});

const getCardStyle = (): React.CSSProperties => ({
  marginBottom: 16,
  background: "rgba(30, 41, 59, 0.8)",
  padding: 16,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.1)",
  maxWidth: 400
});

const getImageStyle = (): React.CSSProperties => ({
  width: "100%",
  maxWidth: 300,
  height: 200,
  objectFit: "cover",
  borderRadius: 8,
  marginTop: 8,
  marginBottom: 8
});

// ==================== KOMPONENT ====================
function AdminPanel() {
  const [cars, setCars] = useState<Car[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [entered, setEntered] = useState(false);

  // localStorage-dan oxumaq
  useEffect(() => {
    const saved = localStorage.getItem("cars");
    if (saved) {
      try {
        setCars(JSON.parse(saved));
      } catch (e) {
        console.error("localStorage parse error:", e);
      }
    }
  }, []);

  // localStorage-a yazmaq
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  // Parol yoxlama
  const checkPassword = () => {
    if (password === "Nihad123") {
      setEntered(true);
      setPassword("");
    } else {
      alert("Parol səhvdir!");
    }
  };

  // Enter ilə giriş
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkPassword();
    }
  };

  // Maşın əlavə etmək
  const addCar = () => {
    if (!name || !price || !image) {
      alert("Bütün xanaları doldurun!");
      return;
    }
    const newCar: Car = { 
      id: Date.now(),
      name, 
      price, 
      image 
    };
    setCars([...cars, newCar]);
    setName("");
    setPrice("");
    setImage("");
  };

  // Maşın silmək
  const deleteCar = (id: number) => {
    if (confirm("Silmək istədiyinizə əminsiniz?")) {
      setCars(cars.filter((car) => car.id !== id));
    }
  };

  // Çıxış
  const handleLogout = () => {
    setEntered(false);
    setPassword("");
  };

  return (
    <div style={getContainerStyle()}>
      <h2 style={{ color: "#f59e0b", marginBottom: 24 }}>🚘 Admin Panel</h2>

      {/* Parol girişi */}
      {!entered && (
        <div style={{ maxWidth: 320 }}>
          <h3 style={{ marginBottom: 16 }}>Giriş</h3>
          <input
            type="password"
            placeholder="Admin parolu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            style={getInputStyle()}
            autoComplete="off"
          />
          <button onClick={checkPassword} style={getButtonStyle("primary")}>
            Daxil ol
          </button>
        </div>
      )}

      {/* Admin panel */}
      {entered && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <button onClick={handleLogout} style={getButtonStyle("danger")}>
              Çıxış
            </button>
          </div>

          <h3 style={{ color: "#f59e0b", marginBottom: 16 }}>➕ Avtomobil əlavə et</h3>
          
          <div style={{ maxWidth: 320 }}>
            <input
              placeholder="Avtomobil adı"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={getInputStyle()}
            />
            
            <input
              placeholder="Qiymət (₼)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={getInputStyle()}
            />
            
            <input
              placeholder="Şəkil URL-i"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={getInputStyle()}
            />
            
            <button onClick={addCar} style={getButtonStyle("primary")}>
              Əlavə et
            </button>
          </div>

          <hr style={{ border: "1px solid rgba(255,255,255,0.1)", margin: "32px 0" }} />

          <h3 style={{ color: "#f59e0b", marginBottom: 16 }}>🚗 Əlavə olunan maşınlar ({cars.length})</h3>
          
          {cars.length === 0 ? (
            <p style={{ color: "#94a3b8" }}>Hələ maşın əlavə edilməyib.</p>
          ) : (
            cars.map((car) => (
              <div key={car.id} style={getCardStyle()}>
                <strong style={{ fontSize: 18, color: "#f59e0b" }}>{car.name}</strong>
                <div style={{ color: "#94a3b8", marginTop: 4 }}>{car.price} ₼</div>
                
                <img 
                  src={car.image} 
                  alt={car.name}
                  style={getImageStyle()}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                
                <button
                  onClick={() => deleteCar(car.id)}
                  style={getButtonStyle("danger")}
                >
                  🗑️ Sil
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AdminPanel;