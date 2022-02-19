import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID QIV2Swp6yNXPwQO4MDCSSRyQNgeSNSVboZ24a0TXE5s",
  },
});
