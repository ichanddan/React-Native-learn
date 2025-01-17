import axios from "axios";
const url = "https://9d6a-2409-40e3-31cf-fa89-8da6-598e-a45d-affe.ngrok-free.app";


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
