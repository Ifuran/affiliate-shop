import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    item: {},
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    fetchProductsSuccess: (state, action) => {
      (state.isLoading = false),
        (state.errorMessage = ""),
        (state.data = action.payload);
    },
    fetchProductByIdSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.item = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      const id = action.payload;
      state.data = state.data.filter((product) => product._id !== id);
    },
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      (state.isLoading = false), (state.errorMessage = action.payload);
    },
  },
});

export const {
  fetchProductsSuccess,
  fetchProductByIdSuccess,
  deleteProductSuccess,
  startLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer;

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const result = await axios.get("http://localhost:5000/api/products");
      dispatch(fetchProductsSuccess(result.data.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getProductById = (pid) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const result = await axios.get(
        `http://localhost:5000/api/products/${pid}`
      );
      dispatch(fetchProductByIdSuccess(result.data.data));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    // if (!newProduct.title || !newProduct.price ||!newProduct.image_url || !newProduct.product_url || !newProduct.description) {
    //   dispatch(setError(""))
    // }
    try {
      const result = await axios.post(
        "http://localhost:5000/api/products",
        newProduct
      );
      console.log(result);
      // dispatch(fetchProductByIdSuccess(result));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const deleteProduct = (pid) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/products/${pid}`
      );
      dispatch(deleteProductSuccess(pid));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
