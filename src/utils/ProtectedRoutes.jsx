import React, { useContext, useEffect } from 'react';
import { AuthContext } from './authContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
	const { currentUser } = useContext(AuthContext);

	return currentUser ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
