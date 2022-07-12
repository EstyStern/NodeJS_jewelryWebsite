import { useState } from "react";
import '../App.css';
import { AddCustomer } from '../Redux/Customer/CustomerThunk';
import { useDispatch, useSelector } from 'react-redux';

export const Register = (Props) => {
    //state -to all the errors and to the users.
    const [myUser, setMyUser] = useState(Props.myUser ? Props.myUser : {})
    const [MyErrors, setMyErrors] = useState({});
    const dispatch = useDispatch();

    //בדיקת תקינות של שם 
    const validName = (e) => {
        e.preventDefault();
        //valid if have a space in the full name.
        if (e.target.value.includes(" "))
            setMyErrors(
                {
                    ...MyErrors,//משרשר לערך הקודם
                    NameErros: "Name is not valid, must contains  a space!!"
                })
        else {
            setMyErrors(
                {
                    ...MyErrors,
                    NameErros: "Correct!!"
                })
            setMyUser(
                {
                    ...myUser,
                    CustomerName: e.target.value
                }
            )
        }
    }

    //בדיקת תקינות של אשראי 
    const validCreditNumber = (e) => {
        e.preventDefault();
        if (!e.target.value) {
            setMyErrors(
                {
                    ...MyErrors,
                    CreditNumberErros: "Required!!"
                })
        } else
            var credit = /^[0-9]\w{16}$/;
        if (e.target.value.match(credit)) {
            setMyErrors(
                {
                    ...MyErrors,
                    CreditNumberErros: "Invalid Credit Number!!"
                })
        }
        else {
            setMyErrors(
                {
                    ...MyErrors,
                    CreditNumberErros: "Correct!!"
                })
            setMyUser(
                {
                    ...myUser,
                    CreditNumber: e.target.value
                });
        }
    }

    //בדיקת תקינות של סיסמא 
    const validPass = e => {
        e.preventDefault();
        var thePass = /^[0-9]\w{7,14}$/;
        if (e.target.value.match(thePass)) {
            setMyErrors(
                {
                    ...MyErrors,
                    PassErros: "Correct!!"
                })
        }
        else {
            setMyErrors
                ({
                    ...MyErrors,
                    PassErros: 'Wrong...!! password password between 7 to 16 numbers!!'

                })
            setMyUser(
                {
                    ...myUser,
                    CustomerPassword: e.target.value
                }
            )
        }
    }
    //פונקצייה שמקבלת מידע על כל הטופס 
    //myFuncToAdd שולחת אובייקט לפונקצייה
    const OkForm = event => {
        event.preventDefault();
        debugger
        //myUser שמירת קלט המשתמש באובייקט 
        const myUser = {
            CustomerName: event.target["name"].value,
            CustomerPassword: Number(event.target["pass"].value),
            CreditNumber: event.target["CreditNumber"].value
        }
        //myFuncToAdd שליחת הנתונים לפונקציייה 
        myFuncToAdd(myUser);
    }
    //AddCustomer-פונקציה שניגשת לשרת
    const myFuncToAdd = async (myUser) => {
        debugger;
        console.log("myUser", myUser);
        if (MyErrors.NameErros == 'Correct!!' && MyErrors.PassErros == "Correct!!" && MyErrors.CreditNumberErros == "Correct!!") {
            debugger;
            let c = await AddCustomer(dispatch, "", myUser);
            console.log("c", c);
            await setMyUser(c)
            debugger;
            await console.log("c", c);
            if (c == "Succeeded!") {
                alert(`${myUser.CustomerName} Done successfully`);
            }
            else {
                alert("Invalid Details!!")
            }
        }
    }

    return <>
        <form onSubmit={(e) => { OkForm(e) }} className="w3-container w3-card-4" action="/action_page.php" style={{ marginTop: '0px', marginLeft: "230px" }} >
            <h2 >Are you new user? Register...!</h2>
            <h5>Please enter your full name!</h5>
            <div class="input-container">
                <i class="fa fa-user icon"></i>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => validName(e)}//בדיקת תקינות
                    name="usrnm"
                    class="input-field">
                </input>
            </div>
            <h5 style={{ color: "yellowgreen" }}>{myUser.CustomerName}</h5>
            <label className="Errors">{MyErrors.NameErros}</label>

            <h5>Please enter your Password!</h5>
            <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input
                    type="number"
                    id="pass"
                    onChange={(e) => validPass(e)}
                    class="input-field"
                    name="psw">
                </input>
            </div>
            <h5 style={{ color: "yellowgreen" }}>{myUser.CustomerPassword}</h5>
            <label className="Errors" >{MyErrors.PassErros}</label>

            <h5>Please enter your Credit Number!</h5>
            <div class="input-container">
                <i class="fa fa-envelope icon"></i>
                <input
                    type="text"
                    onChange={(e) => validCreditNumber(e)}
                    class="input-field"
                    id="CreditNumber"
                >
                </input>
            </div>
            <h5 style={{ color: "yellowgreen" }}>{myUser.CreditNumber}</h5>
            <label className="Errors" >{MyErrors.CreditNumberErros}</label>
            <button
                type="submit"
                className="w3-btn w3-blue">ADD ME!
            </button>
        </form>

    </>
}