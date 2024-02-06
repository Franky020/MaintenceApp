import axios from 'axios'

export const createReportRequest = async(report)  => 
   await axios.post("http://localhost:4000/reports", report,{
      headers: {
         'Content-Type': 'multipart/form-data',
       },
   });

export const getReportsRequest = async()  => 
   await axios.get("http://localhost:4000/reports");

export const getReportRequest = async(codigo) =>
   await axios.get(`http://localhost:4000/reports/${codigo}`);

export const deleteReportRequest = async(codigo) =>
   await axios.delete(`http://localhost:4000/reports/${codigo}`);

export const updateReportRequest = async(codigo, update) =>
   await axios.put(`http://localhost:4000/reports/${codigo}`,update);