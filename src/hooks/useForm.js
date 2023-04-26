import { useEffect, useMemo, useState } from "react";

export const useFrom = (initialForm = {}, validationsInput = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		createValidators();
	}, [formState]);

	// return true si formValidation tiene errores
	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			// formValidation debe tener el valor de sus keys en null
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

	const createValidators = () => {
		const formCheckedValues = {};

		for (const formField of Object.keys(validationsInput)) {
			// destructura el value de cada key en validationsInput
			const [fn, errorMessage = "Verifica este campo"] =
				validationsInput[formField];

			// formCheckedValues almacena null o errorMessage segun valide fn()
			formCheckedValues[`${formField}Valid`] = fn(formState[formField])
				? null
				: errorMessage;
		}
		// se almacena el obj de validaciones
		setFormValidation(formCheckedValues);
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
