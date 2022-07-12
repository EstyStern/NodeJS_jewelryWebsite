import Logo from './Images/Logo2.jpg';
import more from './Images/q1.jpg';
import home2 from './Images/home (3).png';
import ecommerce from './Images/ecommerce.png';
import user from './Images/user (1).png';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import { Home } from './Components/Home';
import Login from './Components/Login';
import { Register } from './Components/Register';
import { useSelector, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { CustomerReducer } from './Redux/Customer/CustomerReducer';
import { Category } from './Components/Category';
import { Gallary } from './Components/Gallary';
import { HomePage } from './Components/HomePage';
import MoreDetails from './Components/MoreDetails';
import { RemoveCategort } from './Components/RemoveCategort';
import { AddNewCategory } from './Components/AddNewCategory';
import { UpdateMyCategory } from './Components/UpdateMyCategory';
import { GetByCodeC } from './Components/GetByCodeC';
import { AddMyJewelry } from './Components/AddMyJewelry';
import { JewelryWithCode } from './Components/JewelryWithCode';
import { DeleteJewelry } from './Components/DeleteJewelry';
import Buy from './Components/Buy';
import FormPay from './Components/FormPay';
import FinalPayment from './Components/FinalPayment';
import { Send } from './Components/Send';

function App() {
  //CustomerReducer ברירת מחדל בסטור יכנס לתוך 
  const rootReducer = combineReducers({
    content: CustomerReducer,
  });

  const store = createStore(rootReducer);
  const currentUser = {
    Name: "Esty Stern",
    Email: "Esty3353@gmail.com",
    Pass: "987654321"
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
            <div class="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
            <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></a>
          </header>
          <div class="w3-overlay w3-hide-large" onclick="w3_close()" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
          <BrowserRouter>
            <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{ width: "250px", index: "3", marginRight: "80%" }} id="mySidebar">
              <div class="w3-container w3-display-container w3-padding-16">
                <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
                <img src={Logo} width="200" />
              </div>
              <img src={more} width="200" />
              <h5>@Esty Stern</h5>
              <Link to="/HomePage" class="w3-bar-item w3-button w3-padding" >
                <img style={{ width: "80px", marginLeft: "60px" }} src={home2}></img>
              </Link>
              <Link to="/Login" class="w3-bar-item w3-button w3-padding">
                <img style={{ width: "80px", marginLeft: "60px" }} src={user}></img>
              </Link>
              <Link to="Nav2/FormPay" class="w3-bar-item w3-button w3-padding" >
                <img src={ecommerce} style={{ width: "80px", marginLeft: "60px" }}></img>
              </Link>
            </nav>
            {/* //Nav ברירת מחדל יוצג  */}
            {/* עבור מצב אורח */}
            <Nav />

            <Switch>
              <Route exact path="/HomePage">
                <Provider store={store}>
                  <HomePage flag="true"></HomePage>
                </Provider>
              </Route>

              <Route exact path="/HomePage/Nav2">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <HomePage></HomePage>
                </Provider>
              </Route>

              <Route exact path="/Nav2">
                <Provider store={store}>
                  <Nav2></Nav2>
                </Provider>
              </Route>

              <Route exact path="/Nav2/RemoveCategort">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <RemoveCategort flag="true"></RemoveCategort>
                </Provider>
              </Route>

              <Route exact path="/Gallary" >
                <Provider store={store}>
                  <Gallary flag="true"></Gallary>
                </Provider>
              </Route>

              <Route exact path="/Nav2/Home">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <Home flag="true"></Home>
                </Provider>
              </Route>

              <Route path="/Login">
                <Provider store={store}>
                  <Login flag="true"></Login>
                </Provider>
              </Route>

              <Route path="/Register">
                <Provider store={store}>
                  <Register flag="true"></Register>
                </Provider>
              </Route>

              <Route path="/Nav2/EditDeatails">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <Register myUser={currentUser} flag="true"></Register>
                </Provider>
              </Route>

              <Route path="/Nav2/Category">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <Category flag="true"></Category>
                </Provider>
              </Route>

              <Route path="/Nav2/AddMyJewelry">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <AddMyJewelry></AddMyJewelry>
                </Provider>
              </Route>

              <Route path="/Nav2/JewelryWithCode">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <JewelryWithCode></JewelryWithCode>
                </Provider>
              </Route>

              <Route path="/Nav2/MoreDetails">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <MoreDetails></MoreDetails>
                </Provider>
              </Route>

              <Route path="/Nav2/UpdateCategory">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <UpdateMyCategory></UpdateMyCategory>
                </Provider>
              </Route>

              <Route path="/Nav2/GetByCodeC">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <GetByCodeC></GetByCodeC>

                </Provider>
              </Route>

              <Route path="/Nav2/AddNewCategory">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <AddNewCategory flag="true"></AddNewCategory>
                </Provider>
              </Route>

              <Route path="/Nav2/DeleteJewelry">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <DeleteJewelry></DeleteJewelry>
                </Provider>
              </Route>

              <Route path="/Nav2/Buy">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <Buy></Buy>
                </Provider>
              </Route>

              <Route path="/Nav2/FormPay">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <FormPay></FormPay>
                </Provider>
              </Route>

              <Route path="/Nav2/FinalPayment">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <FinalPayment></FinalPayment>
                </Provider>
              </Route>

              <Route path="/Nav2/Send">
                <Provider store={store}>
                  <Nav2></Nav2>
                  <Send></Send>
                </Provider>
              </Route>

              <Provider store={store}>
                <Redirect from="/" to="/HomePage" />
              </Provider>

              <Route>
                {PageNotFound}
              </Route>
            </Switch>
          </BrowserRouter>


        </header>
      </div></>
  );
}

export default App;

//ניווט ברירת מחדל לדף הבית
function PageNotFound() {
  return <div>
    <h1>PageNotFound</h1>
    <Link to='/Home' >
      <button>HOME</button>
    </Link>
  </div>
}

//עבור לקוח=0
function Nav() {
  return <>
    <nav class="menu" style={{ marginTop: '0px', marginLeft: "250px" }}>
      <ol>
        <li class="menu-item"><Link to="/Gallary">Gallery</Link></li>
        <li class="menu-item"><Link to="/Register">Register</Link></li>
        <li class="menu-item"><Link to='/Login'>Login</Link></li>
        <li class="menu-item"><Link to="/HomePage">Home</Link></li>
      </ol>
    </nav>
  </>
}
//עבור משתמש קיים
export const Nav2 = () => {
  //שליפת סטטוס מהסטור
  const ismanager = useSelector((store) => {
    debugger;
    console.log("isMangNav2", store.content.isMang);
    return store.content.isMang;
  })
  //שליפת סל קניות מהסטור
  const myCart = useSelector((store) => {
    debugger;
    console.log('ProdForCart', store.content.ProdForCart);
    return store.content.ProdForCart;
  })

  return <>
    <nav class="menu" style={{ marginTop: '-70px', marginLeft: "250px" }}>
      {ismanager == 1 ?//לקוח=לקוח קיים
        <>
          <ol>
            <li class="menu-item">
              <a href="#0">Categories</a>
              <ol class="sub-menu">
                <li class="menu-item"><Link to="/Nav2/GetByCodeC">Category By Code</Link></li>
                <li class="menu-item"><Link to="/Nav2/Category">Category Table</Link></li>
              </ol>
            </li>
            <li class="menu-item">
              <a href="#0">Jewelry</a>
              <ol class="sub-menu">
                <li class="menu-item"><Link to="/Nav2/Home">Jewelry Table</Link></li>
                <li class="menu-item"><Link to="/Nav2/JewelryWithCode">Jewelry By Code</Link></li>
              </ol>
            </li>
            <li class="menu-item"><Link to="/Nav2/FormPay">Cart {myCart.length} </Link></li>
            <li class="menu-item"><Link to="/Nav2/Buy">Buy</Link></li>
          </ol>
        </>

        : ismanager == 2 ?//לקוח =מנהל
          <>
            <ol>
              <li class="menu-item">
                <a href="#0">Categories</a>
                <ol class="sub-menu">
                  <li class="menu-item"><Link to="/Nav2/GetByCodeC">Category By Code</Link></li>
                  <li class="menu-item"><Link to="/Nav2/Category">Category Table</Link></li>
                  <li class="menu-item"><Link to="/Nav2/AddNewCategory">Add Category</Link></li>
                  <li class="menu-item"><Link to="/Nav2/RemoveCategort">Remove Category</Link></li>
                  <li class="menu-item"><Link to="/Nav2/UpdateCategory">Edit Category</Link></li>
                </ol>
              </li>
              <li class="menu-item">
                <a href="#0">Jewelry</a>
                <ol class="sub-menu">
                  <li class="menu-item"><Link to="/Nav2/Home">Jewelry Table</Link></li>
                  <li class="menu-item"><Link to="/Nav2/JewelryWithCode">Jewelry By Code</Link></li>
                  <li class="menu-item"><Link to="/Nav2/AddMyJewelry">Add Jewelry</Link></li>
                  <li class="menu-item"><Link to="/Nav2/DeleteJewelry">Remove Jewelry</Link></li>
                </ol>
              </li>
              <li class="menu-item"><Link to="/Nav2/FormPay">Cart {myCart.length}</Link></li>
              <li class="menu-item"><Link to="/Nav2/Buy">Buy</Link></li>
            </ol>
          </>
          :
          <>
            <h>?</h>
          </>
      }
    </nav>
  </>
}