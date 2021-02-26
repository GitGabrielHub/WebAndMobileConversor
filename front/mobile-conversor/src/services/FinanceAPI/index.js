import axios from "axios";

const runInAVD = true;
const localHost = runInAVD ? "10.0.2.2" : "YOUR IP ADRESS";

const instance = axios.create({
  baseURL: `http://${localHost}:3333/conversor`,
});

export default instance;
