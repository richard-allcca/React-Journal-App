import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "./../views/NothingSelectedView";
import { NoteView } from "./../views/NoteView";

import { useDispatch, useSelector } from "react-redux";
import { startSavingNewNote } from "../../store/journal";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const JournalPage = () => {
  const { isSaving, active, messageSaved, title } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title,
        text: messageSaved,
        timer: 3000
      });
    }
  }, [messageSaved]);

  const onClickNewNote = () => {
    dispatch(startSavingNewNote());
  };

  return (
    <JournalLayout>

      {
        active
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size="large"
        sx={ {
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        } }
      >
        <AddOutlined sx={ { fontSize: 30 } } />
      </IconButton>
    </JournalLayout>
  );
};
