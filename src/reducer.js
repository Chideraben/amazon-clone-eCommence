export const initialState = {
    cart: [],
    user: null
};

//selector

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case "ADD_TO_CART":
        const indexAdd = state.cart.findIndex((item) => item.id === action.item.id);
        if(indexAdd >= 0) {
            let updatedCartAdd = [...state.cart];

            updatedCartAdd[indexAdd].quantity +=1;
            return{
                ...state,
                cart: updatedCartAdd
            };
        } else{
            return{
                ...state,
                cart:[...state.cart,
                    {...action.item, quantity: 1}
                ]
            }
        }

        

           

            case "EMPTY_CART":
                return{
                    ...state,
                    cart:[]
                }
        case "REMOVE_FROM_CART":
            const indexRemove = state.cart.findIndex((item) => item.id === action.id);
            
            if(indexRemove >= 0){
                let updatedCartRemove = [...state.cart];
                updatedCartRemove.splice(indexRemove,1);
                return{
                    ...state,
                    cart: updatedCartRemove
                };
            } else{
                console.warn("Cant't remove product (id: ${action.id} as it's not in cart!")
                return state;
            }

            case 'INCREASE_QUANTITY':
                const indexIncrease = state.cart.findIndex((item) => item.id === action.id);
                if (indexIncrease >= 0){
                    let updatedCartIncrease = [...state.cart];

                    updatedCartIncrease[indexIncrease].quantity += 1;
                    return{
                        ...state,
                        cart: updatedCartIncrease
                    }
                }
                return state;

                case 'DECREASE_QUANTITY':
                    const indexDecrease = state.cart.findIndex((item) => item.id === action.id);
                    if(indexDecrease >= 0 && state.cart[indexDecrease].quantity > 1) {
                        let updatedCartDecrease = [...state.cart];
                        updatedCartDecrease[indexDecrease].quantity -= 1;
                        return{
                            ...state,
                            cart: updatedCartDecrease
                        };
                    }
                    return state;
                  
            
           
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
        default:
            return state;
    }

};

export default reducer
