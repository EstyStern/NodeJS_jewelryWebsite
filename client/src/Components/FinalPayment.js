import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default withRouter(function FinalPayment(props) {
    //גישה לתשובת השרת מהסטור להוספת סל קניות
    const answerServerAboutAddCart = useSelector((store) => {
        debugger;
        console.log(store.content.answerServerAboutAddCart);
        return store.content.answerServerAboutAddCart;
    })
    console.log("answerServerAboutAddCart", answerServerAboutAddCart);
    //תצוגת סיום קניה
    function FuncSend() {
        props.history.push({ pathname: "/Nav2/Send" })
    }
    return <>
        <h1 style={{ marginLeft: "230px" }}>payment</h1>
        {/* //טופס תשלום */}
        <div style={{ marginLeft: "230px" }} class="col-75">
            <div class="w3-container w3-card-4">
                <form action="/action_page.php" >

                    <div class="row">
                        <div class="col-50">
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Please Enter Full Name!" />
                            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="Please Enter Email!" />
                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="Please Enter Address!" />
                            <label for="city"><i class="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="Please Enter City!" />

                            <div class="row">
                                <div class="col-50">
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="State" />
                                </div>
                                <div class="col-50">
                                    <label for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="Please Enter Zip!" />
                                </div>
                            </div>
                        </div>

                        <div class="col-50">
                            <div class="icon-container">
                                <i class="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                <i class="fa fa-cc-discover" style={{ color: "blue" }}></i>
                            </div>
                            <label for="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="Please Enter Name on Card!" />
                            <label for="ccnum">Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="Please Enter Credit card number!" />
                            <label for="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="Please Enter Month!" />

                            <div class="row">
                                <div class="col-50">
                                    <label for="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="Please Enter Year!" />
                                </div>
                                <div class="col-50">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="CVV" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <label>
                        <input type="checkbox" checked="checked" name="sameadr" />
                    </label>
                    <button onClick={() => FuncSend()} type="submit" className="w3-btn w3-blue">Pay</button>
                </form>
            </div>
        </div>
    </>
})