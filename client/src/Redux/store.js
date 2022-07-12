import produce from 'immer';

import { createStore, combineReducers } from 'redux';
import { CategoryReducer } from './Category/CategoryReducer';
import { CustomerReducer } from './Customer/CustomerReducer';
import {JewelrysReducer}from './Jewelry/JewelryReducer';

//import {JewelryReducer} from './Jewelry/JewelryReducer';
//,Jewelrys: JewelryReducer

//איחוד הרדוסרים
const reducers = combineReducers(
    
    //{product:productReducer,user:userReduser,order:orderReduser} 
    { Jewelry:JewelrysReducer, Category: CategoryReducer, Customer: CustomerReducer }
)

//יצירת סטור
export const store = createStore(reducers);


window.store = store;
console.log(store);