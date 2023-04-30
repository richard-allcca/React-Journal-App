import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./../../firebase/config";
import { addNewNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNotes } from "./";
import { fileUpload, loadNotes } from "../../helpers";

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

    // crea la referencia al doc
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    // Actualiza la nota en Firestore
    await setDoc(docRef, noteToFirestore, { merge: true });

    // Actualiza la nota en local
    dispatch(updateNotes(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    const filesUploadPromises = [];
    for (const file of files) {
      filesUploadPromises.push(fileUpload(file));
    }

    const photosUrl = await Promise.all(filesUploadPromises);
    //  console.log(photosUrl);
    dispatch(setPhotosToActiveNote(photosUrl));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id))
  };
};