import axios from "axios"
import { useDispatch } from "react-redux"
import { LoadJewelry,AddAProdToCart} from './JewelryAction';
import { useState } from "react";


export const defaultURL = `https://localhost:44363/api/Jewelry`

export const GetAllJewelry = async (dispatch, getState) => {
    debugger;
    try {
        debugger;
        const allJewelrys = await axios.get(`${defaultURL}/GetAllJewelry`);
        await console.log(allJewelrys.data)
        await dispatch(LoadJewelry(allJewelrys.data))
        return allJewelrys.data;
    } catch (e) {
        console.log(e)
    }
}

export const AddJewelry= async (dispatch, getState, J) => {
    debugger;
    try {
        debugger;
        const allJewelrysAfterAdding = await axios.post(`${defaultURL}/AddJewelry`,J);
        await console.log(allJewelrysAfterAdding.data)
        await dispatch(LoadJewelry(J))
        return allJewelrysAfterAdding.data;
    } catch (e) {
        console.log(e)
    }
}

export const RemoveJewelryById = async (dispatch, getState, id) => {
    try {
        debugger
        const JewelryByCode = await axios.delete(`${defaultURL}/RemoveJewelryById/${id}`);
        await console.log(JewelryByCode.data)
        await dispatch(LoadJewelry(JewelryByCode.data))
        return JewelryByCode.data;
    } catch (e) {
        console.log(e)
    }

}

export const getJewelryById = async (dispatch, getState, id) => {
    try {
        debugger
        const JewelryByCode = await axios.get(`${defaultURL}/getJewelryById/${id}`);
        await console.log(JewelryByCode.data)
        await dispatch(LoadJewelry(JewelryByCode.data))
        return JewelryByCode.data;
    } catch (e) {
        console.log(e)
    }
}

export const getJewelrysByCodeCategory = async (dispatch, getState, CodeCategory) => {
    try {
        debugger
        const JewelryByCodeCategory = await axios.get(`${defaultURL}/getJewelrysByCodeCategory/${CodeCategory}`);
        await console.log(JewelryByCodeCategory.data)
        await dispatch(LoadJewelry(JewelryByCodeCategory.data))
        return JewelryByCodeCategory.data;
    } catch (e) {
        console.log(e)
    }
}

let urlToAddToCart=`https://localhost:44363/api/Cart/AddToCart/`
export const AddToCart= async(dispatch, getState, id, c)=>{
    try{
        debugger;
        const AddMe= await axios.post(`${urlToAddToCart}${id}`,c)
        await console.log(AddMe.data);
        return AddMe.data
    }catch(e){
        console.log(e);
    }
}



