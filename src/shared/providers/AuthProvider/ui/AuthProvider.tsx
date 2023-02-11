import { FC, useEffect, useMemo, useState, ReactNode } from 'react';
import {AuthContext} from '../lib/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthProviderTypes {
	children: ReactNode
}

const AuthProvider: FC<AuthProviderTypes> = ({ children }) => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	const defaultProps = useMemo(() => ({
		isAuth: isAuth,
		setIsAuth: setIsAuth
	}), [isAuth])

	const navigate = useNavigate();

	useEffect(() => {
		!isAuth && navigate("/login");
	}, []);

	return (
		<AuthContext.Provider value={defaultProps}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;