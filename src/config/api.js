import axios from "axios";

export default axios.create({
  baseURL: "https://todo-app-rn-server.herokuapp.com/",
});
