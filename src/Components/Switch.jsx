import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactSwitch from "react-switch";

function Switch() {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (lng) => {
    console.log(`Changing language to ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="mb-5 flex ml-40">
        <ReactSwitch
          checked={selectedLanguage === "en"}
          onChange={(nextChecked) => {
            const newLanguage = nextChecked ? "en" : "hi";
            setSelectedLanguage(newLanguage);
            handleLanguageChange(newLanguage);
          }}
          handleDiameter={28}
          offColor="#d9d9d9"
          onColor="#d9d9d9"
          offHandleColor="#4d4d4d"
          onHandleColor="#4d4d4d"
          height={40}
          width={100}
          borderRadius={40}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "black",
                paddingRight: 5,
              }}
            >
              Hindi
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "black",
                paddingLeft: 5,
              }}
            >
              English
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </div>
    </div>
  );
}

export default Switch;
