import axios from 'axios'

export const createAdminRequest = async(user) =>
   await axios.post("http://localhost:4000/admins", user);

export const getAdminsRequest = async()  => 
   await axios.get('http://localhost:4000/admins');

export const getAdminRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/admins/${codigo}`);

export const deleteAdminRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/admins/${codigo}`);

export const updateAdminRequest = async(codigo, updateFiles) =>
   await axios.put(`http://localhost:4000/admins/${codigo}`, updateFiles);