import axios from "axios";

export default axios.create({
  baseURL: "https://todo-app-portfolio-donny.herokuapp.com",
  // baseURL: 'http://localhost:3001',
});
