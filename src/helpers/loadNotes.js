import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "./../firebase/config";

export const loadNotes = async (uid = "") => {
	if (!uid) throw new Error("missing UID user, loadNotes");

	const collectionRef = collection(FirebaseDB, `${uid}`);
	const docs = await getDocs(collectionRef); // puedes agregar filtros de mongo para consultas

	const notes = [];
	docs.forEach((doc) => {
		notes.push(doc.id, doc.data());
	});

	return notes;
};
