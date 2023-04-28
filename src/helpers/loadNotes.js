import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "./../firebase/config";

/**
 * Helper to get notes
 * @param {*} uid - id del usuario
 * @returns - nota desde firestore
 */

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("missing UID user, loadNotes");

  // referencia a la colección en firebase
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

  // puedes agregar filtros de mongo para consultas
  const docs = await getDocs(collectionRef);

  const notes = [];

  // extraemos id y data de cada documento
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
