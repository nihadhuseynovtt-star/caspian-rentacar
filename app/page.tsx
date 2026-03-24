"use client";

import { useState, useEffect, useRef, useMemo } from "react";

// ==================== TYPES ====================
interface Car {
  id: number;
  name: string;
  image: string;
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
type FuelType = "all" | "Benzin" | "Dizel" | "Hibrid" | "Elektrik";
type TransmissionType = "all" | "Manual" | "Avtomat";

// ==================== TRANSLATIONS ====================
const translations = {
  az: {
    brand: "Caspian Rentacar",
    nav: { home: "Ana Səhifə", cars: "Avtomobillər", services: "Xidmətlər", contacts: "Əlaqə", admin: "Admin" },
    home: { title: "Premium Avtomobil Kirayəsi", subtitle: "Bakının ən sərfəli avtomobil rent şirkəti", cta: "Maşınlara Bax", stats: { cars: "Avtomobil", support: "Dəstək", safe: "Təhlükəsizlik" } },
    cars: { 
      title: "Avtomobil Parkı", 
      empty: "Hazırda maşın yoxdur", 
      filterAll: "Hamısı", 
      price: "₼/gün", 
      order: "Sifariş Et",
      search: "Axtar...",
      filters: "Filtrlər",
      priceRange: "Qiymət aralığı",
      yearFrom: "İldən",
      yearTo: "İlədək",
      fuel: "Yanacaq",
      transmission: "Sürət qutusu",
      seats: "Oturacaq",
      clearFilters: "Təmizlə",
      results: "nəticə tapıldı"
    },
    services: { 
      title: "Xidmətlərimiz",
      daily: { title: "Günlük Kirayə", desc: "Gündəlik ehtiyaclarınız üçün ideal həll. Səyahət, iş görüşləri və ya şəhər içi istifadə üçün geniş avtomobil seçimi.", features: ["Sürətli qaytarma", "Sığorta daxildir", "24/7 yol yardımı", "Pulsuz çatdırılma"] },
      monthly: { title: "Aylıq Kirayə", desc: "Uzunmüddətli kirayə üçün xüsusi endirimlər. Şirkət avtomobili və ya şəxsi istifadə üçün sərfəli şərtlər.", features: ["30%+ endirim", "Texniki xidmət daxil", "Yedək avtomobil", "Sığorta daxildir"] },
      airport: { title: "Hava Limanı Transferi", desc: "Heydər Əliyev Beynəlxalq Aeroportundan qarşılama və yola salma xidməti. Vaxtında və təhlükəsiz çatdırılma.", features: ["Vaxtında qarşılama", "Pulsuz gözləmə", "Bagaj köməyi", "Premium avtomobillər"] },
      vip: { title: "VIP Xidmət", desc: "Premium sinif avtomobillər ilə xüsusi statuslu xidmət. Şəxsi sürücü və maksimum komfort.", features: ["Şəxsi sürücü", "Mercedes S-Class", "Konfidensiallıq", "Premium içki"] }
    },
    contacts: { title: "Bizimlə Əlaqə", address: "Bakı, Nizami r., Atatürk pr. 89", phone: "Telefon", hours: "Hər gün: 09:00 - 21:00", email: "E-mail", map: "Xəritədə Bax" },
    admin: { title: "Admin Panel", login: "Daxil Ol", password: "Şifrəni daxil et", addCar: "Yeni Maşın", delete: "Sil", logout: "Çıxış", wrongPassword: "Yanlış şifrə!", uploadImage: "Şəkil yüklə", or: "və ya", url: "URL daxil et" },
    categories: { economy: "Ekonom", business: "Biznes", premium: "Premium", suv: "SUV/Jeep" },
    transmission: { manual: "Mexanika", automatic: "Avtomat" }
  },
  en: {
    brand: "Caspian Rentacar",
    nav: { home: "Home", cars: "Cars", services: "Services", contacts: "Contacts", admin: "Admin" },
    home: { title: "Premium Car Rental", subtitle: "Most affordable car rental in Baku", cta: "View Cars", stats: { cars: "Cars", support: "Support", safe: "Safety" } },
    cars: { 
      title: "Our Fleet", 
      empty: "No cars available", 
      filterAll: "All", 
      price: "AZN/day", 
      order: "Order Now",
      search: "Search...",
      filters: "Filters",
      priceRange: "Price range",
      yearFrom: "From year",
      yearTo: "To year",
      fuel: "Fuel",
      transmission: "Transmission",
      seats: "Seats",
      clearFilters: "Clear",
      results: "results found"
    },
    services: { 
      title: "Our Services",
      daily: { title: "Daily Rental", desc: "Perfect solution for daily needs. Wide selection of cars for travel, business meetings or city driving.", features: ["Quick return", "Insurance included", "24/7 roadside assist", "Free delivery"] },
      monthly: { title: "Monthly Rental", desc: "Special discounts for long-term rental. Affordable terms for company fleet or personal use.", features: ["30%+ discount", "Maintenance included", "Replacement car", "Insurance included"] },
      airport: { title: "Airport Transfer", desc: "Meet and greet service from Heydar Aliyev International Airport. On-time and safe delivery.", features: ["On-time pickup", "Free waiting", "Luggage assistance", "Premium cars"] },
      vip: { title: "VIP Service", desc: "Status service with premium class vehicles. Personal driver and maximum comfort.", features: ["Personal driver", "Mercedes S-Class", "Confidentiality", "Premium beverages"] }
    },
    contacts: { title: "Contact Us", address: "Baku, Nizami dist., Ataturk ave. 89", phone: "Phone", hours: "Daily: 09:00 - 21:00", email: "Email", map: "View on Map" },
    admin: { title: "Admin Panel", login: "Login", password: "Enter password", addCar: "Add Car", delete: "Delete", logout: "Logout", wrongPassword: "Wrong password!", uploadImage: "Upload image", or: "or", url: "Enter URL" },
    categories: { economy: "Economy", business: "Business", premium: "Premium", suv: "SUV/Jeep" },
    transmission: { manual: "Manual", automatic: "Automatic" }
  },
  ru: {
    brand: "Caspian Rentacar",
    nav: { home: "Главная", cars: "Автомобили", services: "Услуги", contacts: "Контакты", admin: "Админ" },
    home: { title: "Прокат Автомобилей", subtitle: "Самый доступный прокат в Баку", cta: "Смотреть Авто", stats: { cars: "Авто", support: "Поддержка", safe: "Безопасность" } },
    cars: { 
      title: "Автопарк", 
      empty: "Нет доступных авто", 
      filterAll: "Все", 
      price: "AZN/день", 
      order: "Заказать",
      search: "Поиск...",
      filters: "Фильтры",
      priceRange: "Ценовой диапазон",
      yearFrom: "От года",
      yearTo: "До года",
      fuel: "Топливо",
      transmission: "КПП",
      seats: "Мест",
      clearFilters: "Очистить",
      results: "результатов найдено"
    },
    services: { 
      title: "Наши Услуги",
      daily: { title: "Посуточная Аренда", desc: "Идеальное решение для ежедневных нужд. Широкий выбор автомобилей для поездок, деловых встреч или городской езды.", features: ["Быстрый возврат", "Страховка включена", "Круглосуточная помощь", "Бесплатная доставка"] },
      monthly: { title: "Помесячная Аренда", desc: "Специальные скидки на долгосрочную аренду. Выгодные условия для корпоративного парка или личного использования.", features: ["Скидка 30%+", "Обслуживание включено", "Замена авто", "Страховка включена"] },
      airport: { title: "Трансфер из Аэропорта", desc: "Встреча и проводы из Международного Аэропорта Гейдара Алиева. Своевременная и безопасная доставка.", features: ["Точно по времени", "Бесплатное ожидание", "Помощь с багажом", "Премиум авто"] },
      vip: { title: "ВИП Сервис", desc: "Сервис премиум-класса со статусными автомобилями. Личный водитель и максимальный комфорт.", features: ["Личный водитель", "Mercedes S-Class", "Конфиденциальность", "Премиум напитки"] }
    },
    contacts: { title: "Контакты", address: "Баку, Низаминский р., пр. Ататюрка 89", phone: "Телефон", hours: "Ежедневно: 09:00 - 21:00", email: "Email", map: "На карте" },
    admin: { title: "Админ Панель", login: "Вход", password: "Введите пароль", addCar: "Добавить Авто", delete: "Удалить", logout: "Выход", wrongPassword: "Неверный пароль!", uploadImage: "Загрузить фото", or: "или", url: "Введите URL" },
    categories: { economy: "Эконом", business: "Бизнес", premium: "Премиум", suv: "Внедорожник" },
    transmission: { manual: "Механика", automatic: "Автомат" }
  },
  ar: {
    brand: "كاسبيان رينت كار",
    nav: { home: "الرئيسية", cars: "السيارات", services: "الخدمات", contacts: "اتصل بنا", admin: "المشرف" },
    home: { title: "تأجير السيارات الفاخرة", subtitle: "أفضل خدمة تأجير سيارات في باكو بأسعار مميزة", cta: "تصفح السيارات", stats: { cars: "سيارة", support: "دعم", safe: "أمان" } },
    cars: { 
      title: "أسطول السيارات", 
      empty: "لا توجد سيارات متاحة", 
      filterAll: "الكل", 
      price: "مانات/يوم", 
      order: "احجز الآن",
      search: "بحث...",
      filters: "الفلاتر",
      priceRange: "نطاق السعر",
      yearFrom: "من سنة",
      yearTo: "إلى سنة",
      fuel: "الوقود",
      transmission: "ناقل الحركة",
      seats: "المقاعد",
      clearFilters: "مسح",
      results: "نتيجة encontrada"
    },
    services: { 
      title: "خدماتنا",
      daily: { title: "التأجير اليومي", desc: "الحل المثالي للاحتياجات اليومية. مجموعة واسعة من السيارات للسفر والاجتماعات التجارية أو القيادة داخل المدينة.", features: ["إرجاع سريع", "التأمين شامل", "مساعدة على الطريق 24/7", "توصيل مجاني"] },
      monthly: { title: "التأجير الشهري", desc: "خصومات خاصة للتأجير طويل الأجل. شروط ميسرة لأساطيل الشركات أو الاستخدام الشخصي.", features: ["خصم 30%+", "الصيانة مشمولة", "سيارة بديلة", "التأمين شامل"] },
      airport: { title: "نقل المطار", desc: "خدمة الاستقبال والتوصيل من مطار حيدر علييف الدولي. التوصيل في الوقت المحدد وبأمان.", features: ["الاستقبال في الوقت", "انتظار مجاني", "مساعدة الأمتعة", "سيارات فاخرة"] },
      vip: { title: "خدمة كبار الشخصيات", desc: "خدمة متميزة مع سيارات فاخرة. سائق خاص وأقصى درجات الراحة.", features: ["سائق خاص", "مرسيدس S-Class", "سرية تامة", "مشروبات فاخرة"] }
    },
    contacts: { title: "اتصل بنا", address: "باكو، منطقة نيزامي، شارع أتاتورك 89", phone: "الهاتف", hours: "يومياً: 09:00 - 21:00", email: "البريد الإلكتروني", map: "عرض على الخريطة" },
    admin: { title: "لوحة التحكم", login: "تسجيل الدخول", password: "أدخل كلمة المرور", addCar: "إضافة سيارة", delete: "حذف", logout: "خروج", wrongPassword: "كلمة المرور خاطئة!", uploadImage: "رفع صورة", or: "أو", url: "أدخل الرابط" },
    categories: { economy: "اقتصادية", business: "أعمال", premium: "فاخرة", suv: "دفع رباعي" },
    transmission: { manual: "يدوي", automatic: "أوتوماتيك" }
  }
};

// ==================== DEMO CARS ====================
const demoCars: Car[] = [
  { id: 1, name: "Mercedes-Benz E-Class", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800", price: 150, year: 2023, fuel: "Benzin", category: "business", transmission: "Avtomat", seats: 5, description: "Lüks biznes sedan" },
  { id: 2, name: "BMW X5", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", price: 180, year: 2022, fuel: "Dizel", category: "suv", transmission: "Avtomat", seats: 5, description: "Premium SUV" },
  { id: 3, name: "Toyota Camry", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800", price: 80, year: 2023, fuel: "Hibrid", category: "economy", transmission: "Avtomat", seats: 5, description: "Etibarlı sedan" },
  { id: 4, name: "Audi A6", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800", price: 140, year: 2023, fuel: "Benzin", category: "business", transmission: "Avtomat", seats: 5, description: "Texnoloji biznes avtomobili" },
  { id: 5, name: "Range Rover Sport", image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800", price: 250, year: 2023, fuel: "Dizel", category: "suv", transmission: "Avtomat", seats: 5, description: "Prestijli SUV" },
  { id: 6, name: "Audi R8", image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800", price: 400, year: 2022, fuel: "Benzin", category: "premium", transmission: "Avtomat", seats: 2, description: "Super sport avtomobil" },
  { id: 7, name: "Hyundai Elantra", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800", price: 50, year: 2022, fuel: "Benzin", category: "economy", transmission: "Avtomat", seats: 5, description: "Ekonom klass" },
  { id: 8, name: "Mercedes S-Class", image: "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800", price: 350, year: 2023, fuel: "Benzin", category: "premium", transmission: "Avtomat", seats: 4, description: "VIP sedan" }
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

  // Advanced filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [yearFrom, setYearFrom] = useState<number>(2015);
  const [yearTo, setYearTo] = useState<number>(2024);
  const [fuelFilter, setFuelFilter] = useState<FuelType>("all");
  const [transmissionFilter, setTransmissionFilter] = useState<TransmissionType>("all");
  const [showFilters, setShowFilters] = useState(false);

  const [newCar, setNewCar] = useState<Partial<Car>>({
    name: "", price: 0, image: "", year: 2023, fuel: "Benzin", category: "economy", transmission: "Avtomat", seats: 5, description: ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageInputType, setImageInputType] = useState<"url" | "file">("url");

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  // ==================== FILTER LOGIC ====================
  const filteredCars = useMemo(() => {
    let result = cars;

    // Category filter
    if (filter !== "all") {
      result = result.filter(c => c.category === filter);
    }

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.description?.toLowerCase().includes(query) ||
        c.fuel.toLowerCase().includes(query)
      );
    }

    // Price range
    result = result.filter(c => c.price >= priceRange[0] && c.price <= priceRange[1]);

    // Year range
    result = result.filter(c => c.year >= yearFrom && c.year <= yearTo);

    // Fuel type
    if (fuelFilter !== "all") {
      result = result.filter(c => c.fuel === fuelFilter);
    }

    // Transmission
    if (transmissionFilter !== "all") {
      result = result.filter(c => c.transmission === transmissionFilter);
    }

    return result;
  }, [cars, filter, searchQuery, priceRange, yearFrom, yearTo, fuelFilter, transmissionFilter]);

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCar({ ...newCar, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addCar = () => {
    if (!newCar.name || !newCar.price) return;
    const car: Car = {
      id: Date.now(),
      name: newCar.name,
      price: Number(newCar.price),
      image: newCar.image || "https://via.placeholder.com/400x300?text=No+Image",
      year: Number(newCar.year) || 2023,
      fuel: (newCar.fuel as any) || "Benzin",
      category: (newCar.category as any) || "economy",
      transmission: (newCar.transmission as any) || "Avtomat",
      seats: Number(newCar.seats) || 5,
      description: newCar.description || ""
    };
    saveCars([...cars, car]);
    setNewCar({ name: "", price: 0, image: "", year: 2023, fuel: "Benzin", category: "economy", transmission: "Avtomat", seats: 5, description: "" });
    setImageFile(null);
    setImageInputType("url");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const deleteCar = (id: number) => {
    if (confirm(lang === "az" ? "Silmək istəyirsən?" : lang === "en" ? "Delete?" : lang === "ar" ? "حذف؟" : "Удалить?")) {
      saveCars(cars.filter(c => c.id !== id));
    }
  };

  const clearFilters = () => {
    setFilter("all");
    setSearchQuery("");
    setPriceRange([0, 1000]);
    setYearFrom(2015);
    setYearTo(2024);
    setFuelFilter("all");
    setTransmissionFilter("all");
  };

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
      fontFamily: lang === "ar" ? "'Segoe UI', 'Arial', sans-serif" : "'Segoe UI', system-ui, sans-serif",
      color: "white",
      position: "relative",
      overflow: "hidden",
      direction: lang === "ar" ? "rtl" : "ltr"
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
      marginLeft: lang === "ar" ? 0 : 20,
      marginRight: lang === "ar" ? 20 : 0
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
    searchBar: {
      width: "100%",
      maxWidth: 500,
      margin: "0 auto 20px",
      position: "relative"
    },
    searchInput: {
      width: "100%",
      padding: "15px 20px",
      borderRadius: 50,
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(15, 23, 42, 0.8)",
      color: "white",
      fontSize: 16,
      outline: "none",
      paddingLeft: lang === "ar" ? 20 : 50,
      paddingRight: lang === "ar" ? 50 : 20
    },
    filterBar: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginBottom: 30,
      flexWrap: "wrap"
    },
    advancedFilters: {
      backgroundColor: "rgba(30, 41, 59, 0.9)",
      padding: 25,
      borderRadius: 16,
      marginBottom: 30,
      border: "1px solid rgba(255,255,255,0.1)",
      display: showFilters ? "block" : "none"
    },
    filterGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 20,
      marginBottom: 20
    },
    filterLabel: {
      display: "block",
      marginBottom: 8,
      color: "#94a3b8",
      fontSize: 14
    },
    filterSelect: {
      width: "100%",
      padding: 10,
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(15, 23, 42, 0.8)",
      color: "white",
      fontSize: 14
    },
    rangeInput: {
      width: "100%",
      marginTop: 10
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
      transition: "all 0.3s",
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
      color: "#94a3b8",
      flexWrap: "wrap"
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
      transition: "all 0.3s",
      cursor: "pointer"
    },
    serviceIcon: {
      fontSize: 56,
      marginBottom: 20,
      display: "inline-block"
    },
    serviceTitle: {
      fontSize: 22,
      color: "#f59e0b",
      marginBottom: 15,
      fontWeight: 700
    },
    serviceDesc: {
      color: "#94a3b8",
      marginBottom: 20,
      lineHeight: 1.6
    },
    serviceFeatures: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: lang === "ar" ? "right" : "left"
    },
    serviceFeature: {
      padding: "8px 0",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      color: "#cbd5e1",
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexDirection: lang === "ar" ? "row-reverse" : "row"
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
    },
    toggleFiltersBtn: {
      padding: "10px 20px",
      backgroundColor: "rgba(245, 158, 11, 0.2)",
      color: "#f59e0b",
      border: "1px solid #f59e0b",
      borderRadius: 8,
      cursor: "pointer",
      marginBottom: 20,
      fontWeight: 600
    },
    resultsCount: {
      textAlign: "center",
      color: "#94a3b8",
      marginBottom: 20,
      fontSize: 14
    },
    imageUploadBox: {
      border: "2px dashed rgba(255,255,255,0.3)",
      borderRadius: 8,
      padding: 20,
      textAlign: "center",
      marginBottom: 15,
      cursor: "pointer",
      transition: "all 0.3s"
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
            {(["az", "en", "ru", "ar"] as Language[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={getLangBtnStyle(l)}>
                {l === "ar" ? "عربي" : l.toUpperCase()}
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
                { n: cars.length + "+", l: t.home.stats.cars },
                { n: "24/7", l: t.home.stats.support },
                { n: "100%", l: t.home.stats.safe }
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
            
            {/* Search Bar */}
            <div style={styles.searchBar}>
              <input
                type="text"
                placeholder={t.cars.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
              <span style={{position: "absolute", [lang === "ar" ? "right" : "left"]: 20, top: "50%", transform: "translateY(-50%)", fontSize: 20}}>🔍</span>
            </div>

            {/* Toggle Filters */}
            <div style={{textAlign: "center"}}>
              <button style={styles.toggleFiltersBtn} onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? "✕ " : "⚙️ "}{t.cars.filters}
              </button>
            </div>

            {/* Advanced Filters */}
            <div style={styles.advancedFilters}>
              <div style={styles.filterGrid}>
                {/* Category Filter */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.filterAll}</label>
                  <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.filterSelect}>
                    <option value="all">{t.cars.filterAll}</option>
                    {(["economy", "business", "premium", "suv"] as const).map((c) => (
                      <option key={c} value={c}>{t.categories[c]}</option>
                    ))}
                  </select>
                </div>

                {/* Fuel Filter */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.fuel}</label>
                  <select value={fuelFilter} onChange={(e) => setFuelFilter(e.target.value as FuelType)} style={styles.filterSelect}>
                    <option value="all">{t.cars.filterAll}</option>
                    <option value="Benzin">{lang === "az" ? "Benzin" : lang === "ar" ? "بنزين" : "Бензин"}</option>
                    <option value="Dizel">{lang === "az" ? "Dizel" : lang === "ar" ? "ديزل" : "Дизель"}</option>
                    <option value="Hibrid">{lang === "az" ? "Hibrid" : lang === "ar" ? "هجين" : "Гибрид"}</option>
                    <option value="Elektrik">{lang === "az" ? "Elektrik" : lang === "ar" ? "كهربائي" : "Электро"}</option>
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.transmission}</label>
                  <select value={transmissionFilter} onChange={(e) => setTransmissionFilter(e.target.value as TransmissionType)} style={styles.filterSelect}>
                    <option value="all">{t.cars.filterAll}</option>
                    <option value="Manual">{t.transmission.manual}</option>
                    <option value="Avtomat">{t.transmission.automatic}</option>
                  </select>
                </div>

                {/* Year From */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.yearFrom}</label>
                  <input
                    type="number"
                    value={yearFrom}
                    onChange={(e) => setYearFrom(Number(e.target.value))}
                    style={styles.filterSelect}
                    min={2000}
                    max={2024}
                  />
                </div>

                {/* Year To */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.yearTo}</label>
                  <input
                    type="number"
                    value={yearTo}
                    onChange={(e) => setYearTo(Number(e.target.value))}
                    style={styles.filterSelect}
                    min={2000}
                    max={2024}
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label style={styles.filterLabel}>{t.cars.priceRange}: {priceRange[0]} - {priceRange[1]} ₼</label>
                  <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      style={styles.rangeInput}
                    />
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      style={styles.rangeInput}
                    />
                  </div>
                </div>
              </div>

              <div style={{textAlign: "center"}}>
                <button onClick={clearFilters} style={{...styles.deleteBtn, backgroundColor: "#64748b"}}>
                  {t.cars.clearFilters}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div style={styles.resultsCount}>
              {filteredCars.length} {t.cars.results}
            </div>

            {/* Cars Grid */}
            {filteredCars.length === 0 ? (
              <p style={{textAlign: "center", color: "#94a3b8", fontSize: 18}}>{t.cars.empty}</p>
            ) : (
              <div style={styles.carsGrid}>
                {filteredCars.map((car) => (
                  <div key={car.id} style={styles.carCard} className="car-card">
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
                        <span>🪑 {car.seats}</span>
                        <span>⚙️ {car.transmission === "Avtomat" ? t.transmission.automatic : t.transmission.manual}</span>
                      </div>
                      {car.description && <p style={{color: "#94a3b8", fontSize: 14, marginBottom: 10}}>{car.description}</p>}
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
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 25}}>
              {[
                { key: "daily", icon: "🚗", color: "#f59e0b" },
                { key: "monthly", icon: "📅", color: "#10b981" },
                { key: "airport", icon: "✈️", color: "#3b82f6" },
                { key: "vip", icon: "🤵", color: "#8b5cf6" }
              ].map((service) => (
                <div key={service.key} style={styles.serviceCard} className="service-card">
                  <div style={{...styles.serviceIcon, filter: `drop-shadow(0 0 20px ${service.color})`}}>
                    {service.icon}
                  </div>
                  <h3 style={styles.serviceTitle}>
                    {(t.services as any)[service.key].title}
                  </h3>
                  <p style={styles.serviceDesc}>
                    {(t.services as any)[service.key].desc}
                  </p>
                  <ul style={styles.serviceFeatures}>
                    {(t.services as any)[service.key].features.map((feature: string, idx: number) => (
                      <li key={idx} style={styles.serviceFeature}>
                        <span style={{color: service.color}}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    style={{
                      marginTop: 25,
                      padding: "12px 30px",
                      backgroundColor: service.color,
                      color: "white",
                      border: "none",
                      borderRadius: 25,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 14
                    }}
                    onClick={() => setPage("contacts")}
                  >
                    {lang === "az" ? "Ətraflı" : lang === "en" ? "Details" : lang === "ar" ? "التفاصيل" : "Подробнее"} →
                  </button>
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
                <h3>📍 {lang === "az" ? "Ünvan" : lang === "en" ? "Address" : lang === "ar" ? "العنوان" : "Адрес"}</h3>
                <p style={{color: "#94a3b8", marginTop: 10}}>{t.contacts.address}</p>
              </div>
              <div style={styles.contactCard}>
                <h3>📱 {t.contacts.phone}</h3>
                <p style={{color: "#f59e0b", fontSize: 24, fontWeight: "bold", marginTop: 10}}>+994 50 461 93 03</p>
              </div>
              <div style={styles.contactCard}>
                <h3>✉️ {t.contacts.email}</h3>
                <p style={{color: "#94a3b8", marginTop: 10}}>info@caspianrent.az</p>
              </div>
              <div style={styles.contactCard}>
                <h3>⏰ {lang === "az" ? "İş Saatları" : lang === "en" ? "Working Hours" : lang === "ar" ? "ساعات العمل" : "Часы Работы"}</h3>
                <p style={{color: "#94a3b8", marginTop: 10}}>{t.contacts.hours}</p>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div style={{marginTop: 30, backgroundColor: "rgba(30, 41, 59, 0.8)", borderRadius: 16, padding: 20, textAlign: "center"}}>
              <h3 style={{color: "#f59e0b", marginBottom: 15}}>🗺️ {t.contacts.map}</h3>
              <div style={{height: 300, backgroundColor: "rgba(15, 23, 42, 0.5)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8"}}>
                <div>
                  <div style={{fontSize: 48, marginBottom: 10}}>📍</div>
                  <p>Bakı, Nizami r., Atatürk pr. 89</p>
                  <a 
                    href="https://maps.google.com/?q=Baku+Nizami+Ataturk+89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{color: "#f59e0b", textDecoration: "none", display: "inline-block", marginTop: 10}}
                  >
                    Google Maps-də Aç →
                  </a>
                </div>
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
                  {lang === "az" ? "Geri" : lang === "en" ? "Back" : lang === "ar" ? "رجوع" : "Назад"}
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
                
                {/* Image Upload Section */}
                <div style={{marginBottom: 20}}>
                  <div style={{display: "flex", gap: 10, marginBottom: 15}}>
                    <button 
                      onClick={() => setImageInputType("url")}
                      style={{
                        flex: 1,
                        padding: 10,
                        backgroundColor: imageInputType === "url" ? "#f59e0b" : "rgba(255,255,255,0.1)",
                        color: imageInputType === "url" ? "#0f172a" : "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer"
                      }}
                    >
                      URL
                    </button>
                    <button 
                      onClick={() => setImageInputType("file")}
                      style={{
                        flex: 1,
                        padding: 10,
                        backgroundColor: imageInputType === "file" ? "#f59e0b" : "rgba(255,255,255,0.1)",
                        color: imageInputType === "file" ? "#0f172a" : "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer"
                      }}
                    >
                      {t.admin.uploadImage}
                    </button>
                  </div>

                  {imageInputType === "url" ? (
                    <input 
                      placeholder="Şəkil URL" 
                      value={newCar.image} 
                      onChange={(e) => setNewCar({...newCar, image: e.target.value})} 
                      style={styles.input} 
                    />
                  ) : (
                    <div 
                      style={styles.imageUploadBox}
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        if (file) {
                          setImageFile(file);
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setNewCar({ ...newCar, image: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{display: "none"}}
                      />
                      {newCar.image ? (
                        <img src={newCar.image} alt="Preview" style={{maxWidth: "100%", maxHeight: 200, borderRadius: 8}} />
                      ) : (
                        <div>
                          <div style={{fontSize: 32, marginBottom: 10}}>📁</div>
                          <p>{t.admin.uploadImage}</p>
                          <p style={{fontSize: 12, color: "#94a3b8", marginTop: 5}}>{t.admin.or} {t.admin.url}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div style={styles.grid2}>
                  <input placeholder="Marka/Model" value={newCar.name} onChange={(e) => setNewCar({...newCar, name: e.target.value})} style={styles.input} />
                  <input type="number" placeholder="Qiymət (₼)" value={newCar.price || ""} onChange={(e) => setNewCar({...newCar, price: Number(e.target.value)})} style={styles.input} />
                  <input type="number" placeholder="İl" value={newCar.year || ""} onChange={(e) => setNewCar({...newCar, year: Number(e.target.value)})} style={styles.input} />
                  <input type="number" placeholder="Oturacaq sayı" value={newCar.seats || ""} onChange={(e) => setNewCar({...newCar, seats: Number(e.target.value)})} style={styles.input} />
                  <select value={newCar.fuel} onChange={(e) => setNewCar({...newCar, fuel: e.target.value as any})} style={styles.input}>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Hibrid">Hibrid</option>
                    <option value="Elektrik">Elektrik</option>
                  </select>
                  <select value={newCar.transmission} onChange={(e) => setNewCar({...newCar, transmission: e.target.value as any})} style={styles.input}>
                    <option value="Avtomat">Avtomat</option>
                    <option value="Manual">Manual</option>
                  </select>
                  <select value={newCar.category} onChange={(e) => setNewCar({...newCar, category: e.target.value as any})} style={styles.input}>
                    {(["economy", "business", "premium", "suv"] as const).map((c) => (
                      <option key={c} value={c}>{t.categories[c]}</option>
                    ))}
                  </select>
                </div>
                <textarea 
                  placeholder="Açıqlama" 
                  value={newCar.description || ""} 
                  onChange={(e) => setNewCar({...newCar, description: e.target.value})} 
                  style={{...styles.input, minHeight: 80, resize: "vertical"}} 
                />
                <button onClick={addCar} style={styles.addBtn}>{t.admin.addCar}</button>

                <h3 style={{color: "#f59e0b", margin: "40px 0 20px"}}>🚗 Maşınların Siyahısı ({cars.length})</h3>
                <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                  {cars.map((car) => (
                    <div key={car.id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 15, backgroundColor: "rgba(15, 23, 42, 0.5)", borderRadius: 8}}>
                      <div style={{display: "flex", alignItems: "center", gap: 15}}>
                        <img src={car.image} alt="" style={{width: 60, height: 40, objectFit: "cover", borderRadius: 4}} />
                        <div>
                          <strong>{car.name}</strong>
                          <div style={{color: "#94a3b8", fontSize: 12}}>{car.price}₼ • {t.categories[car.category]} • {car.year}</div>
                        </div>
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
        .car-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
          border-color: #f59e0b;
        }
        input:focus, select:focus, textarea:focus {
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }
      `}</style>
    </div>
  );
}