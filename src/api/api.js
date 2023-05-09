import axios from "axios";

axios.defaults.baseURL = `https://644175a1792fe886a8a82ed8.mockapi.io`;
axios.defaults.params = {
  limit: 3,
};

export const getTweets = async (page) => {
  const config = {
    params: {
      page: page,
    },
  };

  try {
    const res = await axios.get("/users", config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
