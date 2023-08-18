import React, { useState } from "react";
import "./styles.css";

function Calculator() {
  const [pages, setPages] = useState(1);
  const [features, setFeatures] = useState(1);
  const [platform, setPlatform] = useState("Wordpress");
  const [design, setDesign] = useState("Шаблонный");

  const pagesChange = (event) => {
    setPages(event.target.value);
  };

  const featuresChange = (event) => {
    setFeatures(event.target.value);
  };

  const platformChange = (event) => {
    setPlatform(event.target.value);
  };
  const designChange = (event) => {
    setDesign(event.target.value);
  };

  let total = 2000 + pages * 500 + features * 1500;

  if (platform === "Joomla") {
    total += 1000;
  }
  if (platform === "Drupal") {
    total += 1500;
  }
  if (platform === "Индивидуальная") {
    total += 5000;
  }

  if (design === "Шаблонный 2") {
    total += 1300;
  }

  if (design === "Индивидуальный") {
    total += 5000;
  }

  return (
    <div className="calculator">
      <h1>Калькулятор стоимости сайта</h1>
      <p>Количество страниц:</p>
      <input
        className="input"
        type="number"
        value={pages}
        onChange={pagesChange}
      />

      <p>Количество функций:</p>
      <input
        className="input"
        type="number"
        value={features}
        onChange={featuresChange}
      />

      <p>Выбор CMS:</p>
      <select className="input" value={platform} onChange={platformChange}>
        <option value="Wordpress">Wordpress</option>
        <option value="Joomla">Joomla</option>
        <option value="Drupal">Drupal</option>
        <option value="Индивидуальная">Индивидуальная</option>
      </select>

      <p>Дизайн страниц:</p>
      <select className="input" value={design} onChange={designChange}>
        <option value="Шаблонный">Шаблонный</option>
        <option value="Шаблонный 2">Шаблонный 2</option>
        <option value="Индивидуальный">Индивидуальный</option>
      </select>

      <h2>Итого: {total} рублей</h2>
    </div>
  );
}

export default Calculator;
