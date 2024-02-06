import axios from 'axios'

export const loginRequest = async(data) =>
   await axios.post(`http://localhost:4000/login`,data);