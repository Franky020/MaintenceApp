import axios from 'axios'

export const createOrderSaleRequest = async(orderSale)  => 
   await axios.post("http://localhost:4000/orderSales", orderSale, {
      headers: {
         'Content-Type': 'multipart/form-data',
       },
   },console.log(orderSale));

export const getOrderSalesRequest = async()  => 
   await axios.get("http://localhost:4000/orderSales");

export const getOrderSaleRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/orderSales/${codigo}`);

export const deleteOrderSaleRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/orderSales/${codigo}`);

export const updateOrderSaleRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/orderSales/${codigo}`,update);