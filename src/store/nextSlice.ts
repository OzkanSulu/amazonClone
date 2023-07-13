import { StoreProduct } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";


interface NextState{
    productData:StoreProduct[],
    favoriteData:StoreProduct[],
    allProducts:StoreProduct[],
    userInfo:null | string,
}
const initialState:NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item:StoreProduct) => item._id === action.payload._id
      );
      if(existingProduct){
        existingProduct.quantity += action.payload.quantity
      }else{
        state.productData.push(action.payload)
      }
    },
    addFavorite:(state,action)=>{
      const existingProduct = state.favoriteData.find(
        (item:StoreProduct)=>item._id===action.payload._id

      );
      if(existingProduct){
        existingProduct.quantity+=action.payload.quantity
      }else{
        state.favoriteData.push(action.payload)
      }
    },
    increaseQuantity:(state,action)=>{
      const existingProduct=state.productData.find(
        (item:StoreProduct)=> item._id === action.payload._id
        
      );
      if(existingProduct){
        existingProduct&&existingProduct.quantity++
      }
    },
    decreaseQuantity:(state,action)=>{
      const existingProduct = state.productData.find(
        (item:StoreProduct)=>
          item._id===action.payload._id
        
      );
      if (existingProduct?.quantity===1) {
        existingProduct.quantity=1;
      }else{
        existingProduct!.quantity--;
      }
      
    },
    deleteProduct:(state,action)=>{
      state.productData=state.productData.filter(
        item =>item._id!==action.payload
      )
    },
    resetCart:(state)=>{
      state.productData=[]
    },
    addUser:(state,action)=>{
      state.userInfo=action.payload;
    },
    removeUser:(state,action)=>{
      state.userInfo=null
    },
    setAllProducts:(state,action)=>{
      state.allProducts=action.payload;
    }
    
  },
});

// Action creators are generated for each case reducer function
export const { addCart, addFavorite, increaseQuantity,decreaseQuantity,deleteProduct,resetCart,addUser,removeUser,setAllProducts } = nextSlice.actions;

export default nextSlice.reducer;
