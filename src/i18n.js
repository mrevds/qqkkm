import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";
import kk from "./locales/kk.json";

const savedLanguage = localStorage.getItem("language") || "ru"; // Загружаем сохранённый язык

i18n.use(initReactI18next).init({
    resources: {
        ru: { translation: ru },
        uz: { translation: uz },
        kk: { translation: kk }
    },
    lng: savedLanguage, // Устанавливаем язык из `localStorage`
    fallbackLng: "ru",
    interpolation: { escapeValue: false }
});

export default i18n;
