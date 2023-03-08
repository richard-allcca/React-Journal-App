import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from './../auth/routes/AuthRoutes';
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useSelector } from 'react-redux';
import ChekingAuth from "../ui/components/ChekingAuth";



export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);

  if (status === 'cheking') {
    return <ChekingAuth />;
  }

  return (
    <Routes>

      {/* Login y Registro */ }
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      {/* JournalApp contenido general */ }
      <Route path="/*" element={ <JournalRoutes /> } />

    </Routes>
  );
};
