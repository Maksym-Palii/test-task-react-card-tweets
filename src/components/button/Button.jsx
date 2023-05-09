import css from "./Button.module.css";

export const Button = ({ nextPage, user }) => {
  if (user.length > 0 && user.length < 12) {
    return (
      <button onClick={nextPage} className={css.button} type="button">
        Load more
      </button>
    );
  }
};
