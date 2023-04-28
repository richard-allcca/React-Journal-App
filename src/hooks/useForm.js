import { useEffect, useMemo, useState } from "react";

/**
 *
 * @param {*} initialForm valores iniciales del formulario
 * @param {*} validationsInput obj con funcion y mjs de error
 * @returns Metodos, objetos con valores de inputs y validacion de errores
 */

export const useFrom = (initialForm = {}, validationsInput = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  // Escucha cambios en los inputs y setea sus valores
  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  // Utiliza la fn validationsInput para validar los inputs
  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(validationsInput)) {
      // destructura el value de cada key en validationsInput
      const [fn, errorMessage = "Verifica este campo"] = validationsInput[formField];

      // formCheckedValues almacena null o errorMessage segun valide fn()
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    // se almacena el obj de validaciones
    setFormValidation(formCheckedValues);
  };

  // Retorna true si formValidation no tiene errores en sus elementos
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

  return {
    ...formState,
    formState,

    onResetForm,
    onInputChange,

    ...formValidation,
    isFormValid,
  };
};
