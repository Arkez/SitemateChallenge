import axios from "axios";

const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + '183daca270264bad86fc5b72972fb82a',
    },
    baseURL:'https://newsapi.org/v2'
  }
  
  export const API = axios.create(requestOptions)