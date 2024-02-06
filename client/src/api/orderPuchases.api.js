import axios from 'axios'

export const createOrderPurchaseRequest = async(orderPurchase)  => 
   await axios.post("http://localhost:4000/orderPurchases", orderPurchase, {
      headers: {
         'Content-Type': 'multipart/form-data',
       },
   });

export const getOrdersPurchaseRequest = async()  => 
   await axios.get("http://localhost:4000/orderPurchases");

export const getOrderPurchaseRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/orderPurchases/${codigo}`);

export const deleteOrderPurchaseRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/orderPurchases/${codigo}`);

export const updateOrderPurchaseRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/orderPurchases/${codigo}`,update);