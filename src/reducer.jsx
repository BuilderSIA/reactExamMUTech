export const reducer = (state, action) => {
    if(action.type==="CLEAR"){
        return localStorage.removeItem('cart')
    }
    if(action.type === "INC"){
        let increment = state.cart.map((item)=>{
            if(item.id === action.payload){
                return {...item, amount: item.amount +1}
            }
            return item
        })
        return {...state, cart: increment}
    }
    if(action.type === "DEC"){
        let decrement = state.cart.map((item)=>{
            if(item.id === action.payload){
                if(item.amount > 0){
                    return {...item, amount: item.amount -1}
                }
            }
            return item
        })
        return {...state, cart: decrement}
    }
    if(action.type === "TOTAL"){
        let tmpAmount = state.cart.reduce((total,item)=>{
            return total += item.amount;
        },0)
        return {...state, amount: tmpAmount}
    }
}