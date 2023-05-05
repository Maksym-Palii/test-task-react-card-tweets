import css from "./CardTweet.module.css";
import LogoImg from "../../img/logo.png";
import imgBackground from "../../img/imgBackground.png";
import fotoHansel from "../../img/Hansel.png";

const CardTweet = () => {
  return (
    <div className={css.container}>
      <img className={css.logo} src={LogoImg} alt="logo go it" />
      <img className={css.bgImg} src={imgBackground} alt="" />
      <div className={css.containerImg}>
        <div className={css.containerBorder}>
          <div className={css.containerFoto}>
            <img src={fotoHansel} alt="character" />
          </div>
        </div>
      </div>
      <div className={css.hrLine}></div>

      <div className={css.containerText}>
        <p className={css.text}>777 tweets</p>
        <p className={css.text}>100,500 followers</p>
        <button className={css.btn}>Follow</button>
      </div>
    </div>
  );
};

export default CardTweet;
