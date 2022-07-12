import { useDispatch } from 'react-redux';
import { RemoveJewelryById } from '../Redux/Jewelry/JewelryThunk';

export const DeleteJewelry = () => {
    const myDispatch = useDispatch();

    //מקבלת מהטופס מידע
    //myFuncRemoveJewelryByCode שולחת קוד ל
    const OkFormToRemove = event => {
        event.preventDefault();
        debugger
        const myCode = event.target["Code"].value
        console.log("myCode", myCode);

        //myFuncGetCategoryByCode שליחת הקוד לפונקציייה 
        myFuncRemoveJewelryByCode(myCode);
    }

    //myFuncRemoveJewelryByCode ניגשת לשרת ע''י 
    const myFuncRemoveJewelryByCode = async (id) => {
        let c = await RemoveJewelryById(myDispatch, "", id);
        debugger;
        await console.log('c', c);
        if (c != undefined)
            alert("Succeeded");
        else
            alert("faild")
    }

    return <>
        <h2 style={{ marginTop: '0px', marginLeft: "230px" }}>Remove Jewelry By Code</h2>
        <form onSubmit={(e) => { OkFormToRemove(e) }} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-container w3-card-4">
            <p>
                <label className="w3-text-blue"><b> Enter Id Jewelry! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Remove Jewelry by Id Jewelry</button>
        </form>
    </>
}