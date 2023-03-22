import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./../../firebase/config";
import { addNewNote, setActiveNote, setNotes } from "./";
import { loadNotes } from "../../helpers";

export const initNewNote = () => {
	/**
	 * @param dispatch lanza la función del slice
	 * @param getState trae toda los states del store
	 */

	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		// uid
		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime(),
		};

		// NOTE - importante configurar las reglas en Cloud Firestore para que reciba peticiones de user authenticated class/300

		const newDoc = doc(collection(FirebaseDB, `${uid}`));
		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

export const initLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error("El UID del usuario no existe");
		// console.log(uid);
		const getListNotes = await loadNotes(uid);
		dispatch(setNotes(getListNotes));
	};
};
