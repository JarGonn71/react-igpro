import {useContext} from "react";
import {AuthContext, AuthContextProps} from "./AuthContext";

export function useAuth(): AuthContextProps {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	return {isAuth, setIsAuth}
}