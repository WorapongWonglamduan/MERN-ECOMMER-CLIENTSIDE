import axios from "axios";
import { path } from "./utils";

export const listUsers = async (authtoken) => {
  return await axios.get(path + "users", {
    headers: {
      authtoken,
    },
  });
};
export const changeStatus = async (authtoken, value) => {
  return await axios.post(path + "change-status", value, {
    headers: {
      authtoken,
    },
  });
};
export const changeRole = async (authtoken, value) => {
  return await axios.post(path + "change-role", value, {
    headers: {
      authtoken,
    },
  });
};
export const deleteUser = async (authtoken, id) => {
  return await axios.delete(path + "users/" + id, {
    headers: {
      authtoken,
    },
  });
};