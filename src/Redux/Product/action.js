import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async () =>{
        const productsData = await fetch("http://localhost:5001/getProducts")
        .then((res)=>res.json());
        return productsData;
    }
)