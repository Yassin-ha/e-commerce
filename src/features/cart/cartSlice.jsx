import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    loading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartItems.find(item => item.id === action.payload.id)
            if(existingProduct){
                existingProduct.amount += 1
                state.amount += 1
            } else {
                state.cartItems.push({...action.payload, amount: 1})
                state.amount += 1;
            }
        },
        removeItem: (state, action) => {
            const removeItem = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== removeItem.id)
        }, 
        increase: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id)
            if(item.amount === item.stock) return
            else item.amount += 1
        },
        decrease: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id)
            if(item.amount === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }
            else item.amount -= 1
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    }
})

export const {addToCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions
export default cartSlice.reducer