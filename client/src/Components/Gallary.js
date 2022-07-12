import { useDispatch, useSelector } from 'react-redux';
import { useEffect ,useState} from 'react';
import { GetAllJewelry } from '../Redux/Jewelry/JewelryThunk';
import axios from 'axios';

export const Gallary = () => {
    const dispatch = useDispatch();

    //טעינת התכשיטים בעת טעינת הקומפוננטה
    // useEffect(async () => {
    //     debugger;
    //     let v = await GetAllJewelry(dispatch, "");
    //     console.log(v);
    // }, [])

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

    //allMyJewelrysFromStore שליפת התכשיטים מהסטור והצבתם במשתנה
    let allMyJewelrysFromStore = useSelector((store) => {
        if (store.content.Jewelrys != undefined) {
            console.log("FromStore", store.content.Jewelrys);
            console.log(store);
            return store.content.Jewelrys;
        }
        else {
            console.log("error");
            return "error"
        }
    })
    console.log("allMyJewelrysFromStore", allMyJewelrysFromStore);

    return <>


        <div className="App-header2">
            <h1 style={{ marginLeft: "250px" }}>Our Gallery</h1>
            <div class="w3-text-black" style={{ marginLeft: "250px" }}>
                <p>{`${allMyJewelrysFromStore.length} items`}</p>
            </div>
            {
                //מיפוי הנתונים מהסטור
                // allMyJewelrysFromStore && allMyJewelrysFromStore.map((item) => {
                chars && chars.map((item) => {

                    debugger;
                    //bracelet
                    //codeCategory == 1
                    if (item.codeCategory == 1) {
                        return <>
                            <div style={{ marginLeft: "250px", display: "inline-block" }}  >
                                {/* הצגת תמונה מהשרת */}
                                <div className="section">
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/bracelet/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                {/* פרטים על התמונה */}
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label>
                                </div>
                            </div>
                        </>
                    }
                    //Earring
                    //codeCategory == 3
                    if (item.codeCategory == 3) {
                        return <>
                            <div style={{ marginLeft: "250px", display: "inline-block" }}>
                                {/* הצגת תמונה מהשרת */}
                                <div className="section">
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Earring/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                {/* פרטים על התצונה */}
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label>
                                </div>
                                <div class="w3-display-middle w3-display-hover">
                                    <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        </>
                    }
                    //Cheins
                    //codeCategory==4
                    if (item.codeCategory == 4) {
                        return <>
                            <div style={{ marginLeft: "250px", display: "inline-block" }}  >
                                {/* הצגת תמונה מהשרת */}
                                <div className="section" >
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Cheins/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                {/* פרטים על התמונה */}
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label>
                                </div>
                            </div>


                        </>
                    }
                    //Ring
                    //item.codeCategory==2
                    if (item.codeCategory == 2) {
                        return <>

                            <div style={{ marginLeft: "250px", display: "inline-block" }}>
                                {/* הצגת תמונה מהשרת */}
                                <div className="section">
                                    <div className="top-section" style={{ border: '2px solid black' }}></div>
                                    <img src={`https://localhost:44363/Images/Ring/${item.jewelryImage}`} width="280px" />
                                </div>
                                <div className="border-section">
                                    <div className="left-border"></div>
                                    <div className="right-border"></div>
                                    <div style={{ clear: 'both' }}></div>
                                </div>
                                {/* פרטים על התמונה */}
                                <div className="bottom-section" style={{ border: '2px solid black' }}>
                                    <label>{item.jewelryName}  </label>
                                    <label>{item.material}</label> <br></br>
                                    <label>{item.jewelryPrice}₪</label>
                                </div>
                            </div>
                        </>
                    }
                })
            }
        </div>
    </>
}