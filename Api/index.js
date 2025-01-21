import axios from "axios";
const url = "https://4799-2409-40e3-3017-b089-94f9-a358-34d0-fb82.ngrok-free.app";


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
