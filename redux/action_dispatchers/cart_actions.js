// make action dispatchers for cart action
const addToCart = (item, restaurantName) => {
    return (
        (dispatch) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: item,
                restaurantName: restaurantName
            });
        }
    )
}

const removeFromCart = (item, restaurantName) => {
    return (
        (dispatch) => {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: item,
                restaurantName: restaurantName
            });
        }
    )
}

const clearFromCart = () => {
    return (
        (dispatch) => {
            dispatch({
                type: 'CLEAR_CART',
            });
        }
    )
}

export default {
    addToCart,
    removeFromCart,
    clearFromCart
};