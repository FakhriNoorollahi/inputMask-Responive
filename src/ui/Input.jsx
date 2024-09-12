import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./Input.module.css";

const Input = ({ handleChange, value, hint }) => {
  return (
    <div
      className={`${styles.input} ${!hint.length ? styles.inputBorder : ""}`}
    >
      <div className={styles.inputLabel}>
        <label htmlFor="input">{hint[0]}</label>
        <input
          type="text"
          id="input"
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      <MagnifyingGlassIcon className={styles.icon} />
    </div>
  );
};

export default Input;
