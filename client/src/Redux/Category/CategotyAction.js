export function LoadCategory(items){
    debugger
    console.log(items)
    return {type:"LOAD_CATEGORY",payload:items}
}

export function PushAllCategory(items){
    debugger
    console.log(items)
    return {type:"LOAD_CATEGORY",payload:items}
}

export function myCategoryByCode(items){
    debugger
    console.log(items)
    return {type:"CATEGORY_BY_CODE",payload:items}
}

export function RemoveCategoryById(items){
    debugger
    console.log(items)
    return {type:"REMOVE_CATEGORY_BY_CODE",payload:items}
}

export function AddMyCategory(items){
    debugger
    console.log(items)
    return {type:"ADD_CATEGORY",payload:items}
}

export function UpdateMyCategory(items){
    debugger
    console.log(items)
    return {type:"UPDATE_CATEGORY",payload:items}
}