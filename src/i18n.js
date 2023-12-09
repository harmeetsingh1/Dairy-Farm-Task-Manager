import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    debug: true, // Enable logging for debugging
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: {
          "Create Task": "Create Task",
          "See Task": "See Task",
          "Feeding Time": "Fedding Time",
          "Milking Schedule":"Milking Schedule",
          "Veterinary Appointment":"Veterinary Appointment",
          "See Tasks": "See Tasks",
          "Sr.No.": "Sr.No.",
          "Delete Task": "Delete Task",
          "Task created successfully!": "Task created successfully!",
          "Delete": "Delete",
          "Fill all the fields first!":"Fill all the fields first!"


        },
      },
      hi: {
        translation: {
            "Create Task": "कार्य बनाएँ",
            "See Task": "कार्य देखें",
            "Feeding Time": "भोजन का समय",
            "Milking Schedule":"दूध दुहने का कार्यक्रम",
            "Veterinary Appointment":"पशु चिकित्सा नियुक्ति",
            "See Tasks": "कार्य देखें",
            "Sr.No.": "क्रमांक",
            "Delete Task": "कार्य हटाएँ",
            "Task created successfully!": "कार्य सफलतापूर्वक बनाया गया",
            "Delete": "हटाएँ",
            "Fill all the fields first!":"पहले सभी फ़ील्ड भरें"

        },
      },
    },
  });

export default i18n;
