import css from "./ListCardTweet.module.css";
import CardTweet from "../cardTweet/CardTweet";

const CardTweetList = ({ user, setUser }) => {
  return (
    <ul className={css.container}>
      <CardTweet users={user} setUser={setUser} />
    </ul>
  );
};

export default CardTweetList;
