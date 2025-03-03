const languages = {
    en: {
      welcome: "Welcome",
      login: "Login"
    },
    si: {
      welcome: "සාදරයෙන් පිළිගනිමු",
      login: "ලොගින් වන්න"
    },
    ta: {
      welcome: "வரவேற்பு",
      login: "உள்நுழைக"
    }
  };
  
  exports.translate = (key, lang = "en") => {
    return languages[lang][key] || key;
  };
  