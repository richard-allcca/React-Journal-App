import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./../../firebase/config";
import { addNewNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNotes } from "./";
import { loadNotes } from "../../helpers";

export const startSavingNewNote = () => {
  /**
   * @param dispatch lanza la función del slice
   * @param getState accede a todos los states del store
   */

  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(savingNewNote());

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    // NOTE - importante configurar las reglas en Cloud Firestore para que reciba peticiones de user authenticated class/300

    const newDocRef = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDocRef, newNote);

    newNote.id = newDocRef.id;

    dispatch(addNewNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {

  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("El UID del usuario no existe");

    const getListNotes = await loadNotes(uid);
    dispatch(setNotes(getListNotes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    // Actualiza la nota en Firestore
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    // Actualiza la nota en local
    dispatch(updateNotes(note));
  };
};