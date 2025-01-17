const url = "https://7464-2409-40e3-31cf-fa89-8da6-598e-a45d-affe.ngrok-free.app";


const SignupApi = async (formdata) => {
  const data = await fetch(url + "/auth/register", {
    method: postMessage,
    body: JSON.stringify(formdata),
  });
  return data;
};

export default {
    SignupApi,
};
