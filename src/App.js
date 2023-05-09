// import CardTweet from "./components/cardTweet/CardTweet";
import CardTweetList from "./components/listCardTweet/ListCardTweet";

import css from "./App.module.css";
import cssBtn from "./components/cardTweet/CardTweet.module.css";
import { Button } from "./components/button/Button";
import { useEffect, useState } from "react";
import { getTweets } from "./api/api";

function App() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  // const curentUser = (data) => setUser((prevUser) => [...prevUser, ...data]);

  useEffect(() => {
    const users = async () => {
      const data = await getTweets(page);

      // curentUser(data);
      setUser([...user, ...data]);
    };
    users();
  }, [page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // const addFolovers = () => {
  //   if (user.length === 0) {
  //     return;
  //   }
  //   console.log(user);
  // };

  return (
    <div className={css.container}>
      <CardTweetList
        user={user}
        setUser={setUser}
        // addFolovers={addFolovers}
      />
      <Button nextPage={nextPage} user={user} />
    </div>
  );
}

export default App;
