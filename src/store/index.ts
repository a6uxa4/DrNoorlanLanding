import appointmentService from "@/services/appoinment.service";
import personalService from "@/services/personal.service";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [appointmentService.reducerPath]: appointmentService.reducer,
    [personalService.reducerPath]: personalService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      appointmentService.middleware,
      personalService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
