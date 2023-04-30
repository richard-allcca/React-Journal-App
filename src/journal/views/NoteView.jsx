import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ImageGalery } from "../components/";
import { useFrom } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
  const fileInputRef = useRef();

  // usamos la nota activa para pasarla al useform y mostrarla para edicion
  const { active: note, isSaving, messageSaved } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const { body, title, date, onInputChange, formState, imageUrls } = useFrom(note);

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
    if (messageSaved.length > 0) {
      Swal.fire({
        title,
        text: messageSaved,
        timer: 3000
      });
    }
  }, [messageSaved]);

  const handleInputFileChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
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

      {/* Input para carga - btn guardar */ }
      <Grid item>
        <input
          ref={ fileInputRef }
          type="file"
          style={ { display: 'none' } }
          onChange={ handleInputFileChange }
          multiple
        />
        <IconButton
          color="primary"
          onClick={ () => fileInputRef.current.click() }
          disabled={ isSaving }
        >
          <UploadOutlined />
        </IconButton>

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

      {/* Inputs de texto */ }
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

      <Grid container justifyContent='end' >
        <Button
          onClick={ onDelete }
          sx={ { mt: 2 } }
          color="error"
        >
          <DeleteOutline />
          Borrar
        </Button>

      </Grid>

      <ImageGalery title={ title } imageUrls={ imageUrls } />
    </Grid>
  );
};
