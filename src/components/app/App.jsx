import React, { useState, useEffect, useRef } from "react";
import { fetchCat } from "../../services/catService";
import Header from "../header/Header";
import CatCard from "../catCard/CatCard";
import styles from "./App.module.scss";

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const intervalRef = useRef(null);

  const loadNewCat = async () => {
    if (!enabled) return;

    setLoading(true);
    try {
      const newCat = await fetchCat();
      setCat(newCat);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (enabled && autoRefresh) {
      intervalRef.current = setInterval(loadNewCat, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [enabled, autoRefresh]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <div className={styles.checkboxes}>
          <label>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            Enabled
          </label>
          <label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              disabled={!enabled}
            />
            Auto-refresh every 5 seconds
          </label>
        </div>

        <button
          className={styles.button}
          onClick={loadNewCat}
          disabled={!enabled || loading}
        >
          {loading ? "Загрузка..." : "Показать новую кошку"}
        </button>

        {cat && <CatCard url={cat.url} loadNewCat={loadNewCat} />}
      </div>
    </div>
  );
}

export default App;
