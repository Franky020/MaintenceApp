import axios from 'axios'

export const createUserRequest = async(user) =>
   await axios.post("http://localhost:4000/users", user);

export const getUsersRequest = async()  => 
   await axios.get('http://localhost:4000/users');

export const getUserRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/users/${codigo}`);

export const updateUserRequest = async(codigo, updateFiles) =>
   await axios.put(`http://localhost:4000/users/${codigo}`,updateFiles);

export const deleteUserRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/users/${codigo}`);



   