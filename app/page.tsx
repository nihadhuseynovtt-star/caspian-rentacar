"use client";

import { useState, useEffect, useRef } from "react";

// ==================== TYPES ====================
interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  year: number;
  fuel: string;
  category: "economy" | "business" | "premium" | "suv";
}

type Language = "az" | "en" | "ru";
type Page = "home" | "cars" | "services" | "contacts" | "admin";

// ==================== TRANSLATIONS ====================
const translations = {
  az: {
    brand: "Caspian Rentacar",
    nav: { home: "Ana Səhifə", cars: "Avtomobillər", services: "Xidmətlər", contacts: "Əlaqə", admin: "Admin" },
    home: { title: "Premium Avtomobil Kirayəsi", subtitle: "Bakının ən sərfəli avtomobil rent şirkəti", cta: "Maşınlara Bax" },
    cars: { title: "Avtomobil Parkı", empty: "Hazırda maşın yoxdur", filterAll: "Hamısı", price: "₼/gün", order: "Sifariş Et" },
    services: { title: "Xidmətlərimiz", daily: "Günlük Kirayə", monthly: "Aylıq Kirayə", airport: "Hava Limanı", vip: "VİP Xidmət" },
    contacts: { title: "Bizimlə Əlaqə", address: "Bakı, Nizami r., Atatürk pr. 89", phone: "Telefon", hours: "Hər gün: 09:00 - 21:00" },
    admin: { title: "Admin Panel", login: "Daxil Ol", password: "Şifrəni daxil et", addCar: "Yeni Maşın", delete: "Sil", logout: "Çıxış", wrongPassword: "Yanlış şifrə!" },
    categories: { economy: "Ekonom", business: "Biznes", premium: "Premium", suv: "SUV/Jeep" }
  },
  en: {
    brand: "Caspian Rentacar",
    nav: { home: "Home", cars: "Cars", services: "Services", contacts: "Contacts", admin: "Admin" },
    home: { title: "Premium Car Rental", subtitle: "Most affordable car rental in Baku", cta: "View Cars" },
    cars: { title: "Our Fleet", empty: "No cars available", filterAll: "All", price: "AZN/day", order: "Order Now" },
    services: { title: "Our Services", daily: "Daily Rental", monthly: "Monthly Rental", airport: "Airport Transfer", vip: "VIP Service" },
    contacts: { title: "Contact Us", address: "Baku, Nizami dist., Ataturk ave. 89", phone: "Phone", hours: "Daily: 09:00 - 21:00" },
    admin: { title: "Admin Panel", login: "Login", password: "Enter password", addCar: "Add Car", delete: "Delete", logout: "Logout", wrongPassword: "Wrong password!" },
    categories: { economy: "Economy", business: "Business", premium: "Premium", suv: "SUV/Jeep" }
  },
  ru: {
    brand: "Caspian Rentacar",
    nav: { home: "Главная", cars: "Автомобили", services: "Услуги", contacts: "Контакты", admin: "Админ" },
    home: { title: "Прокат Автомобилей", subtitle: "Самый доступный прокат в Баку", cta: "Смотреть Авто" },
    cars: { title: "Автопарк", empty: "Нет доступных авто", filterAll: "Все", price: "AZN/день", order: "Заказать" },
    services: { title: "Наши Услуги", daily: "Посуточная Аренда", monthly: "Помесячная Аренда", airport: "Трансфер из Аэропорта", vip: "ВИП Сервис" },
    contacts: { title: "Контакты", address: "Баку, Низаминский р., пр. Ататюрка 89", phone: "Телефон", hours: "Ежедневно: 09:00 - 21:00" },
    admin: { title: "Админ Панель", login: "Вход", password: "Введите пароль", addCar: "Добавить Авто", delete: "Удалить", logout: "Выход", wrongPassword: "Неверный пароль!" },
    categories: { economy: "Эконом", business: "Бизнес", premium: "Премиум", suv: "Внедорожник" }
  }
};

