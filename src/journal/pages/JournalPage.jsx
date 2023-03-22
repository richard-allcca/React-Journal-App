import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "./../views/NothingSelectedView";
import { NoteView } from "./../views/NoteView";

import { useDispatch, useSelector } from "react-redux";
import { initNewNote, savingNewNote } from "../../store/journal";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(initNewNote());
    dispatch(savingNewNote());
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
