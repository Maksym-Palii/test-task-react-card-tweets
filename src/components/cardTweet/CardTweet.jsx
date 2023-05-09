import css from "./CardTweet.module.css";
import LogoImg from "../../img/logo.png";
import imgBackground from "../../img/imgBackground.png";
import { useEffect, useRef } from "react";

const CardTweet = ({ users, setUser }) => {
  const handleButton = (evt) => {
    evt.currentTarget.classList.toggle(css.activeBtn);
    const text = evt.currentTarget.textContent;
    if (text === "Follow") {
      evt.currentTarget.textContent = "Following";
    }
    if (text === "Following") {
      evt.currentTarget.textContent = "Follow";
    }

    const idUser = evt.currentTarget.id;

    setUser((prevState) =>
      prevState.map((el) =>
        el.id === idUser
          ? {
              ...el,
              followers:
                text === "Follow" ? el.followers + 1 : +(el.followers - 1),
            }
          : el
      )
    );
  };

  const LS_KEY = "users";
  const firstRender = useRef(true);

  useEffect(() => {
    const usersLS = JSON.parse(localStorage.getItem(LS_KEY));
    if (usersLS) {
      setUser(usersLS);
    }
  }, [setUser]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem(LS_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <>
      {users.length > 0 &&
        users.map((el) => (
          <li key={el.id} className={css.container}>
            <img className={css.logo} src={LogoImg} alt="logo go it" />
            <img className={css.bgImg} src={imgBackground} alt="" />
            <div className={css.containerImg}>
              <div className={css.containerBorder}>
                <div className={css.containerFoto}>
                  <img src={el.avatar} alt="character" />
                </div>
              </div>
            </div>
            <div className={css.hrLine}></div>

            <div className={css.containerText}>
              <p className={css.text}>{el.tweets} tweets</p>
              <p className={css.text}>{el.followers} followers</p>
              <button
                id={el.id}
                onClick={handleButton}
                type="button"
                className={css.btn}
              >
                Follow
              </button>
            </div>
          </li>
        ))}
    </>
  );
};

export default CardTweet;
