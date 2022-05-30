let defaultState = {
    selectedItems : {items: [], restaurantName: undefined}
}
let cartReducer = (state = defaultState, action) => {
    // console.log(state);
    if(state.selectedItems.restaurantName !== action.restaurantName){
        state = {
            ...state,
            selectedItems: {
                items: [],
                restaurantName: action.restaurantName
            }
        }
    }
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                selectedItems: {
                    items: [...state.selectedItems.items, action.payload],
                    restaurantName: action.restaurantName
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                selectedItems: {
                    items: state.selectedItems.items.filter(item => item.id !== action.payload.id),
                    restaurantName: action.restaurantName
                }
            }
        case 'CLEAR_CART':
            return {
                ...state,
                selectedItems: {
                    items: [],
                    restaurantName: ''
                }
            }
        default:
            return state;
    }
}

export default cartReducer;