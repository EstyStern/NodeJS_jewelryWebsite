import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJewelryById } from '../Redux/Jewelry/JewelryThunk';
import w from '../Images/w.jpg';

export const JewelryWithCode = () => {
    const myDispatch = useDispatch();
    //תכשיט נוכחי
    const [currentJewelry, setCurrentJewelry] = useState({})

    // פונקצייה שמקבלת מידע על הטופס 
    //שולחת לפונקצייה אחרת את הקוד תכשיט
    const OkFormToGetById = event => {
        event.preventDefault();
        debugger
        const myCode = event.target["Code"].value
        console.log("myCode", myCode);
        //myFuncGetCategoryByCode שליחת הקוד לפונקציייה 
        myFuncGetJewelryById(myCode);
    }
    //getJewelryById -פונקצייה שמבצעת גישה לשרת עם קוד התכשיט שהתקבל
    const myFuncGetJewelryById = async (id) => {
        let c = await getJewelryById(myDispatch, "", id);
        await setCurrentJewelry(c)
        debugger;
        await console.log('c-By', c);
    }

    return <>
        <h2 style={{ marginTop: '0px', marginLeft: "230px" }}>Get Jewelry By Code</h2>
        <form onSubmit={(e) => { OkFormToGetById(e) }} className="w3-container w3-card-4" style={{ marginTop: '0px', marginLeft: "230px" }}>
            <p>
                <label className="w3-text-blue"><b> Enter Code! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Get Jewelry by code</button>
            <p>{`The Jewelry Is: ${currentJewelry.jewelryName}`}</p>
            {/* state הצגת תמונת תכשיט לפי התכשיא הנוכחי השמור ב a*/}
            {currentJewelry.codeCategory == 1 ?
                < img src={`https://localhost:44363/Images/bracelet/${currentJewelry.jewelryImage}`} width={"180px"}></img>
                : currentJewelry.codeCategory == 2 ?
                    < img src={`https://localhost:44363/Images/Ring/${currentJewelry.jewelryImage}`} width={"180px"}></img>
                    : currentJewelry.codeCategory == 3 ?
                        < img src={`https://localhost:44363/Images/Earring/${currentJewelry.jewelryImage}`} width={"180px"}></img>
                        : currentJewelry.codeCategory == 4 ?
                            < img src={`https://localhost:44363/Images/Cheins/${currentJewelry.jewelryImage}`} width={"180px"}></img>
                            :
                            < img src={w} width={"180px"}></img>

            }
        </form>
    </>
}