"use client";

import { useState, useEffect, useRef, useMemo } from "react";

// ==================== TYPES ====================
interface Car {
  id: number;
  name: string;
  images: string[]; // Birdən çox şəkil - 4-5 ədəd
  price: number;
  year: number;
  fuel: "Benzin" | "Dizel" | "Hibrid" | "Elektrik";
  category: "economy" | "business" | "premium" | "suv";
  transmission: "Manual" | "Avtomat";
  seats: number;
  description?: string;
}

type Language = "az" | "en" | "ru" | "ar";
type Page = "home" | "cars" | "services" | "contacts" | "admin" | "rental-terms";
type FuelType = "all" | "Benzin" | "Dizel" | "Hibrid" | "Elektrik";
type TransmissionType = "all" | "Manual" | "Avtomat";

// ==================== TRANSLATIONS ====================
const translations = {
  az: {
    brand: "Caspian Rent",
    brandSubtitle: "Premium Car Rental",
    nav: { home: "Ana Səhifə", cars: "Avtomobillər", services: "Xidmətlər", contacts: "Əlaqə", admin: "Admin", rentalTerms: "İcarə Şərtləri" },
    home: { 
      title: "Lüks Avtomobillərin İcarəsi", 
      subtitle: "Premium nəqliyyat, premium xidmət", 
      cta: "Maşınlara Bax", 
      stats: { cars: "Avtomobil", clients: "Müştəri", satisfaction: "Məmnuniyyət", experience: "İllik Təcrübə" }
    },
    cars: { 
      title: "Mövcud Avtomobillər", 
      empty: "Hazırda maşın yoxdur", 
      filterAll: "Hamısı", 
      price: "AZN/gün", 
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
      results: "nəticə tapıldı",
      viewDetails: "Ətraflı"
    },
    services: { 
      title: "Xidmətlərimiz",
      daily: { 
        title: "Günlük Kirayə", 
        desc: "Gündəlik ehtiyaclarınız üçün ideal həll. Səyahət, iş görüşləri və ya şəhər içi istifadə üçün geniş avtomobil seçimi.",
        features: ["Sürətli qaytarma", "Sığorta daxildir", "24/7 yol yardımı", "Pulsuz çatdırılma", "Limitsiz kilometrə"],
        price: "50 AZN'dən"
      },
      monthly: { 
        title: "Aylıq Kirayə", 
        desc: "Uzunmüddətli kirayə üçün xüsusi endirimlər. Şirkət avtomobili və ya şəxsi istifadə üçün sərfəli şərtlər.",
        features: ["30%+ endirim", "Texniki xidmət daxil", "Yedək avtomobil", "Sığorta daxildir", "Fərdi müqavilə"],
        price: "1200 AZN'dən"
      },
      weekly: {
        title: "Həftəlik Kirayə",
        desc: "Balanslaşdırılmış həll - günlükdən sərfəli, aylıqdan çevik. Turistlər və biznes səfərləri üçün ideal.",
        features: ["15%+ endirim", "Hava limanı transferi", "GPS naviqator", "Uşaq oturacağı", "Sürətli sənədləşmə"],
        price: "350 AZN'dən"
      },
      airport: { 
        title: "Hava Limanı Transferi", 
        desc: "Heydər Əliyev Beynəlxalq Aeroportundan qarşılama və yola salma xidməti. Vaxtında və təhlükəsiz çatdırılma.",
        features: ["Vaxtında qarşılama", "Pulsuz gözləmə 60 dəq", "Bagaj köməyi", "Premium avtomobillər", "Online izləmə"],
        price: "40 AZN'dən"
      },
      vip: { 
        title: "VIP Xidmət", 
        desc: "Premium sinif avtomobillər ilə xüsusi statuslu xidmət. Şəxsi sürücü və maksimum komfort.",
        features: ["Şəxsi sürücü", "Mercedes S-Class & BMW 7", "Konfidensiallıq", "Premium içkilər", "Wi-Fi hotspot"],
        price: "300 AZN'dən"
      },
      corporate: {
        title: "Korporativ Xidmət",
        desc: "Şirkətlər üçün xüsusi fleet həlləri. Toplu kirayə və uzunmüddətli əməkdaşlıq şərtləri.",
        features: ["Fleet idarəetmə", "Fərdi endirimlər", "Vaxtında hesabat", "24/7 dəstək", "Yedək avtomobil parkı"],
        price: "Müqavilə ilə"
      }
    },
    rentalTerms: {
      title: "İcarə Şərtləri",
      subtitle: "Şəffaf şərtlər, etibarlı xidmət",
      age: {
        title: "Yaş və Sürücü Təcrübəsi",
        content: "Minimal yaş həddi 21-dir. 21-24 yaş arası sürücülər üçün əlavə sığorta haqqı tətbiq olunur (25 AZN/gün). 25+ yaş sürücülər üçün heç bir əlavə haqq tələb olunmur. Sürücülük vəsiqəsi minimum 2 illik olmalıdır."
      },
      documents: {
        title: "Tələb Olunan Sənədlər",
        items: ["Şəxsiyyət vəsiqəsi (passport)", "Sürücülük vəsiqəsi (B və ya BE kateqoriyası)", "Yaşayış yeri təsdiqi (son 3 ay ərzində kommunal və ya bank çıxarışı)"]
      },
      insurance: {
        title: "Sığorta və Təhlükəsizlik",
        content: "Bütün avtomobillərimiz KASKO və icbari sığorta ilə təmin edilib. Fransıziya məbləği kateqoriyadan asılı olaraq 500-2000 AZN arası dəyişir. Əlavə tam sığorta seçimi mövcuddur (15 AZN/gün)."
      },
      payment: {
        title: "Ödəniş Şərtləri",
        content: "Nağd, bank kartı və ya köçürmə ilə ödəniş qəbul edilir. Rezervasiya üçün 20% ilkin ödəniş tələb olunur. Aylıq kirayə üçün həftəlik ödəniş imkanı mövcuddur."
      },
      mileage: {
        title: "Kilometrə Limiti",
        content: "Günlük kirayə: 200 km limitsiz. Aylıq kirayə: 3000 km limitsiz. Əlavə kilometr üçün 0.50 AZN/km hesablanır."
      },
      fuel: {
        title: "Yanacaq Siyasəti",
        content: "Avtomobil tam dolu yanacaq tankı ilə təhvil verilir və eyni şəkildə qəbul edilir. Əks halda yanacaq fərqi + 20 AZN xidmət haqqı tutulur."
      }
    },
    contacts: { 
      title: "Bizimlə Əlaqə", 
      address: "Bakı, Nizami r., Atatürk pr. 89", 
      phone: "Telefon", 
      hours: "Hər gün: 09:00 - 21:00", 
      email: "E-mail", 
      map: "Xəritədə Bax",
      workingHours: "İş Saatları",
      contactInfo: "Əlaqə Məlumatları"
    },
    admin: { 
      title: "Admin Panel", 
      login: "Daxil Ol", 
      password: "Şifrəni daxil et", 
      addCar: "Yeni Maşın", 
      delete: "Sil", 
      logout: "Çıxış", 
      wrongPassword: "Yanlış şifrə!", 
      uploadImages: "Şəkillər yüklə", 
      or: "və ya", 
      url: "URL daxil et",
      imagesCount: "şəkil",
      addImage: "Şəkil əlavə et"
    },
    categories: { economy: "Ekonom", business: "Biznes", premium: "Premium", suv: "SUV/Jeep" },
    transmission: { manual: "Mexanika", automatic: "Avtomat" },
    footer: {
      copyright: "© 2024 Caspian Rent. Bütün hüquqlar qorunur.",
      address: "Bakı, Azərbaycan",
      followUs: "Bizi izləyin"
    }
  },
  en: {
    brand: "Caspian Rent",
    brandSubtitle: "Premium Car Rental",
    nav: { home: "Home", cars: "Cars", services: "Services", contacts: "Contacts", admin: "Admin", rentalTerms: "Rental Terms" },
    home: { 
      title: "Luxury Car Rental", 
      subtitle: "Premium transportation, premium service", 
      cta: "View Cars", 
      stats: { cars: "Cars", clients: "Clients", satisfaction: "Satisfaction", experience: "Years Experience" }
    },
    cars: { 
      title: "Available Cars", 
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
      results: "results found",
      viewDetails: "Details"
    },
    services: { 
      title: "Our Services",
      daily: { 
        title: "Daily Rental", 
        desc: "Perfect solution for daily needs. Wide selection of cars for travel, business meetings or city driving.",
        features: ["Quick return", "Insurance included", "24/7 roadside assist", "Free delivery", "Unlimited mileage"],
        price: "From 50 AZN"
      },
      monthly: { 
        title: "Monthly Rental", 
        desc: "Special discounts for long-term rental. Affordable terms for company fleet or personal use.",
        features: ["30%+ discount", "Maintenance included", "Replacement car", "Insurance included", "Individual contract"],
        price: "From 1200 AZN"
      },
      weekly: {
        title: "Weekly Rental",
        desc: "Balanced solution - better than daily, more flexible than monthly. Ideal for tourists and business trips.",
        features: ["15%+ discount", "Airport transfer", "GPS navigator", "Child seat", "Fast paperwork"],
        price: "From 350 AZN"
      },
      airport: { 
        title: "Airport Transfer", 
        desc: "Meet and greet service from Heydar Aliyev International Airport. On-time and safe delivery.",
        features: ["On-time pickup", "Free 60 min waiting", "Luggage assistance", "Premium cars", "Online tracking"],
        price: "From 40 AZN"
      },
      vip: { 
        title: "VIP Service", 
        desc: "Status service with premium class vehicles. Personal driver and maximum comfort.",
        features: ["Personal driver", "Mercedes S-Class & BMW 7", "Confidentiality", "Premium beverages", "Wi-Fi hotspot"],
        price: "From 300 AZN"
      },
      corporate: {
        title: "Corporate Service",
        desc: "Special fleet solutions for companies. Bulk rental and long-term partnership terms.",
        features: ["Fleet management", "Individual discounts", "Timely reporting", "24/7 support", "Backup vehicle pool"],
        price: "By contract"
      }
    },
    rentalTerms: {
      title: "Rental Terms",
      subtitle: "Transparent terms, reliable service",
      age: {
        title: "Age & Driving Experience",
        content: "Minimum age is 21. Drivers aged 21-24 pay additional insurance fee (25 AZN/day). No extra fee for 25+ drivers. Driver's license must be minimum 2 years old."
      },
      documents: {
        title: "Required Documents",
        items: ["ID (passport)", "Driver's license (B or BE category)", "Proof of residence (utility or bank statement from last 3 months)"]
      },
      insurance: {
        title: "Insurance & Security",
        content: "All vehicles have CASCO and mandatory insurance. Franchise amount varies 500-2000 AZN by category. Additional full insurance available (15 AZN/day)."
      },
      payment: {
        title: "Payment Terms",
        content: "Cash, card or bank transfer accepted. 20% prepayment required for reservation. Weekly payment available for monthly rentals."
      },
      mileage: {
        title: "Mileage Limit",
        content: "Daily rental: 200 km unlimited. Monthly rental: 3000 km unlimited. Extra km charged at 0.50 AZN/km."
      },
      fuel: {
        title: "Fuel Policy",
        content: "Vehicle delivered with full tank and must be returned full. Otherwise fuel difference + 20 AZN service fee applies."
      }
    },
    contacts: { 
      title: "Contact Us", 
      address: "Baku, Nizami dist., Ataturk ave. 89", 
      phone: "Phone", 
      hours: "Daily: 09:00 - 21:00", 
      email: "Email", 
      map: "View on Map",
      workingHours: "Working Hours",
      contactInfo: "Contact Information"
    },
    admin: { 
      title: "Admin Panel", 
      login: "Login", 
      password: "Enter password", 
      addCar: "Add Car", 
      delete: "Delete", 
      logout: "Logout", 
      wrongPassword: "Wrong password!", 
      uploadImages: "Upload images", 
      or: "or", 
      url: "Enter URL",
      imagesCount: "images",
      addImage: "Add image"
    },
    categories: { economy: "Economy", business: "Business", premium: "Premium", suv: "SUV/Jeep" },
    transmission: { manual: "Manual", automatic: "Automatic" },
    footer: {
      copyright: "© 2024 Caspian Rent. All rights reserved.",
      address: "Baku, Azerbaijan",
      followUs: "Follow us"
    }
  },
  ru: {
    brand: "Caspian Rent",
    brandSubtitle: "Premium Car Rental",
    nav: { home: "Главная", cars: "Автомобили", services: "Услуги", contacts: "Контакты", admin: "Админ", rentalTerms: "Условия аренды" },
    home: { 
      title: "Аренда Люкс Автомобилей", 
      subtitle: "Премиум транспорт, премиум сервис", 
      cta: "Смотреть Авто", 
      stats: { cars: "Авто", clients: "Клиентов", satisfaction: "Удовлетворенность", experience: "Лет Опыта" }
    },
    cars: { 
      title: "Доступные Автомобили", 
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
      results: "результатов найдено",
      viewDetails: "Подробнее"
    },
    services: { 
      title: "Наши Услуги",
      daily: { 
        title: "Посуточная Аренда", 
        desc: "Идеальное решение для ежедневных нужд. Широкий выбор автомобилей для поездок, деловых встреч или городской езды.",
        features: ["Быстрый возврат", "Страховка включена", "Круглосуточная помощь", "Бесплатная доставка", "Безлимитный пробег"],
        price: "От 50 AZN"
      },
      monthly: { 
        title: "Помесячная Аренда", 
        desc: "Специальные скидки на долгосрочную аренду. Выгодные условия для корпоративного парка или личного использования.",
        features: ["Скидка 30%+", "Обслуживание включено", "Замена авто", "Страховка включена", "Индивидуальный договор"],
        price: "От 1200 AZN"
      },
      weekly: {
        title: "Еженедельная Аренда",
        desc: "Сбалансированное решение — выгоднее посуточной, гибче помесячной. Идеально для туристов и деловых поездок.",
        features: ["Скидка 15%+", "Трансфер из аэропорта", "GPS навигатор", "Детское кресло", "Быстрое оформление"],
        price: "От 350 AZN"
      },
      airport: { 
        title: "Трансфер из Аэропорта", 
        desc: "Встреча и проводы из Международного Аэропорта Гейдара Алиева. Своевременная и безопасная доставка.",
        features: ["Точно по времени", "Бесплатное ожидание 60 мин", "Помощь с багажом", "Премиум авто", "Онлайн отслеживание"],
        price: "От 40 AZN"
      },
      vip: { 
        title: "ВИП Сервис", 
        desc: "Сервис премиум-класса со статусными автомобилями. Личный водитель и максимальный комфорт.",
        features: ["Личный водитель", "Mercedes S-Class & BMW 7", "Конфиденциальность", "Премиум напитки", "Wi-Fi точка доступа"],
        price: "От 300 AZN"
      },
      corporate: {
        title: "Корпоративный Сервис",
        desc: "Специальные fleet решения для компаний. Оптовая аренда и долгосрочное партнерство.",
        features: ["Управление парком", "Индивидуальные скидки", "Своевременная отчетность", "Круглосуточная поддержка", "Резервный автопарк"],
        price: "По договору"
      }
    },
    rentalTerms: {
      title: "Условия Аренды",
      subtitle: "Прозрачные условия, надежный сервис",
      age: {
        title: "Возраст и Водительский Стаж",
        content: "Минимальный возраст — 21 год. Водители 21-24 лет платят дополнительную страховку (25 AZN/день). Для водителей 25+ доплата не требуется. Водительское удостоверение минимум 2 года."
      },
      documents: {
        title: "Требуемые Документы",
        items: ["Удостоверение личности (паспорт)", "Водительское удостоверение (категория B или BE)", "Подтверждение места жительства (коммунальная или банковская выписка за 3 месяца)"]
      },
      insurance: {
        title: "Страхование и Безопасность",
        content: "Все автомобили имеют КАСКО и ОСАГО. Франшиза варьируется 500-2000 AZN по категориям. Дополнительное полное страхование доступно (15 AZN/день)."
      },
      payment: {
        title: "Условия Оплаты",
        content: "Принимаем наличные, карты и банковские переводы. Для бронирования требуется предоплата 20%. Для месячной аренды возможна еженедельная оплата."
      },
      mileage: {
        title: "Лимит Пробега",
        content: "Посуточная аренда: 200 км безлимит. Помесячная аренда: 3000 км безлимит. Дополнительный км — 0.50 AZN/км."
      },
      fuel: {
        title: "Топливная Политика",
        content: "Автомобиль выдается с полным баком и должен быть возвращен полным. Иначе разница в топливе + 20 AZN сервисный сбор."
      }
    },
    contacts: { 
      title: "Контакты", 
      address: "Баку, Низаминский р., пр. Ататюрка 89", 
      phone: "Телефон", 
      hours: "Ежедневно: 09:00 - 21:00", 
      email: "Email", 
      map: "На карте",
      workingHours: "Часы Работы",
      contactInfo: "Контактная Информация"
    },
    admin: { 
      title: "Админ Панель", 
      login: "Вход", 
      password: "Введите пароль", 
      addCar: "Добавить Авто", 
      delete: "Удалить", 
      logout: "Выход", 
      wrongPassword: "Неверный пароль!", 
      uploadImages: "Загрузить фото", 
      or: "или", 
      url: "Введите URL",
      imagesCount: "фото",
      addImage: "Добавить фото"
    },
    categories: { economy: "Эконом", business: "Бизнес", premium: "Премиум", suv: "Внедорожник" },
    transmission: { manual: "Механика", automatic: "Автомат" },
    footer: {
      copyright: "© 2024 Caspian Rent. Все права защищены.",
      address: "Баку, Азербайджан",
      followUs: "Подписывайтесь"
    }
  },
  ar: {
    brand: "كاسبيان رينت",
    brandSubtitle: "Premium Car Rental",
    nav: { home: "الرئيسية", cars: "السيارات", services: "الخدمات", contacts: "اتصل بنا", admin: "المشرف", rentalTerms: "شروط التأجير" },
    home: { 
      title: "تأجير السيارات الفاخرة", 
      subtitle: "نقل متميز، خدمة متميزة", 
      cta: "تصفح السيارات", 
      stats: { cars: "سيارة", clients: "عميل", satisfaction: "رضا", experience: "سنوات خبرة" }
    },
    cars: { 
      title: "السيارات المتاحة", 
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
      results: "نتيجة",
      viewDetails: "التفاصيل"
    },
    services: { 
      title: "خدماتنا",
      daily: { 
        title: "التأجير اليومي", 
        desc: "الحل المثالي للاحتياجات اليومية. مجموعة واسعة من السيارات للسفر والاجتماعات التجارية أو القيادة داخل المدينة.",
        features: ["إرجاع سريع", "التأمين شامل", "مساعدة على الطريق 24/7", "توصيل مجاني", "كيلومتر غير محدود"],
        price: "من 50 مانات"
      },
      monthly: { 
        title: "التأجير الشهري", 
        desc: "خصومات خاصة للتأجير طويل الأجل. شروط ميسرة لأساطيل الشركات أو الاستخدام الشخصي.",
        features: ["خصم 30%+", "الصيانة مشمولة", "سيارة بديلة", "التأمين شامل", "عقد فردي"],
        price: "من 1200 مانات"
      },
      weekly: {
        title: "التأجير الأسبوعي",
        desc: "حل متوازن - أفضل من اليومي، أكثر مرونة من الشهري. مثالي للسياح والرحلات التجارية.",
        features: ["خصم 15%+", "نقل المطار", "جهاز GPS", "مقعد أطفال", "معاملات سريعة"],
        price: "من 350 مانات"
      },
      airport: { 
        title: "نقل المطار", 
        desc: "خدمة الاستقبال والتوصيل من مطار حيدر علييف الدولي. التوصيل في الوقت المحدد وبأمان.",
        features: ["الاستقبال في الوقت", "انتظار مجاني 60 دقيقة", "مساعدة الأمتعة", "سيارات فاخرة", "تتبع online"],
        price: "من 40 مانات"
      },
      vip: { 
        title: "خدمة كبار الشخصيات", 
        desc: "خدمة متميزة مع سيارات فاخرة. سائق خاص وأقصى درجات الراحة.",
        features: ["سائق خاص", "مرسيدس S-Class & BMW 7", "سرية تامة", "مشروبات فاخرة", "نقطة Wi-Fi"],
        price: "من 300 مانات"
      },
      corporate: {
        title: "الخدمة المؤسسية",
        desc: "حلول أسطول خاصة للشركات. تأجير بالجملة وشروط شراكة طويلة الأجل.",
        features: ["إدارة الأسطول", "خصومات فردية", "تقارير في الوقت المناسب", "دعم 24/7", "احتياطي سيارات"],
        price: "حسب العقد"
      }
    },
    rentalTerms: {
      title: "شروط التأجير",
      subtitle: "شروف شفافة، خدمة موثوقة",
      age: {
        title: "العمر وخبرة القيادة",
        content: "الحد الأدنى للعمر 21 سنة. السائقون 21-24 سنة يدفعون رسوم تأمين إضافية (25 مانات/يوم). لا رسوم إضافية لـ 25+. رخصة القيادة يجب أن تكون 2 سنوات على الأقل."
      },
      documents: {
        title: "المستندات المطلوبة",
        items: ["بطاقة الهوية (جواز السفر)", "رخصة القيادة (فئة B أو BE)", "إثبات السكن (فاتورة خدمات أو كشف بنك من 3 أشهر)"]
      },
      insurance: {
        title: "التأمين والأمان",
        content: "جميع السيارات مؤمنة تأمين شامل وإلزامي. الامتياز يختلف 500-2000 مانات حسب الفئة. تأمين شامل إضافي متاح (15 مانات/يوم)."
      },
      payment: {
        title: "شروط الدفع",
        content: "نقبل النقد والبطاقات والتحويلات البنكية. دفعة أولى 20% مطلوبة للحجز. دفع أسبوعي متاح للتأجير الشهري."
      },
      mileage: {
        title: "حد الكيلومترات",
        content: "التأجير اليومي: 200 كم غير محدود. التأجير الشهري: 3000 كم غير محدود. الكيلومتر الإضافي 0.50 مانات/كم."
      },
      fuel: {
        title: "سياسة الوقود",
        content: "السيارة تُسلم بخزان ممتلئ وتُعاد ممتلئة. خلاف ذلك يُخصم فرق الوقود + 20 مانات رسوم خدمة."
      }
    },
    contacts: { 
      title: "اتصل بنا", 
      address: "باكو، منطقة نيزامي، شارع أتاتورك 89", 
      phone: "الهاتف", 
      hours: "يومياً: 09:00 - 21:00", 
      email: "البريد الإلكتروني", 
      map: "عرض على الخريطة",
      workingHours: "ساعات العمل",
      contactInfo: "معلومات الاتصال"
    },
    admin: { 
      title: "لوحة التحكم", 
      login: "تسجيل الدخول", 
      password: "أدخل كلمة المرور", 
      addCar: "إضافة سيارة", 
      delete: "حذف", 
      logout: "خروج", 
      wrongPassword: "كلمة المرور خاطئة!", 
      uploadImages: "رفع صور", 
      or: "أو", 
      url: "أدخل الرابط",
      imagesCount: "صور",
      addImage: "إضافة صورة"
    },
    categories: { economy: "اقتصادية", business: "أعمال", premium: "فاخرة", suv: "دفع رباعي" },
    transmission: { manual: "يدوي", automatic: "أوتوماتيك" },
    footer: {
      copyright: "© 2024 كاسبيان رينت. جميع الحقوق محفوظة.",
      address: "باكو، أذربيجان",
      followUs: "تابعنا"
    }
  }
};

// ==================== DEMO CARS with Multiple Images ====================
const demoCars: Car[] = [
  { 
    id: 1, 
    name: "BMW 7 Series", 
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800"
    ], 
    price: 120, 
    year: 2023, 
    fuel: "Benzin", 
    category: "premium", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Lüks sedan, premium təcrübə" 
  },
  { 
    id: 2, 
    name: "Mercedes-Benz E-Class", 
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    ], 
    price: 110, 
    year: 2023, 
    fuel: "Benzin", 
    category: "business", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Biznes klass sedan" 
  },
  { 
    id: 3, 
    name: "Audi A6", 
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800"
    ], 
    price: 100, 
    year: 2023, 
    fuel: "Dizel", 
    category: "business", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Texnoloji biznes avtomobili" 
  },
  { 
    id: 4, 
    name: "Range Rover Sport", 
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800"
    ], 
    price: 150, 
    year: 2023, 
    fuel: "Dizel", 
    category: "suv", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Prestijli SUV" 
  },
  { 
    id: 5, 
    name: "Toyota Camry", 
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    ], 
    price: 70, 
    year: 2023, 
    fuel: "Hibrid", 
    category: "economy", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Etibarlı və sərfəli" 
  },
  { 
    id: 6, 
    name: "Porsche Panamera", 
    images: [
      "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    ], 
    price: 180, 
    year: 2022, 
    fuel: "Benzin", 
    category: "premium", 
    transmission: "Avtomat", 
    seats: 4, 
    description: "Sport sedan, yüksək performans" 
  },
  { 
    id: 7, 
    name: "Hyundai Elantra", 
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    ], 
    price: 50, 
    year: 2022, 
    fuel: "Benzin", 
    category: "economy", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Ekonom klass sedan" 
  },
  { 
    id: 8, 
    name: "BMW X5", 
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800"
    ], 
    price: 140, 
    year: 2023, 
    fuel: "Dizel", 
    category: "suv", 
    transmission: "Avtomat", 
    seats: 5, 
    description: "Premium SUV, geniş salon" 
  }
];

