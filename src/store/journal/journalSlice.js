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
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state, action) => {},
		updateNotes: (state, action) => {},
		deleteNoteById: (state, action) => {},
	},
});

export const {
	savingNewNote,
	addNewNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNotes,
	deleteNoteById,
} = journalSlice.actions;

// export default journalSlice.reducer;
