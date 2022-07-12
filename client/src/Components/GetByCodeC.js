import { useState, useEffect } from 'react';
import { GetCategoryByCode, GetAllCategorys } from '../Redux/Category/CategoryThunk';
import { useDispatch, useSelector, Provider } from 'react-redux';
import bracletC from '../Images/bracletC.JPG';
import EarringC from '../Images/EarringC.JPG';
import ringC from '../Images/ringC.JPG';
import chainC from '../Images/chainC.jpg';
import w from '../Images/w.jpg';

//טעינת כל התכשיטים בזמן טעינת הקומפוננטה
//GetAllCategorys גישה לשרת ע''י פונקצייה
export const GetByCodeC = () => {
    const myDispatch = useDispatch();
    //state שמירת קטגורייה נוכחית של כל תכשיט ב
    const [currentCategory, setCurrentCategory] = useState({})

    useEffect(async () => {
        debugger
        let v = await GetAllCategorys(myDispatch);
        debugger
        console.log("v", v);
        debugger
    }, [])

    const OkFormToGetById = event => {
        event.preventDefault();
        debugger
        const myCode = event.target["Code"].value
        console.log("myCode", myCode);

        //myFuncGetCategoryByCode שליחת הקוד לפונקציייה 
        myFuncGetCategoryByCode(myCode);
    }

    const myFuncGetCategoryByCode = async (CodeCategory) => {
        let c = await GetCategoryByCode(myDispatch, "", CodeCategory);
        await setCurrentCategory(c)
        debugger;
        await console.log('c', c);
    }

    return <>
        <h2 style={{ marginTop: '0px', marginLeft: "230px" }}>Get Category By Code</h2>
        {/*OkFormToGetById שליחת כל המידע של הטופס לפונקציית  */}
        <form onSubmit={(e) => { OkFormToGetById(e) }} style={{ marginTop: '0px', marginLeft: "230px" }} className="w3-container w3-card-4">
            <p>
                <label className="w3-text-blue"><b> Enter Code! </b></label>
                <input type="number" placeholder="Enter a code!" min='0' className="w3-input w3-border" id="Code" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Get Category by code</button>
            <p>{`The Categoty Is: ${currentCategory.nameCategory}`} </p>
            {/* הצגת תמונה של כל קטגוריה לפי קוד קטגוריה */}
            {/*braclet*/}
            {currentCategory.codeCategory == 1 ?
                <>
                    <img src={bracletC} width={"270px"}></img>
                </>
                // ring
                : currentCategory.codeCategory == 2 ?
                    <>
                        <img src={ringC} width={"270px"}></img>
                    </>
                    //Earring
                    : currentCategory.codeCategory == 3 ?
                        <>
                            <img src={EarringC} width={"270px"}></img>
                        </>
                        //chain
                        : currentCategory.codeCategory == 4 ?
                            <img src={chainC} width={"270px"}></img>
                            //כשאין תמונה נציג תמונה ברירת מחדל
                            :
                            <img src={w} width={"270px"}></img>
            }

        </form>
    </>

}