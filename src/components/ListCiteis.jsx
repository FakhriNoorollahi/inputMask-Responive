import React from "react";
import styles from "./ListCities.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

function ListCiteis({
  suggestedCities: cities,
  setCopiedText,
  setSuggestedCities,
}) {
  return (
    <ul className={`${styles.listCiteis} ${cities.length ? styles.show : ""}`}>
      {cities.map((city) => (
        <CopyToClipboard
          key={city}
          onCopy={() => {
            setSuggestedCities([]);
          }}
          text={city}
        >
          <li onClick={() => setCopiedText(city)}>{city}</li>
        </CopyToClipboard>
      ))}
    </ul>
  );
}

export default ListCiteis;
