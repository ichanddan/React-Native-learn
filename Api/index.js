import axios from "axios";
const url = "https://4f06-2409-40e3-300c-fed1-c08-ed84-3402-832f.ngrok-free.app";


const SignupApi = async (formdata) => {
  const data = await axios.post(`${url}/auth/register`, formdata);
  return data;
};
const LoginApi = async (formdata) => {
  const data = await axios.post(`${url}/auth/login`, formdata);
  return data;
};

export default {
    SignupApi,
    LoginApi
};
