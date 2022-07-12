export function LoadJewelry(items){
    debugger
    console.log(items)
    return {type:"LOAD_JEWELRY",payload:items}
}

export function AddAProdToCart(item) {
    console.log(item);
    return{type:'ADD_A_PROD_TO_CART', payload: item}  
}