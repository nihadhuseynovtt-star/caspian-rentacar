module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaspianRentacar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// ==================== TRANSLATIONS ====================
const translations = {
    az: {
        brand: "Caspian Rentacar",
        nav: {
            home: "Ana Səhifə",
            cars: "Avtomobillər",
            services: "Xidmətlər",
            contacts: "Əlaqə",
            admin: "Admin"
        },
        home: {
            title: "Premium Avtomobil Kirayəsi",
            subtitle: "Bakının ən sərfəli avtomobil rent şirkəti",
            cta: "Maşınlara Bax",
            stats: {
                cars: "Avtomobil",
                support: "Dəstək",
                safe: "Təhlükəsizlik"
            }
        },
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
            daily: {
                title: "Günlük Kirayə",
                desc: "Gündəlik ehtiyaclarınız üçün ideal həll. Səyahət, iş görüşləri və ya şəhər içi istifadə üçün geniş avtomobil seçimi.",
                features: [
                    "Sürətli qaytarma",
                    "Sığorta daxildir",
                    "24/7 yol yardımı",
                    "Pulsuz çatdırılma"
                ]
            },
            monthly: {
                title: "Aylıq Kirayə",
                desc: "Uzunmüddətli kirayə üçün xüsusi endirimlər. Şirkət avtomobili və ya şəxsi istifadə üçün sərfəli şərtlər.",
                features: [
                    "30%+ endirim",
                    "Texniki xidmət daxil",
                    "Yedək avtomobil",
                    "Sığorta daxildir"
                ]
            },
            airport: {
                title: "Hava Limanı Transferi",
                desc: "Heydər Əliyev Beynəlxalq Aeroportundan qarşılama və yola salma xidməti. Vaxtında və təhlükəsiz çatdırılma.",
                features: [
                    "Vaxtında qarşılama",
                    "Pulsuz gözləmə",
                    "Bagaj köməyi",
                    "Premium avtomobillər"
                ]
            },
            vip: {
                title: "VIP Xidmət",
                desc: "Premium sinif avtomobillər ilə xüsusi statuslu xidmət. Şəxsi sürücü və maksimum komfort.",
                features: [
                    "Şəxsi sürücü",
                    "Mercedes S-Class",
                    "Konfidensiallıq",
                    "Premium içki"
                ]
            }
        },
        contacts: {
            title: "Bizimlə Əlaqə",
            address: "Bakı, Nizami r., Atatürk pr. 89",
            phone: "Telefon",
            hours: "Hər gün: 09:00 - 21:00",
            email: "E-mail",
            map: "Xəritədə Bax"
        },
        admin: {
            title: "Admin Panel",
            login: "Daxil Ol",
            password: "Şifrəni daxil et",
            addCar: "Yeni Maşın",
            delete: "Sil",
            logout: "Çıxış",
            wrongPassword: "Yanlış şifrə!",
            uploadImage: "Şəkil yüklə",
            or: "və ya",
            url: "URL daxil et"
        },
        categories: {
            economy: "Ekonom",
            business: "Biznes",
            premium: "Premium",
            suv: "SUV/Jeep"
        },
        transmission: {
            manual: "Mexanika",
            automatic: "Avtomat"
        }
    },
    en: {
        brand: "Caspian Rentacar",
        nav: {
            home: "Home",
            cars: "Cars",
            services: "Services",
            contacts: "Contacts",
            admin: "Admin"
        },
        home: {
            title: "Premium Car Rental",
            subtitle: "Most affordable car rental in Baku",
            cta: "View Cars",
            stats: {
                cars: "Cars",
                support: "Support",
                safe: "Safety"
            }
        },
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
            daily: {
                title: "Daily Rental",
                desc: "Perfect solution for daily needs. Wide selection of cars for travel, business meetings or city driving.",
                features: [
                    "Quick return",
                    "Insurance included",
                    "24/7 roadside assist",
                    "Free delivery"
                ]
            },
            monthly: {
                title: "Monthly Rental",
                desc: "Special discounts for long-term rental. Affordable terms for company fleet or personal use.",
                features: [
                    "30%+ discount",
                    "Maintenance included",
                    "Replacement car",
                    "Insurance included"
                ]
            },
            airport: {
                title: "Airport Transfer",
                desc: "Meet and greet service from Heydar Aliyev International Airport. On-time and safe delivery.",
                features: [
                    "On-time pickup",
                    "Free waiting",
                    "Luggage assistance",
                    "Premium cars"
                ]
            },
            vip: {
                title: "VIP Service",
                desc: "Status service with premium class vehicles. Personal driver and maximum comfort.",
                features: [
                    "Personal driver",
                    "Mercedes S-Class",
                    "Confidentiality",
                    "Premium beverages"
                ]
            }
        },
        contacts: {
            title: "Contact Us",
            address: "Baku, Nizami dist., Ataturk ave. 89",
            phone: "Phone",
            hours: "Daily: 09:00 - 21:00",
            email: "Email",
            map: "View on Map"
        },
        admin: {
            title: "Admin Panel",
            login: "Login",
            password: "Enter password",
            addCar: "Add Car",
            delete: "Delete",
            logout: "Logout",
            wrongPassword: "Wrong password!",
            uploadImage: "Upload image",
            or: "or",
            url: "Enter URL"
        },
        categories: {
            economy: "Economy",
            business: "Business",
            premium: "Premium",
            suv: "SUV/Jeep"
        },
        transmission: {
            manual: "Manual",
            automatic: "Automatic"
        }
    },
    ru: {
        brand: "Caspian Rentacar",
        nav: {
            home: "Главная",
            cars: "Автомобили",
            services: "Услуги",
            contacts: "Контакты",
            admin: "Админ"
        },
        home: {
            title: "Прокат Автомобилей",
            subtitle: "Самый доступный прокат в Баку",
            cta: "Смотреть Авто",
            stats: {
                cars: "Авто",
                support: "Поддержка",
                safe: "Безопасность"
            }
        },
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
            daily: {
                title: "Посуточная Аренда",
                desc: "Идеальное решение для ежедневных нужд. Широкий выбор автомобилей для поездок, деловых встреч или городской езды.",
                features: [
                    "Быстрый возврат",
                    "Страховка включена",
                    "Круглосуточная помощь",
                    "Бесплатная доставка"
                ]
            },
            monthly: {
                title: "Помесячная Аренда",
                desc: "Специальные скидки на долгосрочную аренду. Выгодные условия для корпоративного парка или личного использования.",
                features: [
                    "Скидка 30%+",
                    "Обслуживание включено",
                    "Замена авто",
                    "Страховка включена"
                ]
            },
            airport: {
                title: "Трансфер из Аэропорта",
                desc: "Встреча и проводы из Международного Аэропорта Гейдара Алиева. Своевременная и безопасная доставка.",
                features: [
                    "Точно по времени",
                    "Бесплатное ожидание",
                    "Помощь с багажом",
                    "Премиум авто"
                ]
            },
            vip: {
                title: "ВИП Сервис",
                desc: "Сервис премиум-класса со статусными автомобилями. Личный водитель и максимальный комфорт.",
                features: [
                    "Личный водитель",
                    "Mercedes S-Class",
                    "Конфиденциальность",
                    "Премиум напитки"
                ]
            }
        },
        contacts: {
            title: "Контакты",
            address: "Баку, Низаминский р., пр. Ататюрка 89",
            phone: "Телефон",
            hours: "Ежедневно: 09:00 - 21:00",
            email: "Email",
            map: "На карте"
        },
        admin: {
            title: "Админ Панель",
            login: "Вход",
            password: "Введите пароль",
            addCar: "Добавить Авто",
            delete: "Удалить",
            logout: "Выход",
            wrongPassword: "Неверный пароль!",
            uploadImage: "Загрузить фото",
            or: "или",
            url: "Введите URL"
        },
        categories: {
            economy: "Эконом",
            business: "Бизнес",
            premium: "Премиум",
            suv: "Внедорожник"
        },
        transmission: {
            manual: "Механика",
            automatic: "Автомат"
        }
    },
    ar: {
        brand: "كاسبيان رينت كار",
        nav: {
            home: "الرئيسية",
            cars: "السيارات",
            services: "الخدمات",
            contacts: "اتصل بنا",
            admin: "المشرف"
        },
        home: {
            title: "تأجير السيارات الفاخرة",
            subtitle: "أفضل خدمة تأجير سيارات في باكو بأسعار مميزة",
            cta: "تصفح السيارات",
            stats: {
                cars: "سيارة",
                support: "دعم",
                safe: "أمان"
            }
        },
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
            daily: {
                title: "التأجير اليومي",
                desc: "الحل المثالي للاحتياجات اليومية. مجموعة واسعة من السيارات للسفر والاجتماعات التجارية أو القيادة داخل المدينة.",
                features: [
                    "إرجاع سريع",
                    "التأمين شامل",
                    "مساعدة على الطريق 24/7",
                    "توصيل مجاني"
                ]
            },
            monthly: {
                title: "التأجير الشهري",
                desc: "خصومات خاصة للتأجير طويل الأجل. شروط ميسرة لأساطيل الشركات أو الاستخدام الشخصي.",
                features: [
                    "خصم 30%+",
                    "الصيانة مشمولة",
                    "سيارة بديلة",
                    "التأمين شامل"
                ]
            },
            airport: {
                title: "نقل المطار",
                desc: "خدمة الاستقبال والتوصيل من مطار حيدر علييف الدولي. التوصيل في الوقت المحدد وبأمان.",
                features: [
                    "الاستقبال في الوقت",
                    "انتظار مجاني",
                    "مساعدة الأمتعة",
                    "سيارات فاخرة"
                ]
            },
            vip: {
                title: "خدمة كبار الشخصيات",
                desc: "خدمة متميزة مع سيارات فاخرة. سائق خاص وأقصى درجات الراحة.",
                features: [
                    "سائق خاص",
                    "مرسيدس S-Class",
                    "سرية تامة",
                    "مشروبات فاخرة"
                ]
            }
        },
        contacts: {
            title: "اتصل بنا",
            address: "باكو، منطقة نيزامي، شارع أتاتورك 89",
            phone: "الهاتف",
            hours: "يومياً: 09:00 - 21:00",
            email: "البريد الإلكتروني",
            map: "عرض على الخريطة"
        },
        admin: {
            title: "لوحة التحكم",
            login: "تسجيل الدخول",
            password: "أدخل كلمة المرور",
            addCar: "إضافة سيارة",
            delete: "حذف",
            logout: "خروج",
            wrongPassword: "كلمة المرور خاطئة!",
            uploadImage: "رفع صورة",
            or: "أو",
            url: "أدخل الرابط"
        },
        categories: {
            economy: "اقتصادية",
            business: "أعمال",
            premium: "فاخرة",
            suv: "دفع رباعي"
        },
        transmission: {
            manual: "يدوي",
            automatic: "أوتوماتيك"
        }
    }
};
// ==================== DEMO CARS ====================
const demoCars = [
    {
        id: 1,
        name: "Mercedes-Benz E-Class",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        price: 150,
        year: 2023,
        fuel: "Benzin",
        category: "business",
        transmission: "Avtomat",
        seats: 5,
        description: "Lüks biznes sedan"
    },
    {
        id: 2,
        name: "BMW X5",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        price: 180,
        year: 2022,
        fuel: "Dizel",
        category: "suv",
        transmission: "Avtomat",
        seats: 5,
        description: "Premium SUV"
    },
    {
        id: 3,
        name: "Toyota Camry",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
        price: 80,
        year: 2023,
        fuel: "Hibrid",
        category: "economy",
        transmission: "Avtomat",
        seats: 5,
        description: "Etibarlı sedan"
    },
    {
        id: 4,
        name: "Audi A6",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
        price: 140,
        year: 2023,
        fuel: "Benzin",
        category: "business",
        transmission: "Avtomat",
        seats: 5,
        description: "Texnoloji biznes avtomobili"
    },
    {
        id: 5,
        name: "Range Rover Sport",
        image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800",
        price: 250,
        year: 2023,
        fuel: "Dizel",
        category: "suv",
        transmission: "Avtomat",
        seats: 5,
        description: "Prestijli SUV"
    },
    {
        id: 6,
        name: "Audi R8",
        image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800",
        price: 400,
        year: 2022,
        fuel: "Benzin",
        category: "premium",
        transmission: "Avtomat",
        seats: 2,
        description: "Super sport avtomobil"
    },
    {
        id: 7,
        name: "Hyundai Elantra",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
        price: 50,
        year: 2022,
        fuel: "Benzin",
        category: "economy",
        transmission: "Avtomat",
        seats: 5,
        description: "Ekonom klass"
    },
    {
        id: 8,
        name: "Mercedes S-Class",
        image: "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800",
        price: 350,
        year: 2023,
        fuel: "Benzin",
        category: "premium",
        transmission: "Avtomat",
        seats: 4,
        description: "VIP sedan"
    }
];
const ADMIN_PASSWORD = "Nihad123";
const PHONE_NUMBER = "994504619303";
function CaspianRentacar() {
    // ==================== STATE ====================
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("az");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [cars, setCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adminInput, setAdminInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Advanced filters
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        1000
    ]);
    const [yearFrom, setYearFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2015);
    const [yearTo, setYearTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [fuelFilter, setFuelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [transmissionFilter, setTransmissionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCar, setNewCar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        price: 0,
        image: "",
        year: 2023,
        fuel: "Benzin",
        category: "economy",
        transmission: "Avtomat",
        seats: 5,
        description: ""
    });
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageInputType, setImageInputType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("url");
    const passwordInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = translations[lang];
    // ==================== EFFECTS ====================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (page === "admin" && passwordInputRef.current) {
            passwordInputRef.current.value = "";
            setAdminInput("");
        }
    }, [
        page
    ]);
    // ==================== FILTER LOGIC ====================
    const filteredCars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = cars;
        // Category filter
        if (filter !== "all") {
            result = result.filter((c)=>c.category === filter);
        }
        // Search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((c)=>c.name.toLowerCase().includes(query) || c.description?.toLowerCase().includes(query) || c.fuel.toLowerCase().includes(query));
        }
        // Price range
        result = result.filter((c)=>c.price >= priceRange[0] && c.price <= priceRange[1]);
        // Year range
        result = result.filter((c)=>c.year >= yearFrom && c.year <= yearTo);
        // Fuel type
        if (fuelFilter !== "all") {
            result = result.filter((c)=>c.fuel === fuelFilter);
        }
        // Transmission
        if (transmissionFilter !== "all") {
            result = result.filter((c)=>c.transmission === transmissionFilter);
        }
        return result;
    }, [
        cars,
        filter,
        searchQuery,
        priceRange,
        yearFrom,
        yearTo,
        fuelFilter,
        transmissionFilter
    ]);
    const saveCars = (newCars)=>{
        setCars(newCars);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // ==================== HANDLERS ====================
    const handleAdminLogin = ()=>{
        if (adminInput === ADMIN_PASSWORD) {
            setIsAdmin(true);
            setAdminInput("");
        } else {
            alert(t.admin.wrongPassword);
        }
    };
    const handleLogout = ()=>{
        setIsAdmin(false);
        setPage("home");
        setAdminInput("");
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setNewCar({
                    ...newCar,
                    image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const addCar = ()=>{
        if (!newCar.name || !newCar.price) return;
        const car = {
            id: Date.now(),
            name: newCar.name,
            price: Number(newCar.price),
            image: newCar.image || "https://via.placeholder.com/400x300?text=No+Image",
            year: Number(newCar.year) || 2023,
            fuel: newCar.fuel || "Benzin",
            category: newCar.category || "economy",
            transmission: newCar.transmission || "Avtomat",
            seats: Number(newCar.seats) || 5,
            description: newCar.description || ""
        };
        saveCars([
            ...cars,
            car
        ]);
        setNewCar({
            name: "",
            price: 0,
            image: "",
            year: 2023,
            fuel: "Benzin",
            category: "economy",
            transmission: "Avtomat",
            seats: 5,
            description: ""
        });
        setImageFile(null);
        setImageInputType("url");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const deleteCar = (id)=>{
        if (confirm(lang === "az" ? "Silmək istəyirsən?" : lang === "en" ? "Delete?" : lang === "ar" ? "حذف؟" : "Удалить?")) {
            saveCars(cars.filter((c)=>c.id !== id));
        }
    };
    const clearFilters = ()=>{
        setFilter("all");
        setSearchQuery("");
        setPriceRange([
            0,
            1000
        ]);
        setYearFrom(2015);
        setYearTo(2024);
        setFuelFilter("all");
        setTransmissionFilter("all");
    };
    // ==================== STYLE FUNCTIONS ====================
    const getNavBtnStyle = (active)=>({
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
    const getFilterBtnStyle = (active)=>({
            padding: "8px 20px",
            borderRadius: 20,
            border: "1px solid " + (active ? "#f59e0b" : "rgba(255,255,255,0.2)"),
            backgroundColor: active ? "#f59e0b" : "transparent",
            color: active ? "#0f172a" : "white",
            cursor: "pointer",
            fontSize: 14
        });
    const getLangBtnStyle = (l)=>({
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
    const styles = {
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
        carInfo: {
            padding: 20
        },
        carName: {
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 8
        },
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
        price: {
            fontSize: 24,
            fontWeight: 800,
            color: "#f59e0b"
        },
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
    if (!loaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.container,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: "Yüklənir..."
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 721,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        className: "jsx-dcf31704b77b5571",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.bgImage,
                className: "jsx-dcf31704b77b5571"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: styles.header,
                className: "jsx-dcf31704b77b5571",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.logo,
                        onClick: ()=>setPage("home"),
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            "🚘 ",
                            t.brand
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: styles.nav,
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            Object.keys(t.nav).filter((k)=>k !== "admin").map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage(p),
                                    style: getNavBtnStyle(page === p),
                                    className: "jsx-dcf31704b77b5571",
                                    children: t.nav[p]
                                }, p, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.langSwitcher,
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    "az",
                                    "en",
                                    "ru",
                                    "ar"
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLang(l),
                                        style: getLangBtnStyle(l),
                                        className: "jsx-dcf31704b77b5571",
                                        children: l === "ar" ? "عربي" : l.toUpperCase()
                                    }, l, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 740,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 728,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: styles.main,
                className: "jsx-dcf31704b77b5571",
                children: [
                    page === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.hero,
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: styles.heroTitle,
                                className: "jsx-dcf31704b77b5571",
                                children: t.home.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.heroSubtitle,
                                className: "jsx-dcf31704b77b5571",
                                children: t.home.subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 755,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: styles.ctaBtn,
                                onClick: ()=>setPage("cars"),
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    t.home.cta,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: 40,
                                    marginTop: 80,
                                    maxWidth: 600,
                                    margin: "80px auto 0"
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    {
                                        n: cars.length + "+",
                                        l: t.home.stats.cars
                                    },
                                    {
                                        n: "24/7",
                                        l: t.home.stats.support
                                    },
                                    {
                                        n: "100%",
                                        l: t.home.stats.safe
                                    }
                                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 48,
                                                    fontWeight: 800,
                                                    color: "#f59e0b"
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: s.n
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#94a3b8"
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: s.l
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 760,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 60,
                                    opacity: 0.3
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage("admin"),
                                    style: {
                                        background: "transparent",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        color: "white",
                                        padding: "8px 16px",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                        fontSize: 12
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 773,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this),
                    page === "cars" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: styles.sectionTitle,
                                className: "jsx-dcf31704b77b5571",
                                children: t.cars.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 787,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.searchBar,
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: t.cars.search,
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        style: styles.searchInput,
                                        className: "jsx-dcf31704b77b5571"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            [lang === "ar" ? "right" : "left"]: 20,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            fontSize: 20
                                        },
                                        className: "jsx-dcf31704b77b5571",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 798,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 790,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: styles.toggleFiltersBtn,
                                    onClick: ()=>setShowFilters(!showFilters),
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        showFilters ? "✕ " : "⚙️ ",
                                        t.cars.filters
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 803,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 802,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.advancedFilters,
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.filterGrid,
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: t.cars.filterAll
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: filter,
                                                        onChange: (e)=>setFilter(e.target.value),
                                                        style: styles.filterSelect,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.cars.filterAll
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 21
                                                            }, this),
                                                            [
                                                                "economy",
                                                                "business",
                                                                "premium",
                                                                "suv"
                                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    className: "jsx-dcf31704b77b5571",
                                                                    children: t.categories[c]
                                                                }, c, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 817,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 812,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: t.cars.fuel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: fuelFilter,
                                                        onChange: (e)=>setFuelFilter(e.target.value),
                                                        style: styles.filterSelect,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.cars.filterAll
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 826,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Benzin",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: lang === "az" ? "Benzin" : lang === "ar" ? "بنزين" : "Бензин"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Dizel",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: lang === "az" ? "Dizel" : lang === "ar" ? "ديزل" : "Дизель"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 828,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Hibrid",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: lang === "az" ? "Hibrid" : lang === "ar" ? "هجين" : "Гибрид"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Elektrik",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: lang === "az" ? "Elektrik" : lang === "ar" ? "كهربائي" : "Электро"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 823,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: t.cars.transmission
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: transmissionFilter,
                                                        onChange: (e)=>setTransmissionFilter(e.target.value),
                                                        style: styles.filterSelect,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.cars.filterAll
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Manual",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.transmission.manual
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Avtomat",
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.transmission.automatic
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 835,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: t.cars.yearFrom
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: yearFrom,
                                                        onChange: (e)=>setYearFrom(Number(e.target.value)),
                                                        style: styles.filterSelect,
                                                        min: 2000,
                                                        max: 2024,
                                                        className: "jsx-dcf31704b77b5571"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 845,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: t.cars.yearTo
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: yearTo,
                                                        onChange: (e)=>setYearTo(Number(e.target.value)),
                                                        style: styles.filterSelect,
                                                        min: 2000,
                                                        max: 2024,
                                                        className: "jsx-dcf31704b77b5571"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: styles.filterLabel,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            t.cars.priceRange,
                                                            ": ",
                                                            priceRange[0],
                                                            " - ",
                                                            priceRange[1],
                                                            " ₼"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: 10,
                                                            alignItems: "center"
                                                        },
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: 0,
                                                                max: 1000,
                                                                value: priceRange[0],
                                                                onChange: (e)=>setPriceRange([
                                                                        Number(e.target.value),
                                                                        priceRange[1]
                                                                    ]),
                                                                style: styles.rangeInput,
                                                                className: "jsx-dcf31704b77b5571"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 874,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: 0,
                                                                max: 1000,
                                                                value: priceRange[1],
                                                                onChange: (e)=>setPriceRange([
                                                                        priceRange[0],
                                                                        Number(e.target.value)
                                                                    ]),
                                                                style: styles.rangeInput,
                                                                className: "jsx-dcf31704b77b5571"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 873,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 871,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 810,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        className: "jsx-dcf31704b77b5571",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearFilters,
                                            style: {
                                                ...styles.deleteBtn,
                                                backgroundColor: "#64748b"
                                            },
                                            className: "jsx-dcf31704b77b5571",
                                            children: t.cars.clearFilters
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 894,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 809,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.resultsCount,
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    filteredCars.length,
                                    " ",
                                    t.cars.results
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 902,
                                columnNumber: 13
                            }, this),
                            filteredCars.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: "center",
                                    color: "#94a3b8",
                                    fontSize: 18
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: t.cars.empty
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 908,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.carsGrid,
                                className: "jsx-dcf31704b77b5571",
                                children: filteredCars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.carCard,
                                        className: "jsx-dcf31704b77b5571" + " " + "car-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: car.image,
                                                alt: car.name,
                                                style: styles.carImage,
                                                onError: (e)=>{
                                                    e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
                                                },
                                                className: "jsx-dcf31704b77b5571"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 913,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.carInfo,
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: styles.carName,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: car.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.carMeta,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: styles.badge,
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: t.categories[car.category]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: [
                                                                    car.year,
                                                                    " • ",
                                                                    car.fuel
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: [
                                                                    "🪑 ",
                                                                    car.seats
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 926,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: [
                                                                    "⚙️ ",
                                                                    car.transmission === "Avtomat" ? t.transmission.automatic : t.transmission.manual
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 927,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 23
                                                    }, this),
                                                    car.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#94a3b8",
                                                            fontSize: 14,
                                                            marginBottom: 10
                                                        },
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: car.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: styles.carFooter,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: styles.price,
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: [
                                                                    car.price,
                                                                    " ",
                                                                    t.cars.price
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Salam, ${car.name} maraqlıdır. Qiymət: ${car.price}₼`)}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                style: {
                                                                    textDecoration: "none"
                                                                },
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: styles.whatsappBtn,
                                                                    className: "jsx-dcf31704b77b5571",
                                                                    children: [
                                                                        "💬 ",
                                                                        t.cars.order
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 933,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 932,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, car.id, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 912,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 910,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 786,
                        columnNumber: 11
                    }, this),
                    page === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: styles.sectionTitle,
                                className: "jsx-dcf31704b77b5571",
                                children: t.services.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                    gap: 25
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    {
                                        key: "daily",
                                        icon: "🚗",
                                        color: "#f59e0b"
                                    },
                                    {
                                        key: "monthly",
                                        icon: "📅",
                                        color: "#10b981"
                                    },
                                    {
                                        key: "airport",
                                        icon: "✈️",
                                        color: "#3b82f6"
                                    },
                                    {
                                        key: "vip",
                                        icon: "🤵",
                                        color: "#8b5cf6"
                                    }
                                ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.serviceCard,
                                        className: "jsx-dcf31704b77b5571" + " " + "service-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.serviceIcon,
                                                    filter: `drop-shadow(0 0 20px ${service.color})`
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: service.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: styles.serviceTitle,
                                                className: "jsx-dcf31704b77b5571",
                                                children: t.services[service.key].title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 959,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: styles.serviceDesc,
                                                className: "jsx-dcf31704b77b5571",
                                                children: t.services[service.key].desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 962,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: styles.serviceFeatures,
                                                className: "jsx-dcf31704b77b5571",
                                                children: t.services[service.key].features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: styles.serviceFeature,
                                                        className: "jsx-dcf31704b77b5571",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: service.color
                                                                },
                                                                className: "jsx-dcf31704b77b5571",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 25
                                                            }, this),
                                                            feature
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    marginTop: 25,
                                                    padding: "12px 30px",
                                                    backgroundColor: service.color,
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: 25,
                                                    cursor: "pointer",
                                                    fontWeight: 600,
                                                    fontSize: 14
                                                },
                                                onClick: ()=>setPage("contacts"),
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    lang === "az" ? "Ətraflı" : lang === "en" ? "Details" : lang === "ar" ? "التفاصيل" : "Подробнее",
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 973,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, service.key, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 955,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 948,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 946,
                        columnNumber: 11
                    }, this),
                    page === "contacts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 800,
                            margin: "0 auto"
                        },
                        className: "jsx-dcf31704b77b5571",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: styles.sectionTitle,
                                className: "jsx-dcf31704b77b5571",
                                children: t.contacts.title
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 998,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: 25
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.contactCard,
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    "📍 ",
                                                    lang === "az" ? "Ünvan" : lang === "en" ? "Address" : lang === "ar" ? "العنوان" : "Адрес"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#94a3b8",
                                                    marginTop: 10
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: t.contacts.address
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.contactCard,
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    "📱 ",
                                                    t.contacts.phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#f59e0b",
                                                    fontSize: 24,
                                                    fontWeight: "bold",
                                                    marginTop: 10
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: "+994 50 461 93 03"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.contactCard,
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    "✉️ ",
                                                    t.contacts.email
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#94a3b8",
                                                    marginTop: 10
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: "info@caspianrent.az"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.contactCard,
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-dcf31704b77b5571",
                                                children: [
                                                    "⏰ ",
                                                    lang === "az" ? "İş Saatları" : lang === "en" ? "Working Hours" : lang === "ar" ? "ساعات العمل" : "Часы Работы"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#94a3b8",
                                                    marginTop: 10
                                                },
                                                className: "jsx-dcf31704b77b5571",
                                                children: t.contacts.hours
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 999,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 30,
                                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                                    borderRadius: 16,
                                    padding: 20,
                                    textAlign: "center"
                                },
                                className: "jsx-dcf31704b77b5571",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: "#f59e0b",
                                            marginBottom: 15
                                        },
                                        className: "jsx-dcf31704b77b5571",
                                        children: [
                                            "🗺️ ",
                                            t.contacts.map
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 300,
                                            backgroundColor: "rgba(15, 23, 42, 0.5)",
                                            borderRadius: 8,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#94a3b8"
                                        },
                                        className: "jsx-dcf31704b77b5571",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 48,
                                                        marginBottom: 10
                                                    },
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Bakı, Nizami r., Atatürk pr. 89"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://maps.google.com/?q=Baku+Nizami+Ataturk+89",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        color: "#f59e0b",
                                                        textDecoration: "none",
                                                        display: "inline-block",
                                                        marginTop: 10
                                                    },
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Google Maps-də Aç →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 997,
                        columnNumber: 11
                    }, this),
                    page === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dcf31704b77b5571",
                        children: !isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.loginBox,
                            className: "jsx-dcf31704b77b5571",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        ...styles.sectionTitle,
                                        marginBottom: 30
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: t.admin.title
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: passwordInputRef,
                                    type: "password",
                                    placeholder: t.admin.password,
                                    autoComplete: "new-password",
                                    name: "admin-password-unique",
                                    id: "admin-password-unique",
                                    onChange: (e)=>setAdminInput(e.target.value),
                                    onKeyPress: (e)=>e.key === 'Enter' && handleAdminLogin(),
                                    style: styles.input,
                                    className: "jsx-dcf31704b77b5571"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAdminLogin,
                                    style: styles.addBtn,
                                    className: "jsx-dcf31704b77b5571",
                                    children: t.admin.login
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPage("home"),
                                    style: {
                                        ...styles.logoutBtn,
                                        marginTop: 15,
                                        width: "100%"
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: lang === "az" ? "Geri" : lang === "en" ? "Back" : lang === "ar" ? "رجوع" : "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1043,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.adminPanel,
                            className: "jsx-dcf31704b77b5571",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: 30
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                ...styles.sectionTitle,
                                                margin: 0,
                                                textAlign: "left"
                                            },
                                            className: "jsx-dcf31704b77b5571",
                                            children: t.admin.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1067,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            style: styles.logoutBtn,
                                            className: "jsx-dcf31704b77b5571",
                                            children: t.admin.logout
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1066,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        color: "#f59e0b",
                                        marginBottom: 20
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        "➕ ",
                                        t.admin.addCar
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 20
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 10,
                                                marginBottom: 15
                                            },
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setImageInputType("url"),
                                                    style: {
                                                        flex: 1,
                                                        padding: 10,
                                                        backgroundColor: imageInputType === "url" ? "#f59e0b" : "rgba(255,255,255,0.1)",
                                                        color: imageInputType === "url" ? "#0f172a" : "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: "pointer"
                                                    },
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1078,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setImageInputType("file"),
                                                    style: {
                                                        flex: 1,
                                                        padding: 10,
                                                        backgroundColor: imageInputType === "file" ? "#f59e0b" : "rgba(255,255,255,0.1)",
                                                        color: imageInputType === "file" ? "#0f172a" : "white",
                                                        border: "none",
                                                        borderRadius: 8,
                                                        cursor: "pointer"
                                                    },
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: t.admin.uploadImage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 19
                                        }, this),
                                        imageInputType === "url" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Şəkil URL",
                                            value: newCar.image,
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    image: e.target.value
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1109,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.imageUploadBox,
                                            onClick: ()=>fileInputRef.current?.click(),
                                            onDragOver: (e)=>e.preventDefault(),
                                            onDrop: (e)=>{
                                                e.preventDefault();
                                                const file = e.dataTransfer.files[0];
                                                if (file) {
                                                    setImageFile(file);
                                                    const reader = new FileReader();
                                                    reader.onloadend = ()=>{
                                                        setNewCar({
                                                            ...newCar,
                                                            image: reader.result
                                                        });
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            },
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: fileInputRef,
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: handleImageUpload,
                                                    style: {
                                                        display: "none"
                                                    },
                                                    className: "jsx-dcf31704b77b5571"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1133,
                                                    columnNumber: 23
                                                }, this),
                                                newCar.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: newCar.image,
                                                    alt: "Preview",
                                                    style: {
                                                        maxWidth: "100%",
                                                        maxHeight: 200,
                                                        borderRadius: 8
                                                    },
                                                    className: "jsx-dcf31704b77b5571"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 32,
                                                                marginBottom: 10
                                                            },
                                                            className: "jsx-dcf31704b77b5571",
                                                            children: "📁"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-dcf31704b77b5571",
                                                            children: t.admin.uploadImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1145,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: "#94a3b8",
                                                                marginTop: 5
                                                            },
                                                            className: "jsx-dcf31704b77b5571",
                                                            children: [
                                                                t.admin.or,
                                                                " ",
                                                                t.admin.url
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1076,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.grid2,
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Marka/Model",
                                            value: newCar.name,
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    name: e.target.value
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Qiymət (₼)",
                                            value: newCar.price || "",
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    price: Number(e.target.value)
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "İl",
                                            value: newCar.year || "",
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    year: Number(e.target.value)
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Oturacaq sayı",
                                            value: newCar.seats || "",
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    seats: Number(e.target.value)
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newCar.fuel,
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    fuel: e.target.value
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Benzin",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Benzin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Dizel",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Dizel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Hibrid",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Hibrid"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Elektrik",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Elektrik"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newCar.transmission,
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    transmission: e.target.value
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Avtomat",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Avtomat"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Manual",
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: "Manual"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1166,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newCar.category,
                                            onChange: (e)=>setNewCar({
                                                    ...newCar,
                                                    category: e.target.value
                                                }),
                                            style: styles.input,
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                "economy",
                                                "business",
                                                "premium",
                                                "suv"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: t.categories[c]
                                                }, c, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Açıqlama",
                                    value: newCar.description || "",
                                    onChange: (e)=>setNewCar({
                                            ...newCar,
                                            description: e.target.value
                                        }),
                                    style: {
                                        ...styles.input,
                                        minHeight: 80,
                                        resize: "vertical"
                                    },
                                    className: "jsx-dcf31704b77b5571"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addCar,
                                    style: styles.addBtn,
                                    className: "jsx-dcf31704b77b5571",
                                    children: t.admin.addCar
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        color: "#f59e0b",
                                        margin: "40px 0 20px"
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: [
                                        "🚗 Maşınların Siyahısı (",
                                        cars.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1182,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    className: "jsx-dcf31704b77b5571",
                                    children: cars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: 15,
                                                backgroundColor: "rgba(15, 23, 42, 0.5)",
                                                borderRadius: 8
                                            },
                                            className: "jsx-dcf31704b77b5571",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 15
                                                    },
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: car.image,
                                                            alt: "",
                                                            style: {
                                                                width: 60,
                                                                height: 40,
                                                                objectFit: "cover",
                                                                borderRadius: 4
                                                            },
                                                            className: "jsx-dcf31704b77b5571"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1187,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dcf31704b77b5571",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-dcf31704b77b5571",
                                                                    children: car.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 1189,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: "#94a3b8",
                                                                        fontSize: 12
                                                                    },
                                                                    className: "jsx-dcf31704b77b5571",
                                                                    children: [
                                                                        car.price,
                                                                        "₼ • ",
                                                                        t.categories[car.category],
                                                                        " • ",
                                                                        car.year
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 1190,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteCar(car.id),
                                                    style: styles.deleteBtn,
                                                    className: "jsx-dcf31704b77b5571",
                                                    children: t.admin.delete
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1193,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, car.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1185,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1041,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "dcf31704b77b5571",
                children: "@keyframes shine{to{background-position:200%}}button:hover{transform:translateY(-2px);box-shadow:0 5px 20px #f59e0b66}.car-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px #0000004d}.service-card:hover{border-color:#f59e0b;transform:translateY(-5px);box-shadow:0 20px 40px #f59e0b33}input:focus,select:focus,textarea:focus{box-shadow:0 0 0 3px #f59e0b1a;border-color:#f59e0b!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 724,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce6aa389._.js.map