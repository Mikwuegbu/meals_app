import { configureStore, createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		ids: [] as string[],
	},
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.id);
		},
		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice.reducer,
	},
});

// Action creators
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