const ADMIN_PASSWORD = "Nihad123";
const PHONE_NUMBER = "994504619303";

// ==================== CUSTOM HOOK for Responsive Grid ====================
function useResponsiveGrid() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(2); // Mobile: 2 columns
      } else if (width < 1024) {
        setColumns(3); // Tablet: 3 columns
      } else if (width < 1440) {
        setColumns(4); // Desktop: 4 columns
      } else {
        setColumns(5); // Large desktop: 5 columns
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return columns;
}
export default function CaspianRent() {
  // ==================== STATE ====================
  const [lang, setLang] = useState<Language>("az");
  const [page, setPage] = useState<Page>("home");
  const [cars, setCars] = useState<Car[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [loaded, setLoaded] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Responsive grid columns
  const gridColumns = useResponsiveGrid();

  // Advanced filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [yearFrom, setYearFrom] = useState<number>(2015);
  const [yearTo, setYearTo] = useState<number>(2024);
  const [fuelFilter, setFuelFilter] = useState<FuelType>("all");
  const [transmissionFilter, setTransmissionFilter] = useState<TransmissionType>("all");
  const [showFilters, setShowFilters] = useState(false);

  // New car form with multiple images
  const [newCar, setNewCar] = useState<Partial<Car>>({
    name: "", 
    price: 0, 
    images: [], 
    year: 2023, 
    fuel: "Benzin", 
    category: "economy", 
    transmission: "Avtomat", 
    seats: 5, 
    description: ""
  });
  const [newCarImages, setNewCarImages] = useState<string[]>([]);
  const [imageInputType, setImageInputType] = useState<"url" | "file">("url");
  const [tempImageUrl, setTempImageUrl] = useState("");

  // Customer satisfaction stats
  const [satisfactionStats] = useState({
    rating: 4.9,
    totalReviews: 1200,
    satisfactionRate: 98,
    yearsExperience: 8
  });

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = translations[lang];

  // ==================== EFFECTS ====================
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("caspian_cars");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Migrate old data format (single image to multiple images)
          const migrated = parsed.map((car: any) => ({
            ...car,
            images: car.images || [car.image || "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"]
          }));
          setCars(migrated);
        } catch {
          setCars(demoCars);
        }
      } else {
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

  // Reset image index when selecting different car
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCar]);

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
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setNewCarImages(prev => [...prev, result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const addImageUrl = () => {
    if (tempImageUrl.trim()) {
      setNewCarImages(prev => [...prev, tempImageUrl.trim()]);
      setTempImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    setNewCarImages(prev => prev.filter((_, i) => i !== index));
  };

  const addCar = () => {
    if (!newCar.name || !newCar.price || newCarImages.length === 0) {
      alert(lang === "az" ? "Zəhmət olmasa bütün məlumatları daxil edin və ən azı 1 şəkil əlavə edin" : 
           lang === "en" ? "Please fill all information and add at least 1 image" :
           lang === "ru" ? "Пожалуйста, заполните всю информацию и добавьте минимум 1 фото" :
           "يرجى ملء جميع المعلومات وإضافة صورة واحدة على الأقل");
      return;
    }

    const car: Car = {
      id: Date.now(),
      name: newCar.name,
      price: Number(newCar.price),
      images: newCarImages,
      year: Number(newCar.year) || 2023,
      fuel: (newCar.fuel as any) || "Benzin",
      category: (newCar.category as any) || "economy",
      transmission: (newCar.transmission as any) || "Avtomat",
      seats: Number(newCar.seats) || 5,
      description: newCar.description || ""
    };

    saveCars([...cars, car]);
    
    // Reset form
    setNewCar({ 
      name: "", 
      price: 0, 
      images: [], 
      year: 2023, 
      fuel: "Benzin", 
      category: "economy", 
      transmission: "Avtomat", 
      seats: 5, 
      description: "" 
    });
    setNewCarImages([]);
    setImageInputType("url");
    setTempImageUrl("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const deleteCar = (id: number) => {
    const confirmMsg = lang === "az" ? "Silmək istəyirsən?" : 
                      lang === "en" ? "Delete?" : 
                      lang === "ru" ? "Удалить?" : 
                      "حذف؟";
    if (confirm(confirmMsg)) {
      saveCars(cars.filter(c => c.id !== id));
      if (selectedCar?.id === id) {
        setSelectedCar(null);
      }
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

  const nextImage = () => {
    if (selectedCar) {
      setCurrentImageIndex((prev) => 
        prev === selectedCar.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCar) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCar.images.length - 1 : prev - 1
      );
    }
  };

  // ==================== STYLE FUNCTIONS ====================
  const getNavBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    backgroundColor: active ? "#c9a962" : "transparent",
    color: active ? "#0a0a0a" : "#a0a0a0",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.3s ease",
    fontSize: 14,
    letterSpacing: "0.5px"
  });

  const getFilterBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "8px 20px",
    borderRadius: 20,
    border: "1px solid " + (active ? "#c9a962" : "rgba(201, 169, 98, 0.3)"),
    backgroundColor: active ? "#c9a962" : "transparent",
    color: active ? "#0a0a0a" : "#c9a962",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.3s ease"
  });

  const getLangBtnStyle = (l: Language): React.CSSProperties => ({
    padding: "6px 12px",
    borderRadius: 4,
    border: "none",
    backgroundColor: lang === l ? "#c9a962" : "rgba(255,255,255,0.05)",
    color: lang === l ? "#0a0a0a" : "#a0a0a0",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: "bold",
    transition: "all 0.3s ease"
  });

  // ==================== STYLES ====================
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: lang === "ar" ? "'Segoe UI', 'Arial', sans-serif" : "'Inter', 'Segoe UI', system-ui, sans-serif",
      color: "#ffffff",
      position: "relative",
      overflow: "hidden",
      direction: lang === "ar" ? "rtl" : "ltr"
    },
    bgPattern: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      background: `
        radial-gradient(ellipse at 20% 20%, rgba(201, 169, 98, 0.03) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(201, 169, 98, 0.03) 0%, transparent 50%),
        linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)
      `,
      pointerEvents: "none"
    },
    header: {
      position: "relative",
      zIndex: 100,
      backgroundColor: "rgba(10, 10, 10, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(201, 169, 98, 0.1)",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20,
      positionSticky: "top",
      top: 0
    },
    logo: {
      fontSize: 24,
      fontWeight: 700,
      color: "#c9a962",
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      letterSpacing: "1px"
    },
    logoSubtitle: {
      fontSize: 11,
      color: "#666",
      fontWeight: 400,
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginTop: 2
    },
    nav: { 
      display: "flex", 
      gap: 8, 
      flexWrap: "wrap", 
      alignItems: "center" 
    },
    langSwitcher: {
      display: "flex",
      gap: 5,
      marginLeft: lang === "ar" ? 0 : 20,
      marginRight: lang === "ar" ? 20 : 0,
      padding: "4px",
      backgroundColor: "rgba(255,255,255,0.03)",
      borderRadius: 6
    },
    main: {
      position: "relative",
      zIndex: 10,
      padding: "40px 20px",
      maxWidth: 1600,
      margin: "0 auto"
    },
    hero: {
      textAlign: "center",
      padding: "100px 20px 80px",
      maxWidth: 900,
      margin: "0 auto",
      position: "relative",
      zIndex: 2
    },
    heroTitle: {
      fontSize: "clamp(32px, 5vw, 56px)",
      fontWeight: 300,
      marginBottom: 20,
      color: "#ffffff",
      letterSpacing: "2px",
      lineHeight: 1.2
    },
    heroTitleAccent: {
      color: "#c9a962",
      fontWeight: 500
    },
    heroSubtitle: {
      fontSize: 18,
      color: "#888",
      marginBottom: 40,
      fontWeight: 300,
      letterSpacing: "1px"
    },
    ctaBtn: {
      padding: "16px 40px",
      fontSize: 14,
      fontWeight: 600,
      backgroundColor: "#c9a962",
      color: "#0a0a0a",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      letterSpacing: "2px",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 20px rgba(201, 169, 98, 0.3)"
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 30,
      marginTop: 80,
      maxWidth: 800,
      margin: "80px auto 0",
      position: "relative",
      zIndex: 2
    },
    statBox: {
      textAlign: "center",
      padding: "20px",
      border: "1px solid rgba(201, 169, 98, 0.1)",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.02)"
    },
    statNumber: {
      fontSize: "clamp(28px, 3vw, 40px)",
      fontWeight: 300,
      color: "#c9a962",
      marginBottom: 8
    },
    statLabel: {
      fontSize: 12,
      color: "#666",
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
  };  // ==================== CAR GRID STYLES ====================
  const carGridStyles: { [key: string]: React.CSSProperties } = {
    sectionTitle: {
      fontSize: "clamp(24px, 3vw, 32px)",
      fontWeight: 300,
      marginBottom: 40,
      textAlign: "center",
      color: "#ffffff",
      letterSpacing: "3px",
      textTransform: "uppercase"
    },
    sectionTitleAccent: {
      color: "#c9a962",
      fontWeight: 500
    },
    searchBar: {
      width: "100%",
      maxWidth: 500,
      margin: "0 auto 30px",
      position: "relative"
    },
    searchInput: {
      width: "100%",
      padding: "15px 20px 15px 50px",
      borderRadius: 4,
      border: "1px solid rgba(201, 169, 98, 0.2)",
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "#ffffff",
      fontSize: 14,
      outline: "none",
      transition: "all 0.3s ease"
    },
    filterBar: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginBottom: 30,
      flexWrap: "wrap"
    },
    advancedFilters: {
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 30,
      borderRadius: 8,
      marginBottom: 30,
      border: "1px solid rgba(201, 169, 98, 0.1)",
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
      color: "#888",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    filterSelect: {
      width: "100%",
      padding: "12px",
      borderRadius: 4,
      border: "1px solid rgba(201, 169, 98, 0.2)",
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "#ffffff",
      fontSize: 14,
      outline: "none",
      cursor: "pointer"
    },
    rangeInput: {
      width: "100%",
      marginTop: 10,
      accentColor: "#c9a962"
    },
    resultsCount: {
      textAlign: "center",
      color: "#666",
      marginBottom: 30,
      fontSize: 14,
      letterSpacing: "1px"
    },
    // RESPONSIVE GRID - Dynamic columns based on screen size
    carsGrid: {
      display: "grid",
      gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
      gap: 20,
      transition: "all 0.3s ease"
    },
    carCard: {
      backgroundColor: "rgba(255,255,255,0.02)",
      borderRadius: 8,
      overflow: "hidden",
      border: "1px solid rgba(201, 169, 98, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative"
    },
    carImageContainer: {
      width: "100%",
      height: 180,
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#111"
    },
    carImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease"
    },
    imageCounter: {
      position: "absolute",
      bottom: 10,
      right: 10,
      backgroundColor: "rgba(0,0,0,0.7)",
      color: "#c9a962",
      padding: "4px 8px",
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 600
    },
    carInfo: { 
      padding: "20px" 
    },
    carName: { 
      fontSize: 16, 
      fontWeight: 500, 
      marginBottom: 8,
      color: "#ffffff",
      letterSpacing: "0.5px"
    },
    carMeta: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      fontSize: 12,
      color: "#666",
      flexWrap: "wrap"
    },
    badge: {
      backgroundColor: "rgba(201, 169, 98, 0.1)",
      color: "#c9a962",
      padding: "4px 10px",
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    carFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 15,
      paddingTop: 15,
      borderTop: "1px solid rgba(255,255,255,0.05)"
    },
    price: { 
      fontSize: 20, 
      fontWeight: 600, 
      color: "#c9a962" 
    },
    priceUnit: {
      fontSize: 12,
      color: "#666",
      fontWeight: 400
    },
    whatsappBtn: {
      padding: "10px 20px",
      backgroundColor: "transparent",
      color: "#c9a962",
      border: "1px solid #c9a962",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
      textTransform: "uppercase"
    },
    toggleFiltersBtn: {
      padding: "12px 24px",
      backgroundColor: "transparent",
      color: "#c9a962",
      border: "1px solid rgba(201, 169, 98, 0.3)",
      borderRadius: 4,
      cursor: "pointer",
      marginBottom: 20,
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "1px",
      textTransform: "uppercase",
      transition: "all 0.3s ease"
    }
  };

  // ==================== CAR DETAIL MODAL STYLES ====================
  const modalStyles: { [key: string]: React.CSSProperties } = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.9)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    },
    modal: {
      backgroundColor: "#111",
      borderRadius: 8,
      maxWidth: 900,
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      border: "1px solid rgba(201, 169, 98, 0.2)",
      position: "relative"
    },
    closeBtn: {
      position: "absolute",
      top: 20,
      right: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "#fff",
      border: "none",
      width: 40,
      height: 40,
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: 20,
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    galleryContainer: {
      position: "relative",
      width: "100%",
      height: 400,
      backgroundColor: "#0a0a0a",
      overflow: "hidden"
    },
    galleryImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    galleryNav: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#c9a962",
      border: "none",
      width: 50,
      height: 50,
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease"
    },
    galleryDots: {
      position: "absolute",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 8
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    modalContent: {
      padding: 30
    },
    modalTitle: {
      fontSize: 28,
      fontWeight: 300,
      marginBottom: 10,
      color: "#ffffff"
    },
    modalPrice: {
      fontSize: 32,
      color: "#c9a962",
      fontWeight: 600,
      marginBottom: 20
    },
    specsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: 15,
      marginBottom: 25
    },
    specBox: {
      backgroundColor: "rgba(255,255,255,0.03)",
      padding: 15,
      borderRadius: 4,
      textAlign: "center",
      border: "1px solid rgba(201, 169, 98, 0.1)"
    },
    specLabel: {
      fontSize: 11,
      color: "#666",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: 5
    },
    specValue: {
      fontSize: 16,
      color: "#ffffff",
      fontWeight: 500
    },
    modalDescription: {
      color: "#888",
      lineHeight: 1.8,
      marginBottom: 25,
      fontSize: 15
    },
    modalCta: {
      display: "flex",
      gap: 15,
      flexWrap: "wrap"
    },
    modalWhatsappBtn: {
      flex: 1,
      minWidth: 200,
      padding: "16px 30px",
      backgroundColor: "#c9a962",
      color: "#0a0a0a",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: "1px",
      textTransform: "uppercase",
      transition: "all 0.3s ease"
    }
  };

  if (!loaded) return (
    <div style={{
      ...styles.container, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      height: "100vh"
    }}>
      <div style={{textAlign: "center"}}>
        <div style={{fontSize: 32, color: "#c9a962", marginBottom: 20}}>Caspian Rent</div>
        <div style={{color: "#666", letterSpacing: "2px"}}>Yüklənir...</div>
      </div>
    </div>
  );  // ==================== SERVICES STYLES ====================
  const servicesStyles: { [key: string]: React.CSSProperties } = {
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 25
    },
    serviceCard: {
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 35,
      borderRadius: 8,
      border: "1px solid rgba(201, 169, 98, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden"
    },
    serviceCardHighlight: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: "#c9a962",
      opacity: 0,
      transition: "opacity 0.3s ease"
    },
    serviceIcon: {
      fontSize: 40,
      marginBottom: 20,
      display: "inline-block",
      filter: "grayscale(100%)",
      opacity: 0.7,
      transition: "all 0.3s ease"
    },
    serviceTitle: {
      fontSize: 18,
      color: "#ffffff",
      marginBottom: 12,
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    servicePrice: {
      fontSize: 14,
      color: "#c9a962",
      marginBottom: 15,
      fontWeight: 600
    },
    serviceDesc: {
      color: "#666",
      marginBottom: 20,
      lineHeight: 1.7,
      fontSize: 14
    },
    serviceFeatures: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    serviceFeature: {
      padding: "8px 0",
      borderBottom: "1px solid rgba(255,255,255,0.03)",
      color: "#888",
      fontSize: 13,
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    featureCheck: {
      color: "#c9a962",
      fontSize: 14
    },
    serviceCta: {
      marginTop: 25,
      padding: "12px 25px",
      backgroundColor: "transparent",
      color: "#c9a962",
      border: "1px solid rgba(201, 169, 98, 0.3)",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "1px",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      width: "100%"
    }
  };

  // ==================== RENTAL TERMS STYLES ====================
  const rentalTermsStyles: { [key: string]: React.CSSProperties } = {
    termsContainer: {
      maxWidth: 1000,
      margin: "0 auto"
    },
    termsHeader: {
      textAlign: "center",
      marginBottom: 50
    },
    termsSubtitle: {
      color: "#666",
      fontSize: 16,
      marginTop: 10,
      letterSpacing: "1px"
    },
    termsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 25
    },
    termCard: {
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 30,
      borderRadius: 8,
      border: "1px solid rgba(201, 169, 98, 0.1)",
      transition: "all 0.3s ease"
    },
    termIcon: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      backgroundColor: "rgba(201, 169, 98, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      marginBottom: 20,
      color: "#c9a962"
    },
    termTitle: {
      fontSize: 16,
      color: "#ffffff",
      marginBottom: 15,
      fontWeight: 500,
      letterSpacing: "0.5px"
    },
    termContent: {
      color: "#888",
      lineHeight: 1.8,
      fontSize: 14
    },
    termList: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    termListItem: {
      padding: "8px 0",
      color: "#888",
      fontSize: 14,
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      lineHeight: 1.6
    },
    termBullet: {
      color: "#c9a962",
      fontSize: 16,
      lineHeight: 1
    },
    termsCta: {
      marginTop: 50,
      textAlign: "center",
      padding: 40,
      backgroundColor: "rgba(201, 169, 98, 0.05)",
      borderRadius: 8,
      border: "1px solid rgba(201, 169, 98, 0.2)"
    },
    termsCtaTitle: {
      fontSize: 24,
      color: "#ffffff",
      marginBottom: 15,
      fontWeight: 300
    },
    termsCtaText: {
      color: "#666",
      marginBottom: 25,
      fontSize: 15
    }
  };

  // ==================== CUSTOMER SATISFACTION STYLES ====================
  const satisfactionStyles: { [key: string]: React.CSSProperties } = {
    satisfactionSection: {
      marginTop: 80,
      padding: "60px 40px",
      backgroundColor: "rgba(255,255,255,0.02)",
      borderRadius: 8,
      border: "1px solid rgba(201, 169, 98, 0.1)",
      textAlign: "center"
    },
    satisfactionTitle: {
      fontSize: "clamp(20px, 3vw, 28px)",
      fontWeight: 300,
      marginBottom: 40,
      color: "#ffffff",
      letterSpacing: "2px",
      textTransform: "uppercase"
    },
    satisfactionGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: 30,
      maxWidth: 800,
      margin: "0 auto"
    },
    satisfactionItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 15
    },
    satisfactionIcon: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      border: "2px solid rgba(201, 169, 98, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      color: "#c9a962"
    },
    satisfactionValue: {
      fontSize: "clamp(24px, 3vw, 32px)",
      fontWeight: 600,
      color: "#c9a962"
    },
    satisfactionLabel: {
      fontSize: 12,
      color: "#666",
      textTransform: "uppercase",
      letterSpacing: "1px",
      maxWidth: 120
    },
    ratingStars: {
      display: "flex",
      gap: 3,
      marginTop: 5
    },
    star: {
      color: "#c9a962",
      fontSize: 16
    }
  };

  // ==================== CONTACT STYLES ====================
  const contactStyles: { [key: string]: React.CSSProperties } = {
    contactContainer: {
      maxWidth: 1000,
      margin: "0 auto"
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 25
    },
    contactCard: {
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 30,
      borderRadius: 8,
      textAlign: "center",
      border: "1px solid rgba(201, 169, 98, 0.1)",
      transition: "all 0.3s ease"
    },
    contactIcon: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      backgroundColor: "rgba(201, 169, 98, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      margin: "0 auto 20px",
      color: "#c9a962"
    },
    contactTitle: {
      fontSize: 14,
      color: "#666",
      marginBottom: 10,
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    contactValue: {
      fontSize: 18,
      color: "#ffffff",
      fontWeight: 500
    },
    contactValueHighlight: {
      fontSize: 24,
      color: "#c9a962",
      fontWeight: 600
    },
    mapContainer: {
      marginTop: 40,
      backgroundColor: "rgba(255,255,255,0.02)",
      borderRadius: 8,
      padding: 30,
      border: "1px solid rgba(201, 169, 98, 0.1)"
    },
    mapPlaceholder: {
      height: 350,
      backgroundColor: "#0a0a0a",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#666",
      fontSize: 14,
      letterSpacing: "1px",
      border: "1px dashed rgba(201, 169, 98, 0.2)"
    }
  };

  // ==================== FOOTER STYLES ====================
  const footerStyles: { [key: string]: React.CSSProperties } = {
    footer: {
      marginTop: 100,
      padding: "50px 30px",
      backgroundColor: "#050505",
      borderTop: "1px solid rgba(201, 169, 98, 0.1)",
      position: "relative",
      zIndex: 10
    },
    footerContent: {
      maxWidth: 1400,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 40,
      marginBottom: 40
    },
    footerSection: {
      display: "flex",
      flexDirection: "column",
      gap: 15
    },
    footerLogo: {
      fontSize: 20,
      color: "#c9a962",
      fontWeight: 600,
      letterSpacing: "1px"
    },
    footerText: {
      color: "#666",
      fontSize: 14,
      lineHeight: 1.7
    },
    footerTitle: {
      fontSize: 12,
      color: "#888",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginBottom: 10
    },
    footerLinks: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    },
    footerLink: {
      color: "#666",
      textDecoration: "none",
      fontSize: 14,
      transition: "color 0.3s ease",
      cursor: "pointer"
    },
    footerBottom: {
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingTop: 30,
      textAlign: "center",
      color: "#444",
      fontSize: 12,
      letterSpacing: "1px"
    },
    socialLinks: {
      display: "flex",
      gap: 15,
      marginTop: 15
    },
    socialLink: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid rgba(201, 169, 98, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#c9a962",
      fontSize: 16,
      transition: "all 0.3s ease",
      cursor: "pointer"
    }
  };  // ==================== ADMIN PANEL STYLES ====================
  const adminStyles: { [key: string]: React.CSSProperties } = {
    loginBox: {
      maxWidth: 400,
      margin: "100px auto",
      textAlign: "center",
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 50,
      borderRadius: 8,
      border: "1px solid rgba(201, 169, 98, 0.2)"
    },
    loginTitle: {
      fontSize: 24,
      color: "#c9a962",
      marginBottom: 30,
      fontWeight: 300,
      letterSpacing: "2px",
      textTransform: "uppercase"
    },
    adminPanel: {
      backgroundColor: "rgba(255,255,255,0.02)",
      padding: 40,
      borderRadius: 8,
      maxWidth: 1000,
      margin: "0 auto",
      border: "1px solid rgba(201, 169, 98, 0.1)"
    },
    adminHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 40,
      paddingBottom: 20,
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    },
    sectionHeader: {
      color: "#c9a962",
      marginBottom: 25,
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    input: {
      width: "100%",
      padding: "14px",
      borderRadius: 4,
      border: "1px solid rgba(201, 169, 98, 0.2)",
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "#ffffff",
      marginBottom: 15,
      fontSize: 14,
      outline: "none",
      transition: "all 0.3s ease"
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 15
    },
    addBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#c9a962",
      color: "#0a0a0a",
      border: "none",
      borderRadius: 4,
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 14,
      letterSpacing: "1px",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      marginTop: 10
    },
    logoutBtn: {
      padding: "10px 20px",
      backgroundColor: "transparent",
      color: "#666",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 4,
      cursor: "pointer",
      fontSize: 12,
      letterSpacing: "1px",
      transition: "all 0.3s ease"
    },
    deleteBtn: {
      padding: "8px 16px",
      backgroundColor: "transparent",
      color: "#ef4444",
      border: "1px solid rgba(239, 68, 68, 0.3)",
      borderRadius: 4,
      cursor: "pointer",
      fontSize: 12,
      transition: "all 0.3s ease"
    },
    // Multi Image Upload Styles
    imageUploadContainer: {
      marginBottom: 25
    },
    imageInputToggle: {
      display: "flex",
      gap: 10,
      marginBottom: 20
    },
    toggleBtn: {
      flex: 1,
      padding: "12px",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      fontSize: 13,
      letterSpacing: "0.5px",
      transition: "all 0.3s ease"
    },
    imageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: 15,
      marginBottom: 20
    },
    imagePreviewBox: {
      position: "relative",
      aspectRatio: "16/10",
      borderRadius: 4,
      overflow: "hidden",
      border: "1px solid rgba(201, 169, 98, 0.2)",
      backgroundColor: "rgba(255,255,255,0.03)"
    },
    imagePreview: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    removeImageBtn: {
      position: "absolute",
      top: 5,
      right: 5,
      width: 24,
      height: 24,
      borderRadius: "50%",
      backgroundColor: "rgba(239, 68, 68, 0.9)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    addImageBox: {
      aspectRatio: "16/10",
      border: "2px dashed rgba(201, 169, 98, 0.3)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      color: "#666"
    },
    addImageIcon: {
      fontSize: 24,
      marginBottom: 8,
      color: "#c9a962"
    },
    urlInputRow: {
      display: "flex",
      gap: 10,
      marginBottom: 15
    },
    urlAddBtn: {
      padding: "12px 20px",
      backgroundColor: "rgba(201, 169, 98, 0.1)",
      color: "#c9a962",
      border: "1px solid rgba(201, 169, 98, 0.3)",
      borderRadius: 4,
      cursor: "pointer",
      fontSize: 13,
      whiteSpace: "nowrap"
    },
    // Car List Styles
    carList: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    },
    carListItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 15,
      backgroundColor: "rgba(255,255,255,0.02)",
      borderRadius: 4,
      border: "1px solid rgba(255,255,255,0.03)",
      transition: "all 0.3s ease"
    },
    carListInfo: {
      display: "flex",
      alignItems: "center",
      gap: 15
    },
    carListThumb: {
      width: 70,
      height: 50,
      objectFit: "cover",
      borderRadius: 4,
      border: "1px solid rgba(201, 169, 98, 0.1)"
    },
    carListDetails: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    },
    carListName: {
      fontWeight: 500,
      color: "#ffffff",
      fontSize: 15
    },
    carListMeta: {
      color: "#666",
      fontSize: 12
    }
  };

  // ==================== RENDER ====================
  return (
    <div style={styles.container}>
      {/* Background Pattern */}
      <div style={styles.bgPattern} />

      {/* HEADER */}
      <header style={styles.header}>
        <div style={{display: "flex", flexDirection: "column"}} onClick={() => setPage("home")}>
          <div style={styles.logo}>Caspian Rent</div>
          <div style={styles.logoSubtitle}>{t.brandSubtitle}</div>
        </div>
        
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
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                style={getLangBtnStyle(l)}
              >
                {l === "ar" ? "عربي" : l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main style={styles.main}>
        {/* ==================== HOME PAGE ==================== */}
        {page === "home" && (
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>
              <span style={styles.heroTitleAccent}>{t.home.title.split(" ")[0]}</span>{" "}
              {t.home.title.split(" ").slice(1).join(" ")}
            </h1>
            <p style={styles.heroSubtitle}>{t.home.subtitle}</p>
            <button 
              style={styles.ctaBtn} 
              onClick={() => setPage("cars")}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d4b76a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a962";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.home.cta}
            </button>
            
            {/* Stats */}
            <div style={styles.statsContainer}>
              {[
                { n: cars.length + "+", l: t.home.stats.cars },
                { n: satisfactionStats.totalReviews + "+", l: t.home.stats.clients },
                { n: satisfactionStats.satisfactionRate + "%", l: t.home.stats.satisfaction },
                { n: satisfactionStats.yearsExperience + "+", l: t.home.stats.experience }
              ].map((s, i) => (
                <div key={i} style={styles.statBox}>
                  <div style={styles.statNumber}>{s.n}</div>
                  <div style={styles.statLabel}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Customer Satisfaction Section */}
            <div style={satisfactionStyles.satisfactionSection}>
              <h2 style={satisfactionStyles.satisfactionTitle}>Müştəri Məmnuniyyəti</h2>
              <div style={satisfactionStyles.satisfactionGrid}>
                <div style={satisfactionStyles.satisfactionItem}>
                  <div style={satisfactionStyles.satisfactionIcon}>★</div>
                  <div style={satisfactionStyles.satisfactionValue}>{satisfactionStats.rating}/5</div>
                  <div style={satisfactionStyles.ratingStars}>
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} style={{
                        ...satisfactionStyles.star,
                        opacity: star <= Math.floor(satisfactionStats.rating) ? 1 : 0.3
                      }}>★</span>
                    ))}
                  </div>
                  <div style={satisfactionStyles.satisfactionLabel}>Reytinq</div>
                </div>
                
                <div style={satisfactionStyles.satisfactionItem}>
                  <div style={satisfactionStyles.satisfactionIcon}>👥</div>
                  <div style={satisfactionStyles.satisfactionValue}>{satisfactionStats.totalReviews}+</div>
                  <div style={satisfactionStyles.satisfactionLabel}>Məmnun Müştəri</div>
                </div>
                
                <div style={satisfactionStyles.satisfactionItem}>
                  <div style={satisfactionStyles.satisfactionIcon}>🔄</div>
                  <div style={satisfactionStyles.satisfactionValue}>%{satisfactionStats.satisfactionRate}</div>
                  <div style={satisfactionStyles.satisfactionLabel}>Təkrar Sifariş</div>
                </div>
                
                <div style={satisfactionStyles.satisfactionItem}>
                  <div style={satisfactionStyles.satisfactionIcon}>🏆</div>
                  <div style={satisfactionStyles.satisfactionValue}>{satisfactionStats.yearsExperience}</div>
                  <div style={satisfactionStyles.satisfactionLabel}>İllik Təcrübə</div>
                </div>
              </div>
            </div>

            {/* Admin Link */}
            <div style={{marginTop: 60, opacity: 0.3}}>
              <button 
                onClick={() => setPage("admin")}
                style={{
                  background: "transparent", 
                  border: "1px solid rgba(255,255,255,0.2)", 
                  color: "#666", 
                  padding: "8px 16px", 
                  borderRadius: 4, 
                  cursor: "pointer", 
                  fontSize: 11,
                  letterSpacing: "1px"
                }}
              >
                Admin
              </button>
            </div>
          </div>
        )}

        {/* ==================== CARS PAGE ==================== */}
        {page === "cars" && (
          <div>
            <h2 style={carGridStyles.sectionTitle}>
              <span style={carGridStyles.sectionTitleAccent}>{t.cars.title.split(" ")[0]}</span>{" "}
              {t.cars.title.split(" ").slice(1).join(" ")}
            </h2>
            
            {/* Search */}
            <div style={carGridStyles.searchBar}>
              <input
                type="text"
                placeholder={t.cars.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={carGridStyles.searchInput}
              />
              <span style={{
                position: "absolute", 
                [lang === "ar" ? "right" : "left"]: 18, 
                top: "50%", 
                transform: "translateY(-50%)", 
                fontSize: 18,
                color: "#666"
              }}>🔍</span>
            </div>

            {/* Toggle Filters */}
            <div style={{textAlign: "center"}}>
              <button 
                style={carGridStyles.toggleFiltersBtn}
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "✕ " : "⚙️ "}{t.cars.filters}
              </button>
            </div>

            {/* Advanced Filters */}
            <div style={carGridStyles.advancedFilters}>
              <div style={carGridStyles.filterGrid}>
                <div>
                  <label style={carGridStyles.filterLabel}>{t.cars.filterAll}</label>
                  <select 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)} 
                    style={carGridStyles.filterSelect}
                  >
                    <option value="all">{t.cars.filterAll}</option>
                    {(["economy", "business", "premium", "suv"] as const).map((c) => (
                      <option key={c} value={c}>{t.categories[c]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={carGridStyles.filterLabel}>{t.cars.fuel}</label>
                  <select 
                    value={fuelFilter} 
                    onChange={(e) => setFuelFilter(e.target.value as FuelType)} 
                    style={carGridStyles.filterSelect}
                  >
                    <option value="all">{t.cars.filterAll}</option>
                    <option value="Benzin">{lang === "az" ? "Benzin" : lang === "ar" ? "بنزين" : "Бензин"}</option>
                    <option value="Dizel">{lang === "az" ? "Dizel" : lang === "ar" ? "ديزل" : "Дизель"}</option>
                    <option value="Hibrid">{lang === "az" ? "Hibrid" : lang === "ar" ? "هجين" : "Гибрид"}</option>
                    <option value="Elektrik">{lang === "az" ? "Elektrik" : lang === "ar" ? "كهربائي" : "Электро"}</option>
                  </select>
                </div>

                <div>
                  <label style={carGridStyles.filterLabel}>{t.cars.transmission}</label>
                  <select 
                    value={transmissionFilter} 
                    onChange={(e) => setTransmissionFilter(e.target.value as TransmissionType)} 
                    style={carGridStyles.filterSelect}
                  >
                    <option value="all">{t.cars.filterAll}</option>
                    <option value="Manual">{t.transmission.manual}</option>
                    <option value="Avtomat">{t.transmission.automatic}</option>
                  </select>
                </div>

                <div>
                  <label style={carGridStyles.filterLabel}>{t.cars.yearFrom}</label>
                  <input
                    type="number"
                    value={yearFrom}
                    onChange={(e) => setYearFrom(Number(e.target.value))}
                    style={carGridStyles.filterSelect}
                    min={2000}
                    max={2024}
                  />
                </div>

                <div>
                  <label style={carGridStyles.filterLabel}>{t.cars.yearTo}</label>
                  <input
                    type="number"
                    value={yearTo}
                    onChange={(e) => setYearTo(Number(e.target.value))}
                    style={carGridStyles.filterSelect}
                    min={2000}
                    max={2024}
                  />
                </div>

                <div>
                  <label style={carGridStyles.filterLabel}>
                    {t.cars.priceRange}: {priceRange[0]} - {priceRange[1]} ₼
                  </label>
                  <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      style={carGridStyles.rangeInput}
                    />
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      style={carGridStyles.rangeInput}
                    />
                  </div>
                </div>
              </div>

              <div style={{textAlign: "center"}}>
                <button 
                  onClick={clearFilters} 
                  style={{
                    ...adminStyles.deleteBtn,
                    backgroundColor: "rgba(100,100,100,0.1)",
                    color: "#888",
                    borderColor: "rgba(255,255,255,0.1)"
                  }}
                >
                  {t.cars.clearFilters}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div style={carGridStyles.resultsCount}>
              {filteredCars.length} {t.cars.results}
            </div>

            {/* Cars Grid - RESPONSIVE */}
            {filteredCars.length === 0 ? (
              <p style={{textAlign: "center", color: "#666", fontSize: 16, padding: 40}}>
                {t.cars.empty}
              </p>
            ) : (
              <div style={carGridStyles.carsGrid}>
                {filteredCars.map((car) => (
                  <div 
                    key={car.id} 
                    style={carGridStyles.carCard}
                    onClick={() => setSelectedCar(car)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201, 169, 98, 0.3)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201, 169, 98, 0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = "scale(1)";
                    }}
                  >
                    <div style={carGridStyles.carImageContainer}>
                      <img 
                        src={car.images[0]} 
                        alt={car.name} 
                        style={carGridStyles.carImage}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
                        }}
                      />
                      <div style={carGridStyles.imageCounter}>
                        1/{car.images.length}
                      </div>
                    </div>
                    
                    <div style={carGridStyles.carInfo}>
                      <h3 style={carGridStyles.carName}>{car.name}</h3>
                      <div style={carGridStyles.carMeta}>
                        <span style={carGridStyles.badge}>{t.categories[car.category]}</span>
                        <span>{car.year} • {car.fuel}</span>
                        <span>🪑 {car.seats}</span>
                      </div>
                      <div style={carGridStyles.carFooter}>
                        <span style={carGridStyles.price}>
                          {car.price} <span style={carGridStyles.priceUnit}>{t.cars.price}</span>
                        </span>
                        <button 
                          style={carGridStyles.whatsappBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Salam, ${car.name} maraqlıdır. Qiymət: ${car.price}₼`)}`, '_blank');
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#c9a962";
                            e.currentTarget.style.color = "#0a0a0a";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#c9a962";
                          }}
                        >
                          {t.cars.order}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== CAR DETAIL MODAL ==================== */}
        {selectedCar && (
          <div 
            style={modalStyles.overlay}
            onClick={() => setSelectedCar(null)}
          >
            <div 
              style={modalStyles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                style={modalStyles.closeBtn}
                onClick={() => setSelectedCar(null)}
              >
                ×
              </button>

              {/* Image Gallery */}
              <div style={modalStyles.galleryContainer}>
                <img 
                  src={selectedCar.images[currentImageIndex]} 
                  alt={selectedCar.name}
                  style={modalStyles.galleryImage}
                />
                
                {selectedCar.images.length > 1 && (
                  <>
                    <button 
                      style={{...modalStyles.galleryNav, left: 20}}
                      onClick={prevImage}
                    >
                      ‹
                    </button>
                    <button 
                      style={{...modalStyles.galleryNav, right: 20}}
                      onClick={nextImage}
                    >
                      ›
                    </button>
                    <div style={modalStyles.galleryDots}>
                      {selectedCar.images.map((_, idx) => (
                        <button
                          key={idx}
                          style={{
                            ...modalStyles.dot,
                            backgroundColor: idx === currentImageIndex ? "#c9a962" : "rgba(255,255,255,0.3)"
                          }}
                          onClick={() => setCurrentImageIndex(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Modal Content */}
              <div style={modalStyles.modalContent}>
                <h2 style={modalStyles.modalTitle}>{selectedCar.name}</h2>
                <div style={modalStyles.modalPrice}>
                  {selectedCar.price} ₼<span style={{fontSize: 16, color: "#666"}}>/{t.cars.price.split('/')[1]}</span>
                </div>

                <div style={modalStyles.specsGrid}>
                  <div style={modalStyles.specBox}>
                    <div style={modalStyles.specLabel}>{t.cars.yearFrom}</div>
                    <div style={modalStyles.specValue}>{selectedCar.year}</div>
                  </div>
                  <div style={modalStyles.specBox}>
                    <div style={modalStyles.specLabel}>{t.cars.fuel}</div>
                    <div style={modalStyles.specValue}>{selectedCar.fuel}</div>
                  </div>
                  <div style={modalStyles.specBox}>
                    <div style={modalStyles.specLabel}>{t.cars.transmission}</div>
                    <div style={modalStyles.specValue}>
                      {selectedCar.transmission === "Avtomat" ? t.transmission.automatic : t.transmission.manual}
                    </div>
                  </div>
                  <div style={modalStyles.specBox}>
                    <div style={modalStyles.specLabel}>{t.cars.seats}</div>
                    <div style={modalStyles.specValue}>{selectedCar.seats}</div>
                  </div>
                  <div style={modalStyles.specBox}>
                    <div style={modalStyles.specLabel}>{t.cars.filterAll}</div>
                    <div style={modalStyles.specValue}>{t.categories[selectedCar.category]}</div>
                  </div>
                </div>

                {selectedCar.description && (
                  <p style={modalStyles.modalDescription}>{selectedCar.description}</p>
                )}

                <div style={modalStyles.modalCta}>
                  <a 
                    href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Salam, ${selectedCar.name} maraqlıdır. Qiymət: ${selectedCar.price}₼`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{flex: 1, minWidth: 200}}
                  >
                    <button style={modalStyles.modalWhatsappBtn}>
                      💬 {t.cars.order}
                    </button>
                  </a>
                  <button 
                    style={{
                      ...modalStyles.modalWhatsappBtn,
                      backgroundColor: "transparent",
                      color: "#c9a962",
                      border: "1px solid #c9a962"
                    }}
                    onClick={() => setSelectedCar(null)}
                  >
                    {lang === "az" ? "Bağla" : lang === "en" ? "Close" : lang === "ru" ? "Закрыть" : "إغلاق"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SERVICES PAGE ==================== */}
        {page === "services" && (
          <div>
            <h2 style={carGridStyles.sectionTitle}>
              <span style={carGridStyles.sectionTitleAccent}>{t.services.title.split(" ")[0]}</span>{" "}
              {t.services.title.split(" ").slice(1).join(" ")}
            </h2>
            
            <div style={servicesStyles.servicesGrid}>
              {[
                { key: "daily", icon: "🚗", color: "#c9a962" },
                { key: "weekly", icon: "📆", color: "#c9a962" },
                { key: "monthly", icon: "📅", color: "#c9a962" },
                { key: "airport", icon: "✈️", color: "#c9a962" },
                { key: "vip", icon: "🤵", color: "#c9a962" },
                { key: "corporate", icon: "🏢", color: "#c9a962" }
              ].map((service) => (
                <div 
                  key={service.key} 
                  style={servicesStyles.serviceCard}
                  onMouseEnter={(e) => {
                    const highlight = e.currentTarget.querySelector('[data-highlight]') as HTMLElement;
                    const icon = e.currentTarget.querySelector('[data-icon]') as HTMLElement;
                    if (highlight) highlight.style.opacity = "1";
                    if (icon) {
                      icon.style.filter = "grayscale(0%)";
                      icon.style.opacity = "1";
                    }
                    e.currentTarget.style.borderColor = "rgba(201, 169, 98, 0.3)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    const highlight = e.currentTarget.querySelector('[data-highlight]') as HTMLElement;
                    const icon = e.currentTarget.querySelector('[data-icon]') as HTMLElement;
                    if (highlight) highlight.style.opacity = "0";
                    if (icon) {
                      icon.style.filter = "grayscale(100%)";
                      icon.style.opacity = "0.7";
                    }
                    e.currentTarget.style.borderColor = "rgba(201, 169, 98, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div data-highlight style={servicesStyles.serviceCardHighlight} />
                  <div data-icon style={servicesStyles.serviceIcon}>{service.icon}</div>
                  <div style={servicesStyles.servicePrice}>
                    {(t.services as any)[service.key].price}
                  </div>
                  <h3 style={servicesStyles.serviceTitle}>
                    {(t.services as any)[service.key].title}
                  </h3>
                  <p style={servicesStyles.serviceDesc}>
                    {(t.services as any)[service.key].desc}
                  </p>
                  <ul style={servicesStyles.serviceFeatures}>
                    {(t.services as any)[service.key].features.map((feature: string, idx: number) => (
                      <li key={idx} style={servicesStyles.serviceFeature}>
                        <span style={servicesStyles.featureCheck}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    style={servicesStyles.serviceCta}
                    onClick={() => setPage("contacts")}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c9a962";
                      e.currentTarget.style.color = "#0a0a0a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#c9a962";
                    }}
                  >
                    {lang === "az" ? "Ətraflı" : lang === "en" ? "Details" : lang === "ru" ? "Подробнее" : "التفاصيل"} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== RENTAL TERMS PAGE ==================== */}
        {page === "rental-terms" && (
          <div style={rentalTermsStyles.termsContainer}>
            <div style={rentalTermsStyles.termsHeader}>
              <h2 style={carGridStyles.sectionTitle}>
                <span style={carGridStyles.sectionTitleAccent}>{t.rentalTerms.title.split(" ")[0]}</span>{" "}
                {t.rentalTerms.title.split(" ").slice(1).join(" ")}
              </h2>
              <p style={rentalTermsStyles.termsSubtitle}>{t.rentalTerms.subtitle}</p>
            </div>

            <div style={rentalTermsStyles.termsGrid}>
              {/* Age & Experience */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>👤</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.age.title}</h3>
                <p style={rentalTermsStyles.termContent}>{t.rentalTerms.age.content}</p>
              </div>

              {/* Documents */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>📄</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.documents.title}</h3>
                <ul style={rentalTermsStyles.termList}>
                  {t.rentalTerms.documents.items.map((item: string, idx: number) => (
                    <li key={idx} style={rentalTermsStyles.termListItem}>
                      <span style={rentalTermsStyles.termBullet}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insurance */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>🛡️</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.insurance.title}</h3>
                <p style={rentalTermsStyles.termContent}>{t.rentalTerms.insurance.content}</p>
              </div>

              {/* Payment */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>💳</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.payment.title}</h3>
                <p style={rentalTermsStyles.termContent}>{t.rentalTerms.payment.content}</p>
              </div>

              {/* Mileage */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>📏</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.mileage.title}</h3>
                <p style={rentalTermsStyles.termContent}>{t.rentalTerms.mileage.content}</p>
              </div>

              {/* Fuel */}
              <div style={rentalTermsStyles.termCard}>
                <div style={rentalTermsStyles.termIcon}>⛽</div>
                <h3 style={rentalTermsStyles.termTitle}>{t.rentalTerms.fuel.title}</h3>
                <p style={rentalTermsStyles.termContent}>{t.rentalTerms.fuel.content}</p>
              </div>
            </div>

            <div style={rentalTermsStyles.termsCta}>
              <h3 style={rentalTermsStyles.termsCtaTitle}>
                {lang === "az" ? "Hələ də suallarınız var?" : 
                 lang === "en" ? "Still have questions?" : 
                 lang === "ru" ? "Остались вопросы?" : 
                 "هل لا تزال لديك أسئلة؟"}
              </h3>
              <p style={rentalTermsStyles.termsCtaText}>
                {lang === "az" ? "Bizimlə əlaqə saxlayın - hər zaman köməyə hazırıq" : 
                 lang === "en" ? "Contact us - we're always ready to help" : 
                 lang === "ru" ? "Свяжитесь с нами - мы всегда готовы помочь" : 
                 "اتصل بنا - نحن دائماً مستعدون للمساعدة"}
              </p>
              <button 
                style={modalStyles.modalWhatsappBtn}
                onClick={() => setPage("contacts")}
              >
                {t.contacts.title} →
              </button>
            </div>
          </div>
        )}

        {/* ==================== CONTACTS PAGE ==================== */}
        {page === "contacts" && (
          <div style={contactStyles.contactContainer}>
            <h2 style={carGridStyles.sectionTitle}>
              <span style={carGridStyles.sectionTitleAccent}>{t.contacts.title.split(" ")[0]}</span>{" "}
              {t.contacts.title.split(" ").slice(1).join(" ")}
            </h2>

            <div style={contactStyles.contactGrid}>
              <div style={contactStyles.contactCard}>
                <div style={contactStyles.contactIcon}>📍</div>
                <div style={contactStyles.contactTitle}>
                  {lang === "az" ? "Ünvan" : lang === "en" ? "Address" : lang === "ru" ? "Адрес" : "العنوان"}
                </div>
                <div style={contactStyles.contactValue}>{t.contacts.address}</div>
              </div>

              <div style={contactStyles.contactCard}>
                <div style={contactStyles.contactIcon}>📱</div>
                <div style={contactStyles.contactTitle}>{t.contacts.phone}</div>
                <div style={contactStyles.contactValueHighlight}>+994 50 461 93 03</div>
              </div>

              <div style={contactStyles.contactCard}>
                <div style={contactStyles.contactIcon}>✉️</div>
                <div style={contactStyles.contactTitle}>{t.contacts.email}</div>
                <div style={contactStyles.contactValue}>info@caspianrent.az</div>
              </div>

              <div style={contactStyles.contactCard}>
                <div style={contactStyles.contactIcon}>⏰</div>
                <div style={contactStyles.contactTitle}>
                  {lang === "az" ? "İş Saatları" : lang === "en" ? "Working Hours" : lang === "ru" ? "Часы работы" : "ساعات العمل"}
                </div>
                <div style={contactStyles.contactValue}>{t.contacts.hours}</div>
              </div>
            </div>

            <div style={contactStyles.mapContainer}>
              <h3 style={{color: "#c9a962", marginBottom: 20, fontSize: 16, letterSpacing: "1px"}}>
                🗺️ {t.contacts.map}
              </h3>
              <div style={contactStyles.mapPlaceholder}>
                <div style={{textAlign: "center"}}>
                  <div style={{fontSize: 48, marginBottom: 15, opacity: 0.5}}>📍</div>
                  <p>Bakı, Nizami r., Atatürk pr. 89</p>
                  <a 
                    href="https://maps.google.com/?q=Baku+Nizami+Ataturk+89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: "#c9a962", 
                      textDecoration: "none", 
                      display: "inline-block", 
                      marginTop: 15,
                      padding: "10px 20px",
                      border: "1px solid rgba(201, 169, 98, 0.3)",
                      borderRadius: 4,
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(201, 169, 98, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ADMIN PAGE ==================== */}
        {page === "admin" && (
          <div>
            {!isAdmin ? (
              <div style={adminStyles.loginBox}>
                <h2 style={adminStyles.loginTitle}>{t.admin.title}</h2>
                <input
                  ref={passwordInputRef}
                  type="password"
                  placeholder={t.admin.password}
                  autoComplete="new-password"
                  onChange={(e) => setAdminInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  style={adminStyles.input}
                />
                <button 
                  onClick={handleAdminLogin} 
                  style={adminStyles.addBtn}
                >
                  {t.admin.login}
                </button>
                <button 
                  onClick={() => setPage("home")} 
                  style={{
                    ...adminStyles.logoutBtn,
                    marginTop: 15,
                    width: "100%"
                  }}
                >
                  {lang === "az" ? "Geri" : lang === "en" ? "Back" : lang === "ru" ? "Назад" : "رجوع"}
                </button>
              </div>
            ) : (
              <div style={adminStyles.adminPanel}>
                <div style={adminStyles.adminHeader}>
                  <h2 style={{color: "#c9a962", margin: 0, fontWeight: 300, letterSpacing: "2px"}}>
                    {t.admin.title}
                  </h2>
                  <button 
                    onClick={handleLogout} 
                    style={adminStyles.logoutBtn}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#c9a962";
                      e.currentTarget.style.color = "#c9a962";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#666";
                    }}
                  >
                    {t.admin.logout}
                  </button>
                </div>

                <h3 style={adminStyles.sectionHeader}>➕ {t.admin.addCar}</h3>
                
                {/* Multi Image Upload */}
                <div style={adminStyles.imageUploadContainer}>
                  <div style={adminStyles.imageInputToggle}>
                    <button 
                      onClick={() => setImageInputType("url")}
                      style={{
                        ...adminStyles.toggleBtn,
                        backgroundColor: imageInputType === "url" ? "#c9a962" : "rgba(255,255,255,0.05)",
                        color: imageInputType === "url" ? "#0a0a0a" : "#888"
                      }}
                    >
                      URL
                    </button>
                    <button 
                      onClick={() => setImageInputType("file")}
                      style={{
                        ...adminStyles.toggleBtn,
                        backgroundColor: imageInputType === "file" ? "#c9a962" : "rgba(255,255,255,0.05)",
                        color: imageInputType === "file" ? "#0a0a0a" : "#888"
                      }}
                    >
                      {t.admin.uploadImages}
                    </button>
                  </div>

                  {/* Image Preview Grid */}
                  <div style={adminStyles.imageGrid}>
                    {newCarImages.map((img, idx) => (
                      <div key={idx} style={adminStyles.imagePreviewBox}>
                        <img src={img} alt="" style={adminStyles.imagePreview} />
                        <button 
                          style={adminStyles.removeImageBtn}
                          onClick={() => removeImage(idx)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    
                    {/* Add Image Button */}
                    <div 
                      style={adminStyles.addImageBox}
                      onClick={() => {
                        if (imageInputType === "file") {
                          fileInputRef.current?.click();
                        }
                      }}
                    >
                      {imageInputType === "url" ? (
                        <div style={{width: "100%", padding: 10}}>
                          <div style={adminStyles.urlInputRow}>
                            <input
                              type="text"
                              placeholder={t.admin.url}
                              value={tempImageUrl}
                              onChange={(e) => setTempImageUrl(e.target.value)}
                              style={{...adminStyles.input, marginBottom: 0}}
                            />
                            <button 
                              style={adminStyles.urlAddBtn}
                              onClick={addImageUrl}
                            >
                              {t.admin.addImage}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            style={{display: "none"}}
                          />
                          <div style={adminStyles.addImageIcon}>+</div>
                          <span style={{fontSize: 12}}>{t.admin.addImage}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div style={{color: "#666", fontSize: 12, marginTop: 10}}>
                    {newCarImages.length} {t.admin.imagesCount} əlavə edildi (min: 1, tövsiyə: 4-5)
                  </div>
                </div>

                {/* Car Details Form */}
                <div style={adminStyles.grid2}>
                  <input 
                    placeholder="Marka/Model" 
                    value={newCar.name} 
                    onChange={(e) => setNewCar({...newCar, name: e.target.value})} 
                    style={adminStyles.input} 
                  />
                  <input 
                    type="number" 
                    placeholder="Qiymət (₼)" 
                    value={newCar.price || ""} 
                    onChange={(e) => setNewCar({...newCar, price: Number(e.target.value)})} 
                    style={adminStyles.input} 
                  />
                  <input 
                    type="number" 
                    placeholder="İl" 
                    value={newCar.year || ""} 
                    onChange={(e) => setNewCar({...newCar, year: Number(e.target.value)})} 
                    style={adminStyles.input} 
                  />
                  <input 
                    type="number" 
                    placeholder="Oturacaq sayı" 
                    value={newCar.seats || ""} 
                    onChange={(e) => setNewCar({...newCar, seats: Number(e.target.value)})} 
                    style={adminStyles.input} 
                  />
                  <select 
                    value={newCar.fuel} 
                    onChange={(e) => setNewCar({...newCar, fuel: e.target.value as any})} 
                    style={adminStyles.input}
                  >
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Hibrid">Hibrid</option>
                    <option value="Elektrik">Elektrik</option>
                  </select>
                  <select 
                    value={newCar.transmission} 
                    onChange={(e) => setNewCar({...newCar, transmission: e.target.value as any})} 
                    style={adminStyles.input}
                  >
                    <option value="Avtomat">Avtomat</option>
                    <option value="Manual">Manual</option>
                  </select>
                  <select 
                    value={newCar.category} 
                    onChange={(e) => setNewCar({...newCar, category: e.target.value as any})} 
                    style={adminStyles.input}
                  >
                    {(["economy", "business", "premium", "suv"] as const).map((c) => (
                      <option key={c} value={c}>{t.categories[c]}</option>
                    ))}
                  </select>
                </div>
                
                <textarea 
                  placeholder="Açıqlama" 
                  value={newCar.description || ""} 
                  onChange={(e) => setNewCar({...newCar, description: e.target.value})} 
                  style={{...adminStyles.input, minHeight: 100, resize: "vertical"}} 
                />
                
                <button 
                  onClick={addCar} 
                  style={adminStyles.addBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#d4b76a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#c9a962";
                  }}
                >
                  {t.admin.addCar}
                </button>

                {/* Car List */}
                <h3 style={{...adminStyles.sectionHeader, marginTop: 50}}>
                  🚗 Maşınların Siyahısı ({cars.length})
                </h3>
                
                <div style={adminStyles.carList}>
                  {cars.map((car) => (
                    <div key={car.id} style={adminStyles.carListItem}>
                      <div style={adminStyles.carListInfo}>
                        <img 
                          src={car.images[0]} 
                          alt="" 
                          style={adminStyles.carListThumb}
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
                          }}
                        />
                        <div style={adminStyles.carListDetails}>
                          <div style={adminStyles.carListName}>{car.name}</div>
                          <div style={adminStyles.carListMeta}>
                            {car.price}₼ • {t.categories[car.category]} • {car.year} • {car.images.length} şəkil
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteCar(car.id)} 
                        style={adminStyles.deleteBtn}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {t.admin.delete}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer style={footerStyles.footer}>
        <div style={footerStyles.footerContent}>
          <div style={footerStyles.footerSection}>
            <div style={footerStyles.footerLogo}>Caspian Rent</div>
            <p style={footerStyles.footerText}>
              {lang === "az" ? "Premium avtomobil icarəsi xidməti. Bakının ən etibarlı rent a car şirkəti." : 
               lang === "en" ? "Premium car rental service. Baku's most reliable car rental company." : 
               lang === "ru" ? "Премиум сервис аренды автомобилей. Самая надежная компания в Баку." : 
               "خدمة تأجير السيارات الفاخرة. أكثر شركة موثوقة في باكو."}
            </p>
            <div style={footerStyles.socialLinks}>
              {["📘", "📸", "💬", "▶️"].map((icon, i) => (
                <div key={i} style={footerStyles.socialLink}>{icon}</div>
              ))}
            </div>
          </div>

          <div style={footerStyles.footerSection}>
            <div style={footerStyles.footerTitle}>
              {lang === "az" ? "Sürətli Linklər" : lang === "en" ? "Quick Links" : lang === "ru" ? "Быстрые ссылки" : "روابط سريعة"}
            </div>
            <div style={footerStyles.footerLinks}>
              {[
                { p: "home", l: t.nav.home },
                { p: "cars", l: t.nav.cars },
                { p: "services", l: t.nav.services },
                { p: "rental-terms", l: t.nav.rentalTerms },
                { p: "contacts", l: t.nav.contacts }
              ].map((item) => (
                <div 
                  key={item.p} 
                  style={footerStyles.footerLink}
                  onClick={() => setPage(item.p as Page)}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#c9a962"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#666"}
                >
                  {item.l}
                </div>
              ))}
            </div>
          </div>

          <div style={footerStyles.footerSection}>
            <div style={footerStyles.footerTitle}>
              {lang === "az" ? "Əlaqə" : lang === "en" ? "Contact" : lang === "ru" ? "Контакты" : "اتصال"}
            </div>
            <div style={{...footerStyles.footerLinks, gap: 15}}>
              <div style={footerStyles.footerText}>📍 {t.contacts.address}</div>
              <div style={footerStyles.footerText}>📱 +994 50 461 93 03</div>
              <div style={footerStyles.footerText}>✉️ info@caspianrent.az</div>
              <div style={footerStyles.footerText}>⏰ {t.contacts.hours}</div>
            </div>
          </div>
        </div>

        <div style={footerStyles.footerBottom}>
          {t.footer.copyright} | {t.footer.address}
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          padding: 0;
          background: #0a0a0a;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 98, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 169, 98, 0.5);
        }
        @media (max-width: 640px) {
          .car-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
