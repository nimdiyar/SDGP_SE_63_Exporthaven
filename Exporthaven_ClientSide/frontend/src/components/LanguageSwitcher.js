import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>
        English
      </button>
      <button onClick={() => changeLanguage("si")} className={i18n.language === "si" ? "active" : ""}>
        සිංහල
      </button>
    </div>
  );
};

export default LanguageSwitcher;
