import axios from "axios"
import { PushAllCategory,myCategoryByCode,AddMyCategory ,RemoveCategoryById,UpdateMyCategory} from './CategotyAction';

//export const defaultURL = `https://localhost:44363/api/Category`
export const defaultURL = `mongodb://localhost:27017/Jwelery_db/`

export const GetAllCategorys = async (dispatch, getState,model) => {
    debugger;
    try {
        debugger
        const allCategorys = await axios.get(`${defaultURL}/GetAll/${model}`);
        debugger
        await console.log(allCategorys.data)
        debugger
        await dispatch(PushAllCategory(allCategorys.data))
        return allCategorys.data;
    } catch (e) {
        console.log(e)
    }
}


export const GetCategoryByCode = async (dispatch, getState, CodeCategory) => {
    try {
        debugger
        const CategoryByCode = await axios.get(`${defaultURL}/GetCategoryByCode/${CodeCategory}`);
        await console.log(CategoryByCode.data)
        await dispatch(myCategoryByCode(CategoryByCode.data))
        return CategoryByCode.data;
    } catch (e) {
        console.log(e)
    }
}


export const RemoveCategoryByCode = async (dispatch, getState, CodeCategory) => {
    debugger;
    try {
        debugger
        const CategoryByCode = await axios.delete(`${defaultURL}/RemoveCategoryByCode/${CodeCategory}`);
        await console.log(CategoryByCode.data)
        await dispatch(RemoveCategoryById(CategoryByCode.data))
        return CategoryByCode.data;
    } catch (e) {
        console.log(e)
    }

}


export const UpdateCategory = async (dispatch, getState, c) => {
    try {
        debugger
       const CategoryToE = await axios.put(`${defaultURL}/UpdateCategory`,c);
        await console.log(CategoryToE.data)
        await dispatch(UpdateMyCategory(CategoryToE.data))
        return CategoryToE.data;
    } catch (e) {
        console.log(e)
    }

}

export const AddCategory= async (dispatch, getState, newCategory) => {
    try {
        debugger;
        const resAllCategoryAfterAdding = await axios.post(`${defaultURL}/AddCategory`,newCategory);
        await console.log(resAllCategoryAfterAdding.data)
        await dispatch(AddMyCategory(newCategory))
        return resAllCategoryAfterAdding.data;
    } catch (e) {
        console.log(e)
    }
}