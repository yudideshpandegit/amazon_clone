export const initialState = {
    basket: []
} 


const reducer = (state, action) => {
    
    console.log(action);

    switch(action.type){

        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
            break;

        case "REMOVE_FROM_BASKET":
             
            console.log(state.basket);
            const index = state.basket.findIndex((item) => {
                return item.id == action.id
            })

            let newBasket = [...state.basket];

            if(index > 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove (id: ${action.id}) as it is not in the basket`);
            }

            return{
                ...state,
                basket:newBasket    
            }
            break;    

        default:
            return state;    

        }
}

export default reducer;