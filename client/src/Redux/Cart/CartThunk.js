import axios from "axios";
import {AddNewCart} from './CartAction';

export const defaultURL = `https://localhost:44363/api/Cart`;

export const PostCartPerUserToServer = async (dispatch,Cart,IdUser) => {
    try {
        debugger;
        const CartFromServer = await axios.post(`${defaultURL}/AddToCart/${IdUser}`,Cart);
        await console.log(CartFromServer.data)
        await dispatch(AddNewCart(CartFromServer.data))
        return CartFromServer.data;
    } catch (e) {
        console.log(e)
    }
}