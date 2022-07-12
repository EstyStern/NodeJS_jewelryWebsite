import axios from "axios"
import { AddUser,getUserByNameAndPass } from './CustomerAction';

// export const defaultURL = `https://localhost:44363/api/Customer/GetCustomerByNameAndPassword/`
export const defaultURL = `mongodb://localhost:27017/Jwelery_db/`

export const GetCustomerByNameAndPassword = async (dispatch, getState, CustomerName,CustomerId) => {
    try {
        debugger
        const CustomerByNameAndPassword = await axios.get(`${defaultURL}${CustomerName}/${CustomerId}`);
        await console.log(CustomerByNameAndPassword.data)
        await dispatch(getUserByNameAndPass(CustomerByNameAndPassword.data))
        return CustomerByNameAndPassword.data;
    } catch (e) {
        console.log(e)
    }
}
export const defaultURL2 = `https://localhost:44363/api/Customer/AddCustomer`

export const AddCustomer= async (dispatch, getState, c) => {
    try {
        debugger
        console.log(c);
        console.log(typeof(c.customerPassword));
        const allCustomersAfterAdding = await axios.post(defaultURL2,c);
        await console.log("all",allCustomersAfterAdding.data)
        await dispatch(AddUser(c))
        return allCustomersAfterAdding.data;
    } catch (e) {
        console.log(e)
    }
}