// ==================== DEMO CARS ====================
const demoCars: Car[] = [
  { id: 1, name: "Mercedes-Benz E-Class", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800", price: 150, year: 2023, fuel: "Benzin", category: "business" },
  { id: 2, name: "BMW X5", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", price: 180, year: 2022, fuel: "Dizel", category: "suv" },
  { id: 3, name: "Toyota Camry", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800", price: 80, year: 2023, fuel: "Hibrid", category: "economy" },
  { id: 4, name: "Audi A6", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800", price: 140, year: 2023, fuel: "Benzin", category: "business" },
  { id: 5, name: "Range Rover Sport", image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800", price: 250, year: 2023, fuel: "Dizel", category: "suv" },
  { id: 6, name: "Audi R8", image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800", price: 400, year: 2022, fuel: "Benzin", category: "premium" }
];

const ADMIN_PASSWORD = "Nihad123";
const PHONE_NUMBER = "994504619303";

export default function CaspianRentacar() {
  // ==================== STATE ====================
  const [lang, setLang] = useState<Language>("az");
  const [page, setPage] = useState<Page>("home");
  const [cars, setCars] = useState<Car[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [loaded, setLoaded] = useState(false);

  const [newCar, setNewCar] = useState<Partial<Car>>({
    name: "", price: 0, image: "", year: 2023, fuel: "Benzin", category: "economy"
  });

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const t = translations[lang];

  // ==================== EFFECTS ====================
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("caspian_cars");
      if (saved) setCars(JSON.parse(saved));
      else {
        setCars(demoCars);
        localStorage.setItem("caspian_cars", JSON.stringify(demoCars));
      }
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (page === "admin" && passwordInputRef.current) {
      passwordInputRef.current.value = "";
      setAdminInput("");
    }
  }, [page]);

  const saveCars = (newCars: Car[]) => {
    setCars(newCars);
    if (typeof window !== "undefined") {
      localStorage.setItem("caspian_cars", JSON.stringify(newCars));
    }
  };

  // ==================== HANDLERS ====================
  const handleAdminLogin = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setAdminInput("");
    } else {
      alert(t.admin.wrongPassword);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setPage("home");
    setAdminInput("");
  };

  const addCar = () => {
    if (!newCar.name || !newCar.price) return;
    const car: Car = {
      id: Date.now(),
      name: newCar.name,
      price: Number(newCar.price),
      image: newCar.image || "https://via.placeholder.com/400x300?text=No+Image",
      year: Number(newCar.year) || 2023,
      fuel: newCar.fuel || "Benzin",
      category: (newCar.category as any) || "economy"
    };
    saveCars([...cars, car]);
    setNewCar({ name: "", price: 0, image: "", year: 2023, fuel: "Benzin", category: "economy" });
  };

  const deleteCar = (id: number) => {
    if (confirm(lang === "az" ? "Silmək istəyirsən?" : lang === "en" ? "Delete?" : "Удалить?")) {
      saveCars(cars.filter(c => c.id !== id));
    }
  };

  const filteredCars = filter === "all" ? cars : cars.filter(c => c.category === filter);

  // ==================== STYLE FUNCTIONS ====================
  const getNavBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    backgroundColor: active ? "#f59e0b" : "transparent",
    color: active ? "#0f172a" : "#94a3b8",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.3s",
    fontSize: 14
  });

  const getFilterBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "8px 20px",
    borderRadius: 20,
    border: "1px solid " + (active ? "#f59e0b" : "rgba(255,255,255,0.2)"),
    backgroundColor: active ? "#f59e0b" : "transparent",
    color: active ? "#0f172a" : "white",
    cursor: "pointer",
    fontSize: 14
  });

  const getLangBtnStyle = (l: Language): React.CSSProperties => ({
    padding: "5px 10px",
    borderRadius: 4,
    border: "none",
    backgroundColor: lang === l ? "#f59e0b" : "rgba(255,255,255,0.1)",
    color: lang === l ? "#0f172a" : "white",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: "bold"
  });

  // ==================== STYLES ====================
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "white",
      position: "relative",
      overflow: "hidden"
    },
    bgImage: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1920')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.15,
      zIndex: 0,
      pointerEvents: "none"
    },
    header: {
      position: "relative",
      zIndex: 10,
      backgroundColor: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20
    },
    logo: {
      fontSize: 28,
      fontWeight: "bold",
      background: "linear-gradient(90deg, #f59e0b, #ef4444)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    },
    nav: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" },
    langSwitcher: {
      display: "flex",
      gap: 5,
      marginLeft: 20
    },
    main: {
      position: "relative",
      zIndex: 10,
      padding: "40px 20px",
      maxWidth: 1400,
      margin: "0 auto"
    },
    hero: {
      textAlign: "center",
      padding: "80px 20px",
      maxWidth: 800,
      margin: "0 auto"
    },
    heroTitle: {
      fontSize: "clamp(36px, 6vw, 64px)",
      fontWeight: 800,
      marginBottom: 20,
      background: "linear-gradient(90deg, #f59e0b, #ef4444, #f59e0b)",
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "shine 3s linear infinite"
    },
    heroSubtitle: {
      fontSize: 20,
      color: "#94a3b8",
      marginBottom: 40
    },
    ctaBtn: {
      padding: "18px 40px",
      fontSize: 18,
      fontWeight: "bold",
      background: "linear-gradient(90deg, #f59e0b, #ef4444)",
      color: "white",
      border: "none",
      borderRadius: 50,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
      transition: "transform 0.3s"
    },
    sectionTitle: {
      fontSize: 36,
      fontWeight: 700,
      marginBottom: 30,
      textAlign: "center",
      color: "#f59e0b"
    },
    filterBar: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginBottom: 30,
      flexWrap: "wrap"
    },
    carsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: 25
    },
    carCard: {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      backdropFilter: "blur(10px)",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer"
    },
    carImage: {
      width: "100%",
      height: 200,
      objectFit: "cover"
    },
    carInfo: { padding: 20 },
    carName: { fontSize: 20, fontWeight: 700, marginBottom: 8 },
    carMeta: {
      display: "flex",
      gap: 10,
      marginBottom: 15,
      fontSize: 13,
      color: "#94a3b8"
    },
    badge: {
      backgroundColor: "rgba(245, 158, 11, 0.2)",
      color: "#f59e0b",
      padding: "4px 12px",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600
    },
    carFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 15
    },
    price: { fontSize: 24, fontWeight: 800, color: "#f59e0b" },
    whatsappBtn: {
      padding: "10px 20px",
      backgroundColor: "#25d366",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      gap: 5
    },
    adminPanel: {
      backgroundColor: "rgba(30, 41, 59, 0.95)",
      padding: 30,
      borderRadius: 16,
      maxWidth: 800,
      margin: "0 auto",
      border: "1px solid rgba(245, 158, 11, 0.3)"
    },
    input: {
      width: "100%",
      padding: 12,
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(15, 23, 42, 0.8)",
      color: "white",
      marginBottom: 15,
      fontSize: 14,
      outline: "none"
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 15
    },
    addBtn: {
      width: "100%",
      padding: 15,
      backgroundColor: "#f59e0b",
      color: "#0f172a",
      border: "none",
      borderRadius: 8,
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: 16,
      marginTop: 10
    },
    deleteBtn: {
      padding: "8px 16px",
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontSize: 12
    },
    loginBox: {
      maxWidth: 400,
      margin: "100px auto",
      textAlign: "center",
      backgroundColor: "rgba(30, 41, 59, 0.95)",
      padding: 40,
      borderRadius: 16,
      border: "1px solid rgba(245, 158, 11, 0.3)"
    },
    serviceCard: {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      padding: 40,
      borderRadius: 16,
      textAlign: "center",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "transform 0.3s"
    },
    contactCard: {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      padding: 30,
      borderRadius: 16,
      textAlign: "center"
    },
    logoutBtn: {
      padding: "8px 16px",
      backgroundColor: "#64748b",
      color: "white",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontSize: 14
    }
  };

  if (!loaded) return <div style={{...styles.container, display: "flex", alignItems: "center", justifyContent: "center"}}>Yüklənir...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.bgImage} />
      
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => setPage("home")}>🚘 {t.brand}</div>
        <nav style={styles.nav}>
          {(Object.keys(t.nav).filter(k => k !== "admin") as Page[]).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={getNavBtnStyle(page === p)}
            >
              {t.nav[p]}
            </button>
          ))}
          <div style={styles.langSwitcher}>
            {(["az", "en", "ru"] as Language[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={getLangBtnStyle(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main style={styles.main}>
        {/* HOME */}
        {page === "home" && (
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>{t.home.title}</h1>
            <p style={styles.heroSubtitle}>{t.home.subtitle}</p>
            <button style={styles.ctaBtn} onClick={() => setPage("cars")}>
              {t.home.cta} →
            </button>
            
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginTop: 80, maxWidth: 600, margin: "80px auto 0"}}>
              {[
                { n: cars.length + "+", l: lang === "az" ? "Avtomobil" : lang === "en" ? "Cars" : "Авто" },
                { n: "24/7", l: lang === "az" ? "Dəstək" : lang === "en" ? "Support" : "Поддержка" },
                { n: "100%", l: lang === "az" ? "Təhlükəsizlik" : lang === "en" ? "Safe" : "Безопасность" }
              ].map((s, i) => (
                <div key={i} style={{textAlign: "center"}}>
                  <div style={{fontSize: 48, fontWeight: 800, color: "#f59e0b"}}>{s.n}</div>
                  <div style={{color: "#94a3b8"}}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{marginTop: 60, opacity: 0.3}}>
              <button 
                onClick={() => setPage("admin")}
                style={{background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "8px 16px", borderRadius: 4, cursor: "pointer", fontSize: 12}}
              >
                Admin
              </button>
            </div>
          </div>
        )}

        {/* CARS */}
        {page === "cars" && (
          <div>
            <h2 style={styles.sectionTitle}>{t.cars.title}</h2>
            
            <div style={styles.filterBar}>
              <button style={getFilterBtnStyle(filter === "all")} onClick={() => setFilter("all")}>{t.cars.filterAll}</button>
              {(["economy", "business", "premium", "suv"] as const).map((c) => (
                <button key={c} style={getFilterBtnStyle(filter === c)} onClick={() => setFilter(c)}>
                  {t.categories[c]}
                </button>
              ))}
            </div>

            {filteredCars.length === 0 ? (
              <p style={{textAlign: "center", color: "#94a3b8"}}>{t.cars.empty}</p>
            ) : (
              <div style={styles.carsGrid}>
                {filteredCars.map((car) => (
                  <div key={car.id} style={styles.carCard}>
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      style={styles.carImage} 
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
                      }} 
                    />
                    <div style={styles.carInfo}>
                      <h3 style={styles.carName}>{car.name}</h3>
                      <div style={styles.carMeta}>
                        <span style={styles.badge}>{t.categories[car.category]}</span>
                        <span>{car.year} • {car.fuel}</span>
                      </div>
                      <div style={styles.carFooter}>
                        <span style={styles.price}>{car.price} {t.cars.price}</span>
                        <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Salam, ${car.name} maraqlıdır. Qiymət: ${car.price}₼`)}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                          <button style={styles.whatsappBtn}>💬 {t.cars.order}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SERVICES */}
        {page === "services" && (
          <div>
            <h2 style={styles.sectionTitle}>{t.services.title}</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 25}}>
              {[
                { icon: "🚗", t: t.services.daily },
                { icon: "📅", t: t.services.monthly },
                { icon: "✈️", t: t.services.airport },
                { icon: "🤵", t: t.services.vip }
              ].map((s, i) => (
                <div key={i} style={styles.serviceCard}>
                  <div style={{fontSize: 56, marginBottom: 20}}>{s.icon}</div>
                  <h3 style={{fontSize: 20, color: "#f59e0b"}}>{s.t}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACTS */}
        {page === "contacts" && (
          <div style={{maxWidth: 800, margin: "0 auto"}}>
            <h2 style={styles.sectionTitle}>{t.contacts.title}</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 25}}>
              <div style={styles.contactCard}>
                <h3>📍 {lang === "az" ? "Ünvan" : lang === "en" ? "Address" : "Адрес"}</h3>
                <p style={{color: "#94a3b8", marginTop: 10}}>{t.contacts.address}</p>
              </div>
              <div style={styles.contactCard}>
                <h3>📱 {t.contacts.phone}</h3>
                <p style={{color: "#f59e0b", fontSize: 24, fontWeight: "bold", marginTop: 10}}>+994 50 461 93 03</p>
              </div>
              <div style={styles.contactCard}>
                <h3>⏰ {lang === "az" ? "İş Saatları" : lang === "en" ? "Working Hours" : "Часы Работы"}</h3>
                <p style={{color: "#94a3b8", marginTop: 10}}>{t.contacts.hours}</p>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN LOGIN / PANEL */}
        {page === "admin" && (
          <div>
            {!isAdmin ? (
              <div style={styles.loginBox}>
                <h2 style={{...styles.sectionTitle, marginBottom: 30}}>{t.admin.title}</h2>
                <input
                  ref={passwordInputRef}
                  type="password"
                  placeholder={t.admin.password}
                  autoComplete="new-password"
                  name="admin-password-unique"
                  id="admin-password-unique"
                  onChange={(e) => setAdminInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  style={styles.input}
                />
                <button onClick={handleAdminLogin} style={styles.addBtn}>{t.admin.login}</button>
                <button 
                  onClick={() => setPage("home")} 
                  style={{...styles.logoutBtn, marginTop: 15, width: "100%"}}
                >
                  {lang === "az" ? "Geri" : lang === "en" ? "Back" : "Назад"}
                </button>
              </div>
            ) : (
              <div style={styles.adminPanel}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30}}>
                  <h2 style={{...styles.sectionTitle, margin: 0, textAlign: "left"}}>{t.admin.title}</h2>
                  <button onClick={handleLogout} style={styles.logoutBtn}>
                    {t.admin.logout}
                  </button>
                </div>

                <h3 style={{color: "#f59e0b", marginBottom: 20}}>➕ {t.admin.addCar}</h3>
                <div style={styles.grid2}>
                  <input placeholder="Marka/Model" value={newCar.name} onChange={(e) => setNewCar({...newCar, name: e.target.value})} style={styles.input} />
                  <input type="number" placeholder="Qiymət (₼)" value={newCar.price || ""} onChange={(e) => setNewCar({...newCar, price: Number(e.target.value)})} style={styles.input} />
                  <input placeholder="Şəkil URL" value={newCar.image} onChange={(e) => setNewCar({...newCar, image: e.target.value})} style={styles.input} />
                  <input type="number" placeholder="İl" value={newCar.year || ""} onChange={(e) => setNewCar({...newCar, year: Number(e.target.value)})} style={styles.input} />
                  <select value={newCar.fuel} onChange={(e) => setNewCar({...newCar, fuel: e.target.value})} style={styles.input}>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Hibrid">Hibrid</option>
                    <option value="Elektrik">Elektrik</option>
                  </select>
                  <select value={newCar.category} onChange={(e) => setNewCar({...newCar, category: e.target.value as any})} style={styles.input}>
                    {(["economy", "business", "premium", "suv"] as const).map((c) => (
                      <option key={c} value={c}>{t.categories[c]}</option>
                    ))}
                  </select>
                </div>
                <button onClick={addCar} style={styles.addBtn}>{t.admin.addCar}</button>

                <h3 style={{color: "#f59e0b", margin: "40px 0 20px"}}>🚗 Maşınların Siyahısı</h3>
                <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                  {cars.map((car) => (
                    <div key={car.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 15, backgroundColor: "rgba(15, 23, 42, 0.5)", borderRadius: 8}}>
                      <div>
                        <strong>{car.name}</strong>
                        <span style={{color: "#94a3b8", marginLeft: 15}}>{car.price}₼ • {t.categories[car.category]}</span>
                      </div>
                      <button onClick={() => deleteCar(car.id)} style={styles.deleteBtn}>{t.admin.delete}</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(245, 158, 11, 0.4);
        }
      `}</style>
    </div>
  );
}