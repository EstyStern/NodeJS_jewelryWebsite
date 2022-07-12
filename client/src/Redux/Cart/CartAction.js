export function DeleteItemFromCart(index){
    debugger;
    console.log(index)
    return {type:"DELETE_ITEM_FRON_CART",payload:index}
}

export function UpdateItemInCart(item,index){
    debugger;
    console.log(item)
    console.log(index)
    return {type:"UPDATE_ITEM_IN_INDEX",payload:{"item":item,"index":index}}
}

export function AddNewCart(item){
    debugger;
    console.log(item)
    return {type:"ADD_NEW_CART",payload:item}
}
