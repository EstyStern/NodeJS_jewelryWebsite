import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteItemFromCart, UpdateItemInCart } from '../Redux/Cart/CartAction';
import { PostCartPerUserToServer } from '../Redux/Cart/CartThunk';

export default withRouter(function FormPay(props) {
    const dispatch = useDispatch();

    //שליפת סל קניות מהסטור
    //ההוספה לסל קניות בסטור נעשתה ע''י הוסף לסל
    const myCart = useSelector((store) => {
        console.log('ProdForCart!!!!!!', store.content.ProdForCart);
        return store.content.ProdForCart;
    })

    //שליפת מחיר סופי לקנייה מהסטור
    //totalPricePerBuying from reducer
    // educerעריכתו ב
    //בעת מחיקה או עדכון
    const totalPricePerBuying = useSelector((store) => {
        console.log('totalPricePerBuying', store.content.totalPricePerBuying);
        return store.content.totalPricePerBuying;
    })

    // שליפת תשובת השרת להוספת סל קניות מהסטור
    const answerServerAboutAddCart = useSelector((store) => {
        console.log(store.content.answerServerAboutAddCart);
        return store.content.answerServerAboutAddCart;
    })

    //שליפת לקוח נוכחי מהסטור
    const corentUser = useSelector((store) => {
        if (store.content.corentUser != undefined) {
            console.log('corentUser', store.content.corentUser);
            return store.content.corentUser;
        }
        else {
            console.log("error");
            return "error"
        }
    })

    //פונקצייה לחישוב הכמות מחדש עפ''י שינוי המשתמש
    function funcToAmountByInput(e, index) {
        // e.preventDefault();
        //ערך הכמות משדה הקלט
        const count = Number(e.target.value);
        if (count == 0) {//הלקוח מעוניין למחוק
            debugger;
            // DeleteItemFromCart הפעלת האקשן 
            //שליחת האינדקס של הפריט בסל קניות
            dispatch(DeleteItemFromCart(index))
        }
        else {//הלקוח מעוניין לעדכן כמות
            // UpdateItemInCart הפעלת האקשן 
            dispatch(UpdateItemInCart(count, index))
        }
    }
    //פונקצייה המופעלת בעת שמירת הנתונים בסל קניות
    //מקבל סל קניות ולקוח שביצע את הקנייה
    //PostCartPerUserToServer מבצע קריאת שרת  
    const CheckCart = async (myCart, corentUser) => {
        debugger;
        let CartFromsServer = await PostCartPerUserToServer(dispatch, myCart, corentUser.customerId)
        console.log("CartFromsServer", CartFromsServer);
    }

    // ניתוב לתשלום
    const FuncPayment = async () => {
        debugger;
        props.history.push({ pathname: "/Nav2/FinalPayment" });
    }

    return <>
        <h1 style={{ marginTop: '0px', marginLeft: "230px" }}>Cart</h1>
        <b style={{ marginTop: '0px', marginLeft: "230px" }} class="App-link" >{myCart.length} Item In Your Cart</b>
        <div style={{ marginTop: '0px', marginLeft: "230px" }} class="w3-container w3-card-4">
            {/* //סל הקניות */}
            <table >
                <tr class="w3-black">
                    <th>Jewelry Id</th>
                    <th>Jewelry Name</th>
                    <th>Price Per Unit</th>
                    <th>Amount</th>
                    <th>total Price</th>
                </tr>
                {/* מיפוי  הנתונים של סל הקניות מהסטור */}
                {
                    myCart.map((item, index) =>//מקבל את התכשיט ואת המיקום שלו בסל
                        <>
                            {console.log("index", index)}
                            <tr class="w3-hover-gray">
                                <td>{item.idJewelry}</td>
                                <td>{item.nameJewelry}</td>
                                <td>{item.pricePerUnit}</td>
                                {/* funcToAmountByInput בעת שינוי הכמות שליחה לפונקצייה */}
                                <input type="number" min="0" value={item.amount} onChange={(e) => funcToAmountByInput(e, index)}></input>
                                <td>{item.totalPrice}</td>
                                {/* הוספת הערה ליד כל מוצר שחסר במלאי  */}
                                {/* עפ''י תשובת השרת מהסטור */}
                                {answerServerAboutAddCart != "" ? answerServerAboutAddCart[index] ? <label></label> : <label style={{ color: "red" }}>חסר במלאי</label> : <label></label>}
                            </tr>
                        </>
                    )
                }
                <hr />
                <p class="App-link">Total <span class="App-link" style={{ color: "black" }}><b>{totalPricePerBuying}</b></span></p>
            </table>
            {/* שליחת סל הקניות וקוד משתמש לשרת */}
            <button onClick={() => CheckCart(myCart, corentUser)} type="submit" style={{ marginRight: "30px" }} className="w3-btn w3-white">Save</button><br></br><br></br>
            {/* הדפסת חשבונית */}
            <button onClick={() => window.print()} type="submit" className="w3-btn w3-blue">Print Cart</button>
            {/* //מעבר לתשלום */}
            <button onClick={() => FuncPayment(myCart, corentUser)} type="submit" style={{ marginLeft: "30px" }} className="w3-btn w3-blue">Payment</button>
        </div>

    </>
})