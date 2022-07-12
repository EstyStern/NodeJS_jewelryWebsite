export function LoadCustomer(items){
    debugger
    console.log(items)
    return {type:"LOAD_CUSTOMERS",payload:items}
}

export function AddUser(items){
    debugger
    console.log(items)
    return {type:"ADD_USER",payload:items}
}


export function getUserByNameAndPass(items){
    debugger
    console.log(items)
    return {type:"GET_BY_NAME_PASS",payload:items}
}
//category
export function RemoveCategoryById(items){
    debugger
    console.log(items)
    return {type:"REMOVE_CATEGORY_BY_CODE",payload:items}
}

export function IsMAN(number){
    debugger;
    console.log(number)
    return {type:"IS_MAN",payload:number}
}