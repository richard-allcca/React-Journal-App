import { useEffect, useMemo, useState } from "react";

/**
 *
 * @param {*} initialForm valores iniciales del formulario
 * @param {*} inputErrorMessages obj con función y mjs de error
 * @returns Métodos, objetos con valores de inputs y validación de errores
 */

export const useFrom = (initialForm = {}, inputErrorMessages = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		createValidators();
	}, [formState]);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	// Valida los campos del formulario
	const createValidators = () => {
		const formCheckedValues = {};

		for (const inputField of Object.keys(inputErrorMessages)) {
			// Obtiene los elementos del array de cada objeto
			const [fn, errorMessage = "Verifica este campo"] = inputErrorMessages[inputField];

			// formCheckedValues almacena null o errorMessage según valide fn()
			formCheckedValues[`${inputField}Valid`] = fn(formState[inputField])
				? null
				: errorMessage;
		}
		// se almacena el obj de validaciones
		setFormValidation(formCheckedValues);
	};

	// Verifica todos los campos de formValidation
	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			// formValidation debe tener sus elementos en null
			if (formValidation[formValue] !== null) return false;
		}
		return true;
	}, [formValidation]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,

		onResetForm,
		onInputChange,

		...formValidation,
		isFormValid,
	};
};
