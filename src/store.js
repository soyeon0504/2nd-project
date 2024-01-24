import { configureStore } from "@reduxjs/toolkit";
import ActiveBtnSlice from "./slices/ActiveBtnSlice";
export default configureStore({
  reducer: {
   activeBtnSlice: ActiveBtnSlice
  },
});


