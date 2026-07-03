import { createSlice,  createAsyncThunk,} from "@reduxjs/toolkit";
import { getProducts, getProductById } from "./productAPI";

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
      return await getProducts();
    }
  );

  // added 

  export const fetchProductById =
  createAsyncThunk(
    "products/fetchProductById",

    async (id) => {
      return await getProductById(id);
    }
  );

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null, // added
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.loading = false;
          state.products =
            action.payload;
        }
      )

      .addCase(
        fetchProducts.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.error.message;
        }
      )
      
      .addCase(
  fetchProductById.pending,
  (state) => {
    state.loading = true;
  }
)

.addCase(
  fetchProductById.fulfilled,
  (state, action) => {
    state.loading = false;

    state.selectedProduct =
      action.payload;
  }
)

.addCase(
  fetchProductById.rejected,
  (state, action) => {
    state.loading = false;

    state.error =
      action.error.message;
  }
);
  },
});

export default productSlice.reducer;
