import { AddCategory } from "../Redux/Category/CategoryThunk"
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';

export const AddNewCategory = () => {
    //state קטגוריה חדשה נשמרת ב 
    const [NewCategory, setNewCategory] = useState({})
    //עבור בדיקת תקינות
    const [MyErrors, setMyErrors] = useState("");
    //כל קטגוריה
    const [currentCategory, setCurrentCategory] = useState({})
    const myDispatch = useDispatch();

    //מקבלת את נתוני הטופס
    //יוצרת אובייקט חדש של שם קטגוריה
    //myFuncToAdd שולחת אותו ל
    const OkForm = event => {
        event.preventDefault();
        debugger
        const Mycategory = {
            NameCategory: event.target["myName"].value
        }
        myFuncToAdd(Mycategory);
    }
    //מקבלת קטגוריה חדשה
    //AddCategory ניגשת לשרת 
    // NewCategory ועורכת את
    const myFuncToAdd = async (myCategory) => {
        console.log("myCategory", myCategory);
        let c = await AddCategory(myDispatch, "", myCategory);
        await console.log("c", c);
        await setNewCategory(c)
        alert("Done successfully!!")
        // if (c == "Succeeded!") {
        //     alert("Done successfully");
        // }
        // else {
        //     alert('Invalid Details!!')

        // }
    }
    // בדיקת תקינות של השם קטגוריה 
    const validName = (e) => {
        e.preventDefault();
        if (!e.target.value.includes(''))
            setMyErrors(
                {
                    ...MyErrors,//משרשר לערך הקודם
                    CategoryErros: "Name is not valid, must contains  english!!"
                })
        else {
            setMyErrors(
                {
                    ...MyErrors,
                    CategoryErros: "Correct!!"
                })
            setCurrentCategory(
                {
                    ...currentCategory,
                    Name: e.target.value
                }
            )
        }
    }
    return <>
        <h2 style={{ marginTop: '0px', marginLeft: "230px" }}>Add Category</h2>
        {/* //OkForm שליחת המידע על הטופס לפןנקציית  */}
        <form onSubmit={(e) => { OkForm(e) }} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-container w3-card-4" action="/action_page.php" >
            <h5>Please enter Name Category!</h5>
            <div class="input-container">
                <i class="fa fa-user icon"></i>
                <input
                    id="myName"
                    type="text"
                    onChange={(e) => validName(e)}//בדיקת תקינות
                    class="input-field">
                </input>

            </div>
            <button
                type="submit"
                className="w3-btn w3-blue">ADD CATEGORY!
            </button>
            <h5 style={{ color: "yellowgreen" }}>{currentCategory.Name}</h5>
            <label className="Errors">{MyErrors.CategoryErros}</label>
        </form>
    </>
}
