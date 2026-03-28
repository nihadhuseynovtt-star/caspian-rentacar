"use client";

import { useState, useEffect, useRef, useMemo } from "react";

// ==================== TYPES ====================
interface Car {
  id: number;
  name: string;
  images: string[];           // ← dəyişdirildi: bir şəkil əvəzinə massiv
  price: number;
  year: number;
  fuel: "Benzin" | "Dizel" | "Hibrid" | "Elektrik";
  category: "economy" | "business" | "premium" | "suv";
  transmission: "Manual" | "Avtomat";
  seats: number;
  description?: string;
}

type Language = "az" | "en" | "ru" | "ar";
type Page = "home" | "cars" | "services" | "contacts" | "admin";

const translations = { /* ... eyni qalır, yalnız brand dəyişdirilir ... */ };

// Brand dəyişikliyi
const translations = {
  az: { brand: "Caspian Rent", ... },
  en: { brand: "Caspian Rent", ... },
  // digərləri də eyni şəkildə
};

// ==================== DEMO CARS (images massivi ilə) ====================
const demoCars: Car[] = [
  { 
    id: 1, 
    name: "Mercedes-Benz E-Class", 
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"], 
    price: 150, year: 2023, fuel: "Benzin", category: "business", 
    transmission: "Avtomat", seats: 5, description: "Lüks biznes sedan" 
  },
  // digər maşınları da eyni formada yenilə (images: [...] )
];

// ADMIN_PASSWORD və PHONE_NUMBER eyni qalır

export default function CaspianRent() {
  // ... state-lər eyni ...

  // Yeni state multiple images üçün
  const [newCarImages, setNewCarImages] = useState<string[]>([]);

  // Cars grid style - daha responsiv
  const styles = {
    // ... köhnə stillər ...

    carsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // mobil üçün daha kiçik
      gap: 24,
      padding: "0 10px"
    },

    // İcarə şərtləri üçün yeni stil
    conditionsContainer: {
      backgroundColor: "rgba(30, 41, 59, 0.9)",
      padding: "40px 30px",
      borderRadius: 20,
      marginTop: 60,
      border: "1px solid rgba(245, 158, 11, 0.2)"
    }
  };

  // ... qalan kod eyni ...

  return (
    <div style={styles.container}>
      <div style={styles.bgImage} />   {/* daha zərif arxa fon */}

      {/* HEADER - Caspian Rent */}
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => setPage("home")}>🚘 Caspian Rent</div>
        {/* ... nav ... */}
      </header>

      <main style={styles.main}>
        {/* HOME və CARS səhifələri eyni qalır, yalnız grid daha responsivdir */}

        {/* SERVICES + İCARƏ ŞƏRTLƏRİ */}
        {page === "services" && (
          <div>
            <h2 style={styles.sectionTitle}>Xidmətlərimiz</h2>
            
            {/* Sənin screenshotlardakı məzmun buraya əlavə olunacaq premium kart kimi */}

            {/* İcarə Şərtləri Bölməsi */}
            <div style={styles.conditionsContainer}>
              <h3 style={{textAlign: "center", color: "#f59e0b", marginBottom: 30}}>İcarə Şərtləri</h3>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 15}}>
                {[
                  "Minimal yaş: 23",
                  "Sürücülük vəsiqəsi (minimum 2 il təcrübə)",
                  "İdentifikasiya sənədləri (şəxsiyyət vəsiqəsi + pasport)",
                  "İcarənin minimal müddəti: 1 gün",
                  "Ödəniş: Nağd və ya kartla",
                  "Siqorta depoziti: Avtomobil növündən asılı olaraq",
                  "Tam sığorta daxildir"
                ].map((item, i) => (
                  <div key={i} style={{padding: "15px 20px", backgroundColor: "rgba(15,23,42,0.8)", borderRadius: 12, color: "#cbd5e1"}}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Müştəri Məmnuniyyəti */}
            <div style={{marginTop: 80, textAlign: "center"}}>
              <h3 style={{color: "#f59e0b", marginBottom: 20}}>Müştəri Məmnuniyyəti</h3>
              <div style={{fontSize: 60, display: "flex", justifyContent: "center", gap: 12, marginBottom: 15}}>
                {"⚙️⚙️⚙️⚙️⚙️".split('').map((w, i) => <span key={i}>{w}</span>)} {/* təkər ikonları */}
              </div>
              <p style={{fontSize: 28, fontWeight: 700, color: "#f59e0b"}}>4.9 / 5</p>
              <p style={{color: "#94a3b8"}}>200+ müştəri rəyi əsasında</p>
            </div>
          </div>
        )}

        {/* ADMIN PANEL - Multiple image upload */}
        {page === "admin" && isAdmin && (
          <div style={styles.adminPanel}>
            {/* ... digər inputlar ... */}

            {/* Multiple Images Upload */}
            <div style={{marginBottom: 25}}>
              <label style={{color: "#f59e0b", display: "block", marginBottom: 10}}>Maşın şəkilləri (4-5 ədəd tövsiyə olunur)</label>
              <input 
                type="file" 
                multiple 
                accept="image/*"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  files.forEach(file => {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      if (ev.target?.result) setNewCarImages(prev => [...prev, ev.target.result as string]);
                    };
                    reader.readAsDataURL(file);
                  });
                }}
              />
              <div style={{display: "flex", gap: 10, flexWrap: "wrap", marginTop: 15}}>
                {newCarImages.map((img, idx) => (
                  <img key={idx} src={img} alt="preview" style={{width: 120, height: 80, objectFit: "cover", borderRadius: 8}} />
                ))}
              </div>
            </div>

            {/* Add car button ilə images-i də əlavə et */}
          </div>
        )}
      </main>

      {/* Global styles - hover və responsivlik üçün */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .carsGrid { grid-template-columns: 1fr !important; } /* telefonda 1 maşın */
        }
      `}</style>
    </div>
  );
}