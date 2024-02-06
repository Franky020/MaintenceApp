import axios from 'axios'

export const createSaleDetailRequest = async(saleDetail)  => 
   await axios.post("http://localhost:4000/salesDetails", saleDetail);

export const getSalesDetailRequest = async()  => 
   await axios.get("http://localhost:4000/salesDetails");

export const getSaleDetailRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/salesDetails/${codigo}`);

export const deleteSaleDetailRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/salesDetails/${codigo}`);

export const updateSaleDetailRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/salesDetails/${codigo}`,update);