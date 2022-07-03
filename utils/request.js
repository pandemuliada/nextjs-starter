import logtail from "@/services/logtail";
import axios from "axios";

const api = () => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

  const instance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle log on client side (+ handle if logtail env doesn't exist)
      logtail()?.error(error.code, {
        ...error,
      });
      return Promise.reject(error);
    }
  );

  return instance;
};

export { api };
