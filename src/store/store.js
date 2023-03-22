import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal/";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal: journalSlice.reducer,
	},
});

// NOTE - El provider de store esta en main
