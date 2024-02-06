import axios from 'axios'

export const createCustomerRequest = async(customer)  => 
   await axios.post("http://localhost:4000/customers", customer);

export const getCustomersRequest = async()  => 
   await axios.get("http://localhost:4000/customers");

export const getCustomerRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/customers/${codigo}`);

export const deleteCustomerRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/customers/${codigo}`);

export const updateCustomerRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/customers/${codigo}`,update);