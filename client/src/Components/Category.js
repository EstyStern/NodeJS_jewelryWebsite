import { useEffect,useState } from 'react';
import { GetAllCategorys } from '../Redux/Category/CategoryThunk';
import { useDispatch, useSelector } from 'react-redux';

export const Category = () => {
    const myDispatch = useDispatch();
    //טעינת כל התכשיטים בזמן טעינת הקומפוננטה
    //GetAllCategorys גישה לשרת ע''י פונקצייה

    // useEffect(async () => {
    //     debugger
    //     let v = await GetAllCategorys(myDispatch);
    //     debugger
    //     console.log("v", v);
    //     debugger
    // }, [])

    let [chars, setChars] = useState([]);

    useEffect(async () => {
        try{ 
          let response = await GetAllCategorys(myDispatch,"",Category);
          let data = await response;
          setChars(data);
        } catch(error) {
           console.error(error.message);
        }
      },[]);

    //store.Category.categories 
    //שליפת הנתונים מהסטור
    //allMyCategoriesFromStore הצבתם במשתנה 
    let allMyCategoriesFromStore = useSelector((store) => {
        debugger
        if (store.content.categories != undefined) {
            debugger
            console.log("FromStore", store.content.categories);
            console.log(store);
            return store.content.categories;
        }
        else {
            console.log("error");
            return "error"
        }
    })

    return <>
        <h2 style={{ marginTop: '0px', marginLeft: "230px" }}>All Categories</h2>
        {/* טבלת קטגוריות */}
        <table style={{ marginTop: '0px', marginLeft: "230px" }}>
            <tr class="w3-white">
                <th>NameCategory</th>
                <th>CodeCategory</th>
            </tr>
            {console.log("allMyCategoriesFromStore", allMyCategoriesFromStore)}
            {/* מילוי הנתונים בטבלה מהסטור */}
            {/* ע''י מיפוי */}
            {
                chars && chars.map((item) =>
                    <tr class="w3-hover-gray">
                        <td>{item.nameCategory}</td>
                        <td>{item.codeCategory}</td>
                    </tr>
                )
            }
        </table>
    </>
}