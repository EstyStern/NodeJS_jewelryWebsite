import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCustomerByNameAndPassword } from '../Redux/Customer/CustomerThunk';
import { IsMAN } from '../Redux/Customer/CustomerAction';
import { withRouter } from 'react-router-dom';

export default withRouter(function Login(props) {
    //currentCusrtomer=user in state
    const [currentCusrtomer, setCurrentCusrtomer] = useState({})
    const dispatch = useDispatch();

    //שליפת סטטוס הלקוח מהסטור
    //ismanager=0=אורח
    //ismanager=1=לקוח
    //ismanager=2=מנהל

    const ismanager = useSelector((store) => {
        debugger;
        console.log("isMang", store.content.isMang);
        return store.content.isMang;
    })

    //שליפת סיסמת מנהל מהסטור
    const passManager = useSelector((store) => {
        console.log("PassManager", store.content.PassManager);
        return store.content.PassManager;
    })
    //שליפת שם מנהל מהסטור
    const nameManager = useSelector((store) => {
        console.log("NameManager", store.content.NameManager);
        return store.content.NameManager;
    })
    //GetCustomerByNameAndPassword -פונקצייה שניגשת לשרת
    //אח''כ בודקת אם הלקוח קיים או חדש
    const myFunc = async (CustomerName, CustomerPassword) => {
        let c = await GetCustomerByNameAndPassword(dispatch, "", CustomerName, CustomerPassword);
        await setCurrentCusrtomer(c)
        debugger;
        await console.log('corent', c);
        if (c !== '') {//אם לקוח=לקוח קיים
            dispatch(IsMAN(1));// שליחה לפונקצייה שמעדכנת סטטוס משתמש בסטור=לקוח קיים
            alert(`hello ${CustomerName}!!`);
            props.history.push({ pathname: "/HomePage/Nav2" });//גישה לנאב של הלקוח
        }
        else {//לקוח חדש
            alert('Invalid Details!!, register!');
            //תצוגת טופס הרשמה
            props.history.push({ pathname: "/Register" })//גישה להרשמה=לקוח חדש=0;
        }
    }

    //פונקצייה המקבלת מידע על כל הטופס
    //שומרת באובייקט את הלקוח
    const OkForm = event => {
        event.preventDefault();
        debugger
        //myUser שמירת קלט המשתמש באובייקט 
        const myUser = {
            Name: event.target["UserName"].value,
            Pass: event.target["pass"].value
        }
        //2=אם לקוח=מנהל
        if (myUser.Name == nameManager && myUser.Pass == passManager) {
            alert("Hello Principal!")
            dispatch(IsMAN(2));
            //תצוגת דף הבית
            props.history.push({ pathname: "/HomePage/Nav2" });
        }
        else {//  שליחת האובייקט לפונקצייה שניגשת לשרת
            //אח''כ בודקת אם הלקוח קיים או חדש
            myFunc(myUser.Name, myUser.Pass);
        }
        setCurrentCusrtomer(myUser)//שמירת לקוח נוכחי 
    }

    return <>
        {/* OkForm() שליחת מידע על כל הטופס לפונקצייה */}
        <form onSubmit={(e) => { OkForm(e) }}
            style={{ marginTop: '0px', marginLeft: "230px" }}
            className="w3-container w3-card-4">
            <h2 className="w3-text-blue">Login Form</h2>
            <p>
                <label className="w3-text-blue"><b> UserName</b></label>
                <input type="text" placeholder="Enter your name!" className="w3-input w3-border" id="UserName" name="first" />
            </p>
            <p>
                <label className="w3-text-blue"><b>Password</b></label>
                <input type="password" placeholder="Enter your password!" className="w3-input w3-border" id="pass" name="password" />
            </p>
            <button type="submit" className="w3-btn w3-blue">Login</button>
        </form>
    </>
}
)