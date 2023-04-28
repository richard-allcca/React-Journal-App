import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ImageGalery } from "../components/";
import { useFrom } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
  // usamos la nota activa para pasarla al useform y mostrarla para edicion
  const { active: note, isSaving, messageSaved } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const { body, title, date, onInputChange, formState } = useFrom(note);

  // Evita render de la fecha con cambios en el input
  const formatDate = useMemo(() => {
    const newData = new Date(date);
    return newData.toUTCString();
  }, [date]);

  // actualiza la nota activa para usarla en NoteView
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire({
        title,
        text: messageSaved,
        timer: 3000
      })
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={ { mb: 2 } }
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light">
          { formatDate }
        </Typography>
      </Grid>

      <Grid item>
        <Button
          onClick={ onSaveNote }
          color="primary"
          sx={ { padding: 2 } }
          disabled={ isSaving }
        >
          <SaveOutlined sx={ { fontSize: 30, mr: 1 } } />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label={ title ? "" : "Titulo" }
          sx={ { border: "none", mb: 1 } }
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio hoy?"
          label={ body ? "" : "Detalles" }
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <ImageGalery />
    </Grid>
  );
};
