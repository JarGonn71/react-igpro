import {createContext} from 'react';

export interface SideBarContextProps {
	isOpen?: boolean,
	setIsOpen?: (isAuth: boolean) => void;
}

export const SideBarContext = createContext<SideBarContextProps>({})