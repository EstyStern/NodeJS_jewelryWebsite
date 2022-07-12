import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllJewelry, getJewelrysByCodeCategory } from '../Redux/Jewelry/JewelryThunk';

export const Home = () => {
    const dispatch = useDispatch();
    //state- שמירת תכשיט נוכחי ב
    let [currentJewelry, setCurrentJewelry] = useState([])

    let [chars, setChars] = useState([]);

    useEffect(async () => {
        try {
            let response = await GetAllJewelry(dispatch, "");
            let data = await response;
            setChars(data);
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    //GetAllJewelry -פונקצייה שניגשת לשרת לקבלת כל התכשיטים
    // const GetALL = async () => {
    //     let c = await GetAllJewelry(dispatch, "");
    //     // state עריכת התכשיט הנוכחי
    //     await setCurrentJewelry(c)
    //     await console.log('c', c);
    // }

    //שליפת תכשיטים מהסטור
    let allMyJewelrysFromStore = useSelector((store) => {
        if (store.content.Jewelrys != undefined) {
            console.log("FromStore", store.content.Jewelrys);
            return store.content.Jewelrys;
        }
        else {
            console.log("error");
            return "error"
        }
    })
    console.log("allMyJewelrysFromStore", allMyJewelrysFromStore);

    //  פונקצייה שמקבלת מידע מהטופס ושולחת את הקוד תכשיט הנוכחי לפונקצייה נוספת
    const OkFormTogetJewelrysByCodeCategory = event => {
        event.preventDefault();
        debugger
        const myCode = event.target["Code"].value
        console.log("myCode", myCode);
        //myFuncGetCategoryByCode שליחת הקוד לפונקציייה 
        myFuncGetJewelryByIdCategory(Number(myCode));
    }


    //getJewelrysByCodeCategory-מקבלת מהשרת 
    const myFuncGetJewelryByIdCategory = async (CodeCategory) => {
        let responseSort = await getJewelrysByCodeCategory(dispatch, "", CodeCategory);
        await setCurrentJewelry(responseSort)
    }

    return <>
        {/* //getAll */}
        {/* <button onClick={() => GetALL()} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-btn w3-blue">Get All Jewelrys</button> */}
        {/* טבלת תכשיטים */}
        <table style={{ marginLeft: "250px" }}>
            <tr class="w3-white">
                <th>jewelryName</th>
                <th>codeCategory</th>
                <th>jewelryPrice</th>
                <th>jewelryImage</th>
                <th>unitsInStock</th>
                <th>material</th>
            </tr>
            {/* מיפוי על כל התכשיטים מהסטור */}
            {
                chars && chars.map((item) => {
                    return <tr class="w3-hover-gray">
                        <td>{item.jewelryName}</td>
                        <td>{item.codeCategory}</td>
                        <td>{item.jewelryPrice}</td>
                        {/* הצגת תמונה לכל תכשיט ע''י המיפוי ולפי הקוד  */}
                        {item.codeCategory == 1 ?
                            < img src={`https://localhost:44363/Images/bracelet/${item.jewelryImage}`} width={"60px"}></img>
                            : item.codeCategory == 2 ?
                                < img src={`https://localhost:44363/Images/Ring/${item.jewelryImage}`} width={"60px"}></img>
                                : item.codeCategory == 3 ?
                                    < img src={`https://localhost:44363/Images/Earring/${item.jewelryImage}`} width={"60px"}></img>
                                    : item.codeCategory == 4 ?
                                        < img src={`https://localhost:44363/Images/Cheins/${item.jewelryImage}`} width={"60px"}></img>
                                        :
                                        <h1>No Image!</h1>

                        }
                        <td>{item.unitsInStock}</td>
                        <td>{item.material}</td>
                    </tr>
                })
            }
        </table>

        {/* //מיון התכשיטים לפי קוד קטגוריה */}
        <h2 style={{ color: "balck", marginLeft: "230px" }}>Sort By Category</h2>
        {/* OkFormTogetJewelrysByCodeCategory שליחת קוד קטגוריה מהטופס לפונקציית  */}
        <form onSubmit={(e) => { OkFormTogetJewelrysByCodeCategory(e) }} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-container w3-card-4">
            <p>
                <label className="w3-text-blue"><b> Enter Code Category! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Get Jewelry by code</button>
        </form>


        <table style={{ marginLeft: "250px" }}>
            <tr class="w3-white">
                <th>jewelryName</th>
                <th>codeCategory</th>
                <th>jewelryPrice</th>
                <th>jewelryImage</th>
                <th>unitsInStock</th>
                <th>material</th>
            </tr>
            {/* מיפוי על כל התכשיטים מהסטור */}
            {
                currentJewelry && currentJewelry.map((item) => {
                    return <tr class="w3-hover-gray">
                        <td>{item.jewelryName}</td>
                        <td>{item.codeCategory}</td>
                        <td>{item.jewelryPrice}</td>
                        {/* הצגת תמונה לכל תכשיט ע''י המיפוי ולפי הקוד  */}
                        {item.codeCategory == 1 ?
                            < img src={`https://localhost:44363/Images/bracelet/${item.jewelryImage}`} width={"60px"}></img>
                            : item.codeCategory == 2 ?
                                < img src={`https://localhost:44363/Images/Ring/${item.jewelryImage}`} width={"60px"}></img>
                                : item.codeCategory == 3 ?
                                    < img src={`https://localhost:44363/Images/Earring/${item.jewelryImage}`} width={"60px"}></img>
                                    : item.codeCategory == 4 ?
                                        < img src={`https://localhost:44363/Images/Cheins/${item.jewelryImage}`} width={"60px"}></img>
                                        :
                                        <h1>No Image!</h1>

                        }
                        <td>{item.unitsInStock}</td>
                        <td>{item.material}</td>
                    </tr>
                })
            }
        </table>





    </>
}