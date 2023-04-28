import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSaving: false,
	messageSaved: "",
	notes: [],
	active: null,
	// active: {
	//   id: 'ABC123',
	//   title: '',
	//   body: '',
	//   date: 123456,
	//   imgUrls: []
	// }
};

export const journalSlice = createSlice({
	name: "journal",
	initialState,

	reducers: {
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action) => {
			state.active = action.payload;
      state.messageSaved = '';
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state, action) => {
			state.isSaving = true;
      state.messageSaved = '';
		},
		updateNotes: (state, action) => {
			state.isSaving = false;
			state.notes = state.notes.map((el) =>
				el.id === action.payload.id ? action.payload : el
			);
      state.messageSaved = `${action.payload.title}, Actualizada correctamente`;
		},
		deleteNoteById: (state, action) => {},
	},
});

export const {
	addNewNote,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNotes,
} = journalSlice.actions;

// export default journalSlice.reducer;
