import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  //   cartItems: [],
  cartTotalQuanty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // we check the index position of the item in the cart, if it exist we just increase the item quantity but if not we add the item to cart
      // if the _id does not match or exist it will return index -1 if yes it will return index value greater than or equal to 0
      const itemIndex = state.cartItems.findIndex((item) => {
        //  what findIndex does is to find the index position of that item in the cart
        // [note: once the id matches it returns the index position of that item in the cart array]
        return item?._id === action.payload?._id;
      });
      //   check it with the if statement, locate the index position of that already available item in the cart arr and increase the quantity
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // toast.info(
        //   `Increased ${state.cartItems[itemIndex].name.slice(
        //     0,
        //     20
        //   )} quantity in cart`,
        //   {
        //     position: "top-right",
        //   }
        // );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }; // adding product and setup it quantity immediately
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name.slice(0, 20)} added to cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const newItemsFiltered = state.cartItems.filter(
        (item) => item?._id !== action.payload?._id
      );
      state.cartItems = newItemsFiltered;
      // the local storage will persist/ reset to the new items once one click on the removefromcart action btn
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      //
      toast.error(`${action.payload.name.slice(0, 20)} removed from cart`, {
        position: "top-right",
      });
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item?._id === action.payload?._id;
      });
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        //   check to see that the quantity of that particular item is > 1, if yes u can reduce it by one
        state.cartItems[itemIndex].cartQuantity -= 1;
        // toast.info(
        //   `Decreased ${action.payload.name.slice(0, 20)} cart quantity`,
        //   {
        //     position: "top-right",
        //   }
        // );
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newItemsFiltered = state.cartItems.filter(
          (item) => item?._id !== action.payload?._id
        );
        state.cartItems = newItemsFiltered;
        //
        // toast.error(`${action.payload.name.slice(0, 20)} removed from cart`, {
        //   position: "top-right",
        // });
      }
      // the local storage will persist/ reset to the new items once one click on the decreaseCart action btn
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state, action) => {
      state.cartItems = [];
      toast.error(`Cart cleared`, {
        position: "top-right",
      });
      // the local storage will persist/ reset to the new items once one click on the removefromcart action btn
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // cartItemPrice: (state, action) => {
    //   let carttotal = state.cartItems.reduce((carttotal, cartItem) => {
    //     const { price, cartQuantity } = cartItem;
    //     const itemTotal = price * cartQuantity;

    //     carttotal.total = itemTotal;
    //     return carttotal;
    //   }, 0);

    // },

    getCartTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (carttotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          carttotal.total += itemTotal;
          carttotal.quantity += cartQuantity;

          return carttotal;
        },
        { total: 0, quantity: 0 }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuanty = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
