import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Context } from './Context';

const ProtectedRoute = ({ element, ...rest }) => {
  const [state] = useContext(Context);

  if (state.token) {
    return <Route {...rest} element={element} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
