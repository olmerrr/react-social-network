import * as axios from "axios";

const instance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers:{
    "API-KEY" : "f13429d7-49b5-4eab-b729-0b8b68d77958"}
});

export const usersAPI = {
  getUsers  (currentPage = 1, pageSize = 10) {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {
          withCredentials: true
      })
      .then(response => {
        return response.data
      }
     );
    },
    
};
