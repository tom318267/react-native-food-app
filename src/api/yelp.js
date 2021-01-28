import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xIJQJ9r-Nlb7mkr5Rqf0mtNtXAXqYGaO07q7FGxUci5M4TqrNHCwJA2QfWB5_F7jQRuvjRf-squEGe317sz8YLvzw1lQzQOELmFiURY9yAddGeJIL6_1QsTt81sQYHYx",
  },
});
