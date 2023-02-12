import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterpartyApi } from 'entities/store';

const rootReducer = combineReducers({
	[counterpartyApi.reducerPath]: counterpartyApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(counterpartyApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']