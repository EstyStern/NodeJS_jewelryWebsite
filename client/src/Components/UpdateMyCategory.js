import { GetAllCategorys, UpdateCategory } from '../Redux/Category/CategoryThunk';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';


export const UpdateMyCategory = () => {

    const [currentCategory, setCurrentCategory] = useState({})
    const myDispatch = useDispatch();

    useEffect(async () => {
        debugger
        let v = await GetAllCategorys(myDispatch);
        debugger
        console.log("v", v);
        debugger
    }, [])

    //myFuncGetCategoryByCode מקבל מידע מהטופס ויוצר אובייקט ששולח ל
    const OkFormToEdit = event => {
        event.preventDefault();
        debugger
        const myCategoryToEdit = {
            CodeCategory:Number(event.target["Code"].value),
            NameCategory:event.target["NameC"].value
        }
        console.log("myCategoryToEdit", myCategoryToEdit);
        //myFuncGetCategoryByCode שליחת הקוד לפונקציייה 
        myFuncEditCategory(myCategoryToEdit);
    }

    //UpdateCategory גישה לשרת ע''י 
    const myFuncEditCategory = async (myCategoryEdit) => {
        let c = await UpdateCategory(myDispatch, "", myCategoryEdit);
        await setCurrentCategory(c)
        debugger;
        await console.log('c', c);
        if (c != undefined)
            alert("Succeeded");
        else
            alert("faild")
    }

    
    return  <>
        <h2  style={{ marginTop: '0px' ,marginLeft:"230px"}}>Edit Category</h2>
        {/* OkFormToEditשליחת המידע על הטופס ל */}
        <form onSubmit={(e) => { OkFormToEdit(e) }}  style={{ marginTop: '0px' ,marginLeft:"230px"}}className="w3-container w3-card-4">
            <p>
                <label className="w3-text-blue"><b> Enter Code! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <p>
                <label className="w3-text-blue"><b> Enter Name Category! </b></label>
                <input type="text" placeholder="Enter a name category!" className="w3-input w3-border" id="NameC" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Edit Category</button>
        </form>
    </>
}