import axios from 'axios'

export const createPurchaseDetailRequest = async(purchaseDetail)  => 
   await axios.post("http://localhost:4000/purchasesDetails", purchaseDetail);

export const getPurchasesDetailRequest = async()  => 
   await axios.get("http://localhost:4000/purchasesDetails");

export const getPurchaseDetailRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/purchasesDetail/${codigo}`);

export const deletePurchaseDetailsRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/purchasesDetails/${codigo}`);

export const updatePurchaseDetailRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/purchasesDetails/${codigo}`,update);