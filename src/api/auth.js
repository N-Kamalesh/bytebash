import Cookies from "js-cookie";
import api from "./axios";

export const apiLogin = async (data) => {
  try {
    const response = await api.post(`/auth/signin`, data);
    console.log(response.data);
    if (!response.data.success) {
      throw Error(response.data.message);
    }
    const { message, token, user } = response.data;
    if (token) {
      Cookies.set("token", token, { secure: true, sameSite: "Strict" });
    }
    return { message, token, user };
  } catch (err) {
    if (err.status == 404) throw { message: "Regsiter before logging in." };
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

export const apiRegister = async (data) => {
  try {
    let response = await api.post(`/auth/signup`, data);
    return response.data;
  } catch (err) {
    console.error("API Error:", err); // Debugging

    if (err.response) {
      throw err.response.data; // Throw the actual error message
    }
    throw new Error("Network error, please try again.");
  }
};
