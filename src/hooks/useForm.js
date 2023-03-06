import { useEffect, useMemo, useState } from "react";

export const useFrom = (initialForm = {}, validationsInput = {}) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();

  }, [formState]);

  const isFormValid = useMemo(() => {
    // Barrido para validar si alguno de sus elementos esta en null
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(validationsInput)) {
      // obtiene el contenido del array de cada elmento de validationsInput
      const [fn, errorMessage = 'Verifica este campo'] = validationsInput[formField];

      // ejecutamos la fn y enviamos del formState el campo indicado para su validación
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }
    // Pasamos el formCheckedValues como el obj de validaciones
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