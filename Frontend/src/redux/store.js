import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import destinationReducer from "./slices/destinationSlice";
import tourPackageReducer from "./slices/tourPackageSlice";
import userReducer from "./slices/userSlice";
import bookingReducer from "./slices/bookingSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    destination: destinationReducer,
    tourPackage: tourPackageReducer,
    user: userReducer,
    booking: bookingReducer
  },
});

export default store;