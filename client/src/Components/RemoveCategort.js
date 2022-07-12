import { useDispatch } from "react-redux";
import { useState } from 'react';
import { RemoveCategoryByCode } from "../Redux/Category/CategoryThunk";


export const RemoveCategort = () => {
    const myDispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState({})

    //מקבלת מידע מהטופס
    //myFuncRemoveCategoryByCode ושולחת את הקוד שהתקבל ל
    const OkFormToRemove = event => {
        event.preventDefault();
        debugger
        const myCode =Number( event.target["Code"].value)
        console.log("myCode", myCode);

        myFuncRemoveCategoryByCode(myCode);
    }
    //RemoveCategoryByCode ניגשת לשרת ע''י 
    //setCurrentCategory ועורכת 
    const myFuncRemoveCategoryByCode = async (CodeCategory) => {
        let c = await RemoveCategoryByCode(myDispatch, "", CodeCategory);
        await setCurrentCategory(c)
        debugger;
        await console.log('c', c);
            alert("Succeeded");
    }

    return <>
        <h2  style={{ marginTop: '0px' ,marginLeft:"230px"}}>Remove Category By Code</h2>
        {/* OkFormToRemove שליחת מידע  על הטופס ל */}
        <form onSubmit={(e) => { OkFormToRemove(e) }}  style={{ marginTop: '0px' ,marginLeft:"230px"}}className="w3-container w3-card-4">
            <p>
                <label className="w3-text-blue"><b> Enter Code! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Remove Category by code</button>
        </form>
    </>
}