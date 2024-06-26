import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

//Img
import one from "../../Assets/For Footer/logo1.jpg";
import two from "../../Assets/For Footer/logo2.jpg";
import three from "../../Assets/For Footer/logo3.jpg";
import four from "../../Assets/For Footer/logo4.jpg";
import five from "../../Assets/For Footer/logo5.png";
import six from "../../Assets/For Footer/logo6.png";
import seven from "../../Assets/For Footer/logo7.jpg";
import eight from "../../Assets/For Footer/logo8.png";
import nine from "../../Assets/For Footer/logo9.jpeg";
import ten from "../../Assets/For Footer/logo10.jpg";

//Social Icons
import vk from "../../Assets/SocialIcons/vk-icon.svg";
import tg from "../../Assets/SocialIcons/telegram-icon.svg";
import wa from "../../Assets/SocialIcons/whatsapp-icon.svg";

export const Footer = () => {
  return (
    <section>
      <div className={styles.main}>
        <div>
          <div className={styles.imgBlock}>
            <img className={styles.logo} src={one} alt="logo" />
            <img className={styles.logo} src={two} alt="logo" />
            <img className={styles.logo} src={three} alt="logo" />
            <img className={styles.logo} src={four} alt="logo" />
            <img className={styles.logo} src={five} alt="logo" />
          </div>

          <h1>
            <hr />
            <Link className={styles.link} to={"/"}>
              Meme <br /> Archivarius <br />
            </Link>

            <hr />
          </h1>

          <div className={styles.imgBlock}>
            <img className={styles.logo} src={six} alt="logo" />
            <img className={styles.logo} src={seven} alt="logo" />
            <img className={styles.logo} src={eight} alt="logo" />
            <img className={styles.logo} src={nine} alt="logo" />
            <img className={styles.logo} src={ten} alt="logo" />
          </div>
        </div>

        <div className={styles.textBlock}>
          Данный сайт является архивом смешных картинок, которые были взяты из
          открытых источников и не являются зарегистророванным товаром. Я
          признателен создателям данных мемов, и выражаю благодарность всему
          интернет сообществу за креативность и безмерно весёлую движуху,
          создаваемую самыми простыми людьми со всех уголков нашей прекрасной
          планеты! Всем добра и АминЬ!
        </div>

        <div className={styles.socialBlock}>
          <Link to={"/"}>
            <img src={wa} alt="icon" />
          </Link>
          <Link to={"/"}>
            <img src={tg} alt="icon" />
          </Link>
          <Link to={"/"}>
            <img src={vk} alt="icon" />
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        sience 2024 <br />
        Designed by{" "}
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"https://github.com/Skoll57"}
          target="_blank"
        >
          Skoll57
        </Link>
      </div>
    </section>
  );
};
