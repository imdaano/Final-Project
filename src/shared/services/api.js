import axios from 'axios';

const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export const API = axios.create({
    baseURL: "https://backend-final-project-flame.vercel.app/",
    timeout: 5000,
    headers: APIHeaders
});


const APIHeaders2 = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export const API2 = axios.create({
    baseURL: "https://backend-final-project-flame.vercel.app/",
    timeout: 5000,
    headers: APIHeaders2
});