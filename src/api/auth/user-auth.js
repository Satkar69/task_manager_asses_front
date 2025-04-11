import endpoints from "../endpoints";
import api from "../axios";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post(endpoints.auth.user.login, credentials);
    return response.data;
  } catch (error) {
    // Check if the error has a response from the server
    if (error.response) {
      // Extract the error message from the devException format
      const errorData = error.response.data;
      const errorMessage =
        errorData.message || "Login failed. Please check your credentials.";

      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      throw new Error("Error setting up request: " + error.message);
    }
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await api.post(endpoints.auth.user.register, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Extract the error message from the devException format
      const errorData = error.response.data;
      const errorMessage =
        errorData.message || "Login failed. Please check your credentials.";

      // You can also access other properties if needed
      // const statusCode = errorData.statusCode;
      // const stackTrace = errorData.stackTrace;

      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      throw new Error("Error setting up request: " + error.message);
    }
  }
};
