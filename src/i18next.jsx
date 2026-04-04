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
          "Logout":"Logout"

          
        }
      },
       ar: {
        translation: {
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
          "Logout":"تسجيل الخروج"

          
        }
      }

    },
    
    fallbackLng: "en",

  });