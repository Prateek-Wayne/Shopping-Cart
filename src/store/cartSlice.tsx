import { createSlice } from "@reduxjs/toolkit";
export interface dataType{
    // {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}
    id:number,
    title:string,
    description:string,
    discountPercentage:string,
    images:string[],
    price:number;
}
const initialState:dataType[]=[];
const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        add:function(state:dataType[],action){
            state.push(action.payload);
        },
        remove: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
          }
          
    }
});
export const {add ,remove} = cartSlice.actions;
export default cartSlice.reducer;
