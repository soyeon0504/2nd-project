import { configureStore } from "@reduxjs/toolkit";
import MyPageSlice from "./slices/MyPageSlice";
export default configureStore({
  reducer: {
    MyPageSlice: MyPageSlice,
  },
});
