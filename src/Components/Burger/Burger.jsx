import React, { useState } from "react";
import "./Burger.css"; // Подключаем файл стилей

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="burger-menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="burger-icon" onClick={handleMenuClick}>
        ☰
      </div>
      {isOpen && (
        <div className="menu-links-container">
          <div className="menu-links">
            <a href="#">Ссылка 1</a>
            <a href="#">Ссылка 2</a>
            <a href="#">Ссылка 3</a>
            <a href="#">Ссылка 4</a>
            <a href="#">Ссылка 5</a>
            <a href="#">Ссылка 6</a>
          </div>
        </div>
      )}
    </div>
  );
};
