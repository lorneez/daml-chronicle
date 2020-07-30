import axios from "axios";
import { validateAuthentication } from "./localStorage.js";

const client = axios.create({
  baseURL: "https://localhost:3000/",
  headers: { "Access-Control-Allow-Origin": "*" }
});


// Interceptor
// Add authentication token to each request
const requestHandler = request => {
  if (validateAuthentication()) {
    console.log("AXIOS CLIENT INTERCEPTOR - Auth valid.");
    return request;
  }
  else {
    return request;
  }
};

client.interceptors.request.use(request => requestHandler(request));

export default client;
