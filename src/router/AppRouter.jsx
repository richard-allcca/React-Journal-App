import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from './../auth/routes/AuthRoutes';
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import LoadingAuth from "../ui/components/ChekingAuth";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') return <LoadingAuth />;

  return (
    <Routes >

      {
        (status === 'authenticated')
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      {/* En caso de un ruta desconocida  */ }
      <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  );
};
