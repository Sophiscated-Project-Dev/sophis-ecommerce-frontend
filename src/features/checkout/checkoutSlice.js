import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  checkoutInfo: {
    name: '',
    email: '',
    street: '',
    state: '',
    country: '',
    paymentMethod: '',
    amount: 0,
  },
  error: '',
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addCheckoutInfo: (state, { payload }) => {
      const tree = payload;
      state.checkoutInfo = tree;
    }
  },
});

export const { addCheckoutInfo} = checkoutSlice.actions;

export default checkoutSlice.reducer;
