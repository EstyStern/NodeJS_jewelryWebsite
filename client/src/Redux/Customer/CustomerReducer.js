import produce from 'immer';

const CustomerInitialState = {
    customers: [],
    corentUser:[],

    NameManager: "esty",
    PassManager: "324118355",
    isMang: "0",

    ProdForCart: [],
    totalPricePerBuying: 0,
    answerServerAboutAddCart:[],
}

export const CustomerReducer = produce((state, action, store) => {
    debugger
    switch (action.type) {
        case 'LOAD_CUSTOMERS':
            {
                state.customers = action.payload;
                break;
            }
        case 'ADD_USER':
            {
                state.customers = action.payload;
                state.corentUser = action.payload;
                break;
            }
        case 'GET_BY_NAME_PASS':
            {
                state.corentUser = action.payload;
                break;
            }
// ------------------------------------
        // categories reducer//
//-------------------------------------
        case 'LOAD_CATEGORY': {
            state.categories = action.payload;
            break;
        }

        case 'CATEGORY_BY_CODE': {
            state.categories = action.payload;
            break;
        }

        case 'ADD_CATEGORY': {
            debugger;
            state.categories.push(action.payload)
            break;
        }
        case 'REMOVE_CATEGORY_BY_CODE': {
            //מציאת האינדקס של האובייקט הנועד למחיקה
            let index = state.categories.indexof(action.paylod);
            //פונקצייה שמקבלת אינדקס, וכמה איברים למחוק ממנו
            if (index > -1) {
                state.categories.splice(index, 1);
                store.content.categories.splice(index, 1)
            }
            break;
        }
        case 'UPDATE_CATEGORY': {
            state.categories = action.payload;
            break;
        }
// ------------------------------------
        // jewlery reducer//
//-------------------------------------
        case 'LOAD_JEWELRY': {
            debugger;
            state.Jewelrys = action.payload;
            break;
        }

        case 'IS_MAN':
            {
                debugger; state.isMang = action.payload;
                break;
            }

 // ------------------------------------
        // cart reducer//
//-------------------------------------  
        case 'ADD_A_PROD_TO_CART':
            {
                debugger;
                state.ProdForCart.push(action.payload)
                state.totalPricePerBuying += action.payload.totalPrice
                break;
            }

        case 'DELETE_ITEM_FRON_CART':
            {
                debugger;
                console.log(action.payload);
                console.log(state);
                console.log(state.ProdForCart);

                debugger;
                state.totalPricePerBuying -= state.ProdForCart[action.payload].totalPrice;
                debugger;
                state.ProdForCart.splice(action.payload, 1);
                debugger;
                if (state.ProdForCart.lenght == 0) {
                    state.totalPricePerBuying = 0;
                }
                break;
            }
        case 'UPDATE_ITEM_IN_INDEX': {
            //אם יש הורדה בכמות המוצר
            if (action.payload.item < state.ProdForCart[action.payload.index].amount) {
                //עדכון מחיר סופי
                state.totalPricePerBuying -= state.ProdForCart[action.payload.index].pricePerUnit;
                //- בכל שורה עדכון מחיר סופי לכל מוצר
                state.ProdForCart[action.payload.index].totalPrice = state.ProdForCart[action.payload.index].pricePerUnit * action.payload.item;
                //עדכון כמות    
                state.ProdForCart[action.payload.index].amount = action.payload.item;
                if (state.ProdForCart.lenght == 0) {
                    state.totalPricePerBuying = 0;
                }
            }

            else//אם יש עלייה בכמות
            {
                //עדכון מחיר סופי
                state.totalPricePerBuying += state.ProdForCart[action.payload.index].pricePerUnit;
                //-כל שורה עדכון מחיר סופי לכל מוצר 
                state.ProdForCart[action.payload.index].totalPrice = state.ProdForCart[action.payload.index].pricePerUnit * action.payload.item;
                //עדכון כמות    
                state.ProdForCart[action.payload.index].amount = action.payload.item;
                if (state.ProdForCart.lenght == 0) {
                    state.totalPricePerBuying = 0;
                }
            }
            break;
        }
        case 'ADD_NEW_CART':
        {
            state.answerServerAboutAddCart=action.payload;
        }
    }
}, CustomerInitialState)