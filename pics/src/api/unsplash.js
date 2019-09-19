import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9e6e08e6275fe9d96d5a4141abf859f6683352bc0889ad53fd8aae5ef4f78dae"
  }
});
