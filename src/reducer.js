export const initialState = {
    basket:[],
    user:null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount,item) => item.price + amount,0);
const reducer = (state,action) => {
    console.log(action);
    
    switch(action.type){
        case "ADD_TO_BASKET":
            // Logic for adding to basket
            return { ...state,
                     basket: [...state.basket, action.item],
            };
        case "REMOVE_FROME_BASKET":
            // Logic for Removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];
            // we fond the index
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0){
                // item exits in basket, remove it...
                newBasket.splice(index,1);
            }
            else{
                console.warn("cant remove product (id: ${action.id}) as its not")
            }
            return {...state,basket:newBasket,};
        default:
            return state;

    }
}

export default reducer;