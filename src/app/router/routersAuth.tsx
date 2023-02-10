import { Route, Routes } from 'react-router-dom';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import { Suspense } from 'react';

export const RoutersAuth = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={'/registration'} element={<RegistrationPage /> }/>
				<Route path={'/login'} element={<LoginPage />}/>
			</Routes>
		</Suspense>
	)
}