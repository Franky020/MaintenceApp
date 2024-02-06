import axios from 'axios'

export const createSupplierRequest = async(supplier)  => 
   await axios.post("http://localhost:4000/suppliers", supplier);

export const getSuppliersRequest = async()  => 
   await axios.get("http://localhost:4000/suppliers");

export const getSupplierRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/suppliers/${codigo}`);

export const deleteSupplierRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/suppliers/${codigo}`);

export const updateSupplierRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/suppliers/${codigo}`,update);