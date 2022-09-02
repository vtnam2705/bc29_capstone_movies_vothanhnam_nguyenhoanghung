import { ADD_TO_CART, SET_USER_INFO } from "../types/userType"

const setUserInfoAction = (data) => {
    return {
        type: SET_USER_INFO,
        payload: data
    }
}

// const addToCartAction = (data) => {
//     return {
//         type: ADD_TO_CART,
//         payload: data
//     }
// }

export { setUserInfoAction }