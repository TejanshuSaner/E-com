import { configureStore, createSlice } from '@reduxjs/toolkit';

//  products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    selectedCategory: 'all',
    loading: false,
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      const categories = [...new Set(action.payload.map(p => p.category))];
      state.categories = ['all', ...categories];
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});


export const { setProducts, setSelectedCategory, setLoading, setError } = productsSlice.actions;

//  store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
