import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddJewelry } from '../Redux/Jewelry/JewelryThunk';

export const AddMyJewelry = () => {
    const dispatch = useDispatch();
    //stateשמירת התכשיט החדש ב
    const [myJewelry, setMyJewelry] = useState()

    //פונקצייה שמקבלת נתונים מהטופס
    const okFunk = event => {
        event.preventDefault();
        debugger

        //myAddJewelry שמירת קלט המשתמש באובייקט 
        const myAddJewelry = {
            JewelryName: event.target["nameJewelry"].value,
            CodeCategory: Number(event.target["codeCategoty"].value),
            JewelryPrice: Number(event.target["price"].value),
            JewelryImage: event.target["image"].value,
            UnitsInStock: Number(event.target["unit"].value),
            Material: event.target["metirial"].value
        }
        console.log("myAddJewelry", myAddJewelry);
        //myFuncToAdd שולחת אובייקט ל
        myFuncToAdd(myAddJewelry);
    }

    // AddJewelry גישה לשרת ע''י
    const myFuncToAdd = async (myJewelry) => {
        debugger;
        let c = await AddJewelry(dispatch, "", myJewelry);
        console.log("myJewelry", myJewelry);
        debugger
        await setMyJewelry(c)
        debugger;
        await console.log("c", c);
        if (c != ' ') {
            alert("Done successfully");
        }
        else {
            alert('Invalid Details!!')
        }
    }

    return <>

        <form onSubmit={(e) => { okFunk(e) }} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-container w3-card-4" action="/action_page.php" >
            <h1 >Add new Jewelry</h1>

            <h5>Please enter Jewelry name!</h5>
            <div class="input-container">
                <i class="fa fa-user icon"></i>
                <input
                    id="nameJewelry"
                    type="text"
                    class="input-field">
                </input>
            </div>

            <h5>Please enter name image!</h5>
            <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input
                    type="text"
                    id="image"
                    class="input-field"
                >
                </input>
            </div>

            <h5>Please enter the metirial!</h5>
            <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input
                    type="text"
                    id="metirial"
                    class="input-field"
                >
                </input>
            </div>

            <h5>Please enter your code categoty</h5>
            <div class="input-container">

                <i class="fa fa-envelope icon"></i>
                <input
                    type="int"
                    class="input-field"
                    id="codeCategoty"
                >
                </input>
            </div>
            
            <h5>Please enter unit in stock!</h5>
            <div class="input-container">
                <i class="fa fa-envelope icon"></i>
                <input
                    type="int"
                    class="input-field"
                    id="unit"
                >
                </input>
            </div>

            <h5>Please enter price!</h5>
            <div class="input-container">
                <i class="fa fa-envelope icon"></i>
                <input
                    type="double"
                    class="input-field"
                    id="price"
                >
                </input>
            </div>
           
            <button
                type="submit"
                className="w3-btn w3-blue">ADD MY JEWELRY!
            </button>

        </form>

    </>
}