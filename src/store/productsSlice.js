const {createSlice} =require('@reduxjs/toolkit')

export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});//read only...

const productSlice=createSlice(
    {
        name:"productSlice",
        initialState:{
            data:[],
            status:STATUSES.IDLE
        },
        reducers:{
            setProducts(state,actions){
                state.data=actions.payload;
            },
            setStatus(state,actions){
                state.status=actions.payload;
            },
        }
    }
)

export const {setProducts,setStatus}=productSlice.actions;
export default  productSlice.reducer;


//THunks 
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch,getState)
    {   
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res= await fetch("https://fakestoreapi.com/products/");
            const data= await res.json();
            // console.log(data);
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE))
        }
        catch(err)
        {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
    
}

