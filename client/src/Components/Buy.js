import { useDispatch, useSelector } from 'react-redux';
import { AddAProdToCart } from '../Redux/Jewelry/JewelryAction';
import { withRouter } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { GetAllJewelry } from '../Redux/Jewelry/JewelryThunk';

export default withRouter(function Buy(props) {
    const dispatch = useDispatch();

    //גישה לכל התכשיטים מהסטור
    
    let [chars, setChars] = useState([]);

    useEffect(async () => {
        try{ 
          let response = await GetAllJewelry(dispatch, "");
          let data = await response;
          setChars(data);
        } catch(error) {
           console.error(error.message);
        }
      },[]);

    // let allMyJewelrysFromStore = useSelector((store) => {
    //     if (store.content.Jewelrys != undefined) {
    //         console.log("FromStore", store.content.Jewelrys);
    //         console.log(store);
    //         return store.content.Jewelrys;
    //     }
    //     else {
    //         console.log("error");
    //         return "error"
    //     }
    // })

    // גישה למשתמש הנוכחי מהסטור
    const corentUser = useSelector((store) => {
        if (store.content.corentUser != undefined) {
            debugger;
            console.log('corentUser', store.content.corentUser);
            return store.content.corentUser;
        }
        else {
            console.log("error");
            return "error"
        }
    })
    //פונקצייה המנווטת לקומפוננטת פרטים על המוצר , הפונקצייה מקבלת את המוצר 
    function funcMore(item) {
        console.log(item);
        debugger;
        props.history.push({ pathname: "/Nav2/MoreDetails", props: item });
    }
    // פונקצייה המקבלת תכשיט ויוצרת אובייקט חדש עבור ההוספה לסל קניות
    // ושולחת לו את האוס=בייקט המתקבלAddAProdToCart ומפעילה את האקשן 
    const myCartFunc = (item) => {
        debugger;
        console.log("corentUser", corentUser);
        let myItem = {
            idCust: corentUser.customerId,
            idJewelry: item.jewelryId,
            nameJewelry: item.jewelryName,
            pricePerUnit: item.jewelryPrice,
            totalPrice: item.jewelryPrice,
            amount: 1,
        }
        dispatch(AddAProdToCart(myItem))
        alert('Add To Cart!')
    }

    return <>
        <div className='App-header2'>
            <h1 style={{ marginLeft: "230px" }}>My buing</h1>
            {/* מיפוי הנתונים מהסטור */}
            {
                chars && chars.map((item) => {
                    //bracelet
                    if (item.codeCategory == 1) {
                        return (
                            <div style={{ marginLeft: "250px", display: "inline-block" }}  >
                                <div className="section"
                                    onClick={() => funcMore(item)}
                                >
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/bracelet/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label><br></br>
                                    <button onClick={() => funcMore(item)} class="w3-button w3-black">More Details... <i class="fa fa-shopping-cart"></i></button>
                                    <button onClick={() => myCartFunc(item)} class="w3-button w3-black">Buy me! <i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        )
                    }
                    //Earring
                    if (item.codeCategory == 3) {
                        return (
                            <div style={{ marginLeft: "250px", display: "inline-block" }}>
                                <div className="section"
                                    onClick={() => funcMore(item)}
                                >
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Earring/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label><br></br>
                                    <button onClick={() => funcMore(item)} class="w3-button w3-black">More Details... <i class="fa fa-shopping-cart"></i></button>
                                    <button onClick={() => myCartFunc(item)} class="w3-button w3-black">Buy me! <i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        )
                    }
                    //Cheins
                    if (item.codeCategory == 4) {
                        return <>
                            <div style={{ marginLeft: "250px", display: "inline-block" }}  >
                                <div className="section"
                                    onClick={() => funcMore(item)}
                                >
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Cheins/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label><br></br>
                                    <button onClick={() => funcMore(item)} class="w3-button w3-black">More Details... <i class="fa fa-shopping-cart"></i></button>
                                    <button onClick={() => myCartFunc(item)} class="w3-button w3-black">Buy me! <i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        </>
                    }
                    //Ring
                    if (item.codeCategory == 2) {
                        return <>
                            <div style={{ marginLeft: "250px", display: "inline-block" }}  >
                                <div className="section"
                                    onClick={() => funcMore(item)}
                                >
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Ring/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label><br></br>
                                    <button onClick={() => funcMore(item)} class="w3-button w3-black">More Details... <i class="fa fa-shopping-cart"></i></button>
                                    <button onClick={() => myCartFunc(item)} class="w3-button w3-black">Buy me! <i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div></>
                    }
                })
            }</div>
    </>
})