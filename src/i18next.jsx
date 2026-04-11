import i18n from "i18next";
import {    initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

i18n
.use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Kashop":"kashop",
          "Home": "Home",
          "Register": "Register",
          "Login": "Login",
          "Cart": "Cart",
          "Shop": "Shop",
          "About": "About",
          "Blog": "Blog",
          "Contact": "Contact",
          "Categories": "Categories",
          "Products": "Products",
          "Featured Products":"Featured Products",
          "Logout":"Logout",
          "Profile":"Profile",
          "About Us":"About Us",
          "Carrier":"Carrier",
         "DASHBOARD":"DASHBOARD",
          "Orders":"Orders",
          "Support Tickets":"Support Tickets",
          "Wishlist":"Wishlist",
          "ACCOUNT SETTINGS":"ACCOUNT SETTINGS",
          "Profile Info":"Profile Info",
          "My Profile Info":"My Profile Info",
          "Business Marketing":"Business Marketing",
          "We are hiring":"We are hiring",
          "User Analytic":"User Analytic",
          "Live Chat":"Live Chat",
          "Unlimited Support":"Unlimited Support",
          "Company info":"Company info",
          "Features":"Features",
          "Get In Touch":"Get In Touch",
          "NEW COLLECTION":"NEW COLLECTION",
          "Spring / Summer 2025":"Spring / Summer 2025",
          "SHOP NOW":"SHOP NOW",
          "Top Product Of the Week":" Top Product Of the Week",
          "Start Shopping":"Start Shopping",
          "Discover Your Next Favorite":"Discover Your Next Favorite",
          "Explore Items":"Explore Items",
          "New Collection":"New Collection",
          "the quick fox jumps over the lazy dog":"the quick fox jumps over the lazy dog",
          "We love what we do":"We love what we do",
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.",
          "THE BEST SERVICES":"THE BEST SERVICES",
          "Problems trying to resolve the conflict between":"Problems trying to resolve the conflict between",
          "Easy Wins":"Easy Wins",
          "Get your best looking smile now!":"Get your best looking smile now!",
          "Fast Delivery":"Fast Delivery",
          "Get your products delivered quickly!":"Get your products delivered quickly!",
          "Secure Payment":"Secure Payment",
          "100% secure payment methods!":"100% secure payment methods!",
          "Made With Love By Figmaland All Right Reserved @2026":"Made With Love By Figmaland All Right Reserved @2026",



          
        }
      },
       ar: {
        translation: {
          "Kashop":"كاشوب",
          "Home": "الرئيسية",
          "Register": "انشاء حساب",
          "Login": "تسجيل الدخول",
          "Cart": "السلة",
          "Shop": "تسوق",
          "About": "من نحن",
          "Blog": "مقاطع فيديو",
          "Contacts": "تواصل معنا",
          "Categories": "التصنيفات ",
          "Products": "المنتجات",
          "Featured Products":"المنتجات المميزة",
          "Logout":"تسجيل الخروج",
          "Profile":"الملف الشخصي",
          "About Us":"من نحن",
          "Carrier":"الوظائف",
          "Business Marketing":"تسويق الأعمال",
          "We are hiring":"نحن نوظف",
          "User Analytic":"تحليل المستخدم",
          "Live Chat":"الدردشة الحية",
          "Unlimited Support":"دعم غير محدود",
          "Company info":"معلومات الشركة",
          "Features":"مميزات",
           "My Profile Info":"معلوماتي الشخصية",
          "DASHBOARD":"لوحة القيادة",
          "Orders":"الطلبات",
          "Support Tickets":"الدعم الفني",
          "Wishlist":"المفضلة",
          "ACCOUNT SETTINGS":"اعدادات الحساب",
          "Profile Info":"الصفحة الشخصية",
          "Get In Touch":"تواصل معنا",
          "the quick fox jumps over the lazy dog":"الثعلب السريع يقفز فوق الكلب الكسول",
          "NEW COLLECTION":"مجموعة جديدة",
          "Spring / Summer 2025":"ربيع/صيف 2025",
          "SHOP NOW":"تسوق الان",
          "Top Product Of the Week":"المنتج الأفضل لهذا الأسبوع",
          "Start Shopping":"ابدا التسوق",
          "Discover Your Next Favorite":"اكتشف مفضلتك التالية",
          "Explore Items":"استكشاف العناصر",
          "New Collection":"مجموعة جديدة",
          "We love what we do":"نحن نحب ما نقوم به",
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.":"مشاكل محاولة حل الصراع بين المجالين الرئيسيين للفيزياء الكلاسيكية: الميكانيكا النيوتونية.",
          "THE BEST SERVICES":"أفضل الخدمات",
          "Problems trying to resolve the conflict between":"مشاكل محاولة حل النزاع بين",
          "Easy Wins":"الربح السهل",
          "Get your best looking smile now!":"احصل على أجمل ابتسامة الآن!",
          "Fast Delivery":"التوصيل السريع",
          "Get your products delivered quickly!":"احصل على منتجاتك بسرعة!",
          "Secure Payment":"الدفع الامن",
           "100% secure payment methods!":"طرق دفع آمنة بنسبة 100%!",
           "Made With Love By Figmaland All Right Reserved @2026":"صُنع بكل حب من قِبل فيجمالاند. جميع الحقوق محفوظة © 2026",



          
        }
      }

    },
    
    fallbackLng: "en",

  });