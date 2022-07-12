import produce from 'immer';

const CategoryInitialState = {
    categories: []
}
export const CategoryReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_CATEGORY': {
            state.categories = action.payload;
            break;
        }

        case 'ALL_CATEGORY': {
            debugger
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
            if (index > -1)
                state.categories.splice(index, 1);
            break;
        }

        case 'UPDATE_CATEGORY': {
            state.categories = action.payload;
            break;
        }
    }

}, CategoryInitialState)