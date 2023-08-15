const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            add: function (state, action) {  //this can be also written like this:
                state.push(action.payload);  //add(){....};
            },                               // this is newn ES6 syntax
            remove: function (state, action) {
                return state.filter((item) => item.id !== action.payload);
            }
        }
    }
);
export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;

