import produce from 'immer';

const JewelryInitialState = {
    Jewelrys: [],
    ProdForCart:[],
}

export const JewelrysReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'LOAD_JEWELRY':
            {
                state.Jewelrys = action.payload;
                break;
            }
    }

}, JewelryInitialState)