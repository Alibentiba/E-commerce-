import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-b7977.cloudfunctions.net/api",
  //"http://localhost:5001/clone-b7977/us-central1/api",
});
export default instance;
