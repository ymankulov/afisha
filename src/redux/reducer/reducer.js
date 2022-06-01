import {GET_ITEMS, GET_ADVERTISING, GET_SINGLE_ITEM} from "../actionTypes/actionTypes";

const initialState = {
    advertising: [],
    allItems: [],
    singleItem: {}
}


export  const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ADVERTISING:
            // console.log(action.payload)
            return {...state, advertising: action.payload}
        case GET_ITEMS:
            console.log(action.payload)
            return {...state, allItems: [...action.payload]}
        case GET_SINGLE_ITEM:
            const getSingle = state.allItems.filter(el => {
                if (el.id === action.payload) {
                    return el
                }
            })
            return {...state, singleItem: getSingle}
        default:
            return state
    }
}