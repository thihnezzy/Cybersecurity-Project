import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const signup = (username, password) => {
  return axios
    .post(API_URL + "/register", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/login", {
      username,
      password,
    })
    .then((response) => {
        console.log(response);
        if (response.data.user) {
            localStorage.setItem("token", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;