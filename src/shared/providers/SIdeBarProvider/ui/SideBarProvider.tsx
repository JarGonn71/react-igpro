import { FC, useMemo, useState, ReactNode } from 'react';
import {SideBarContext} from '../lib/SideBarContext';

interface SideBarProviderTypes {
	children: ReactNode
}

const SideBarProvider: FC<SideBarProviderTypes> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	const defaultProps = useMemo(() => ({
		isOpen: isOpen,
		setIsOpen: setIsOpen
	}), [isOpen])

	return (
		<SideBarContext.Provider value={defaultProps}>
			{children}
		</SideBarContext.Provider>
	);
};

export default SideBarProvider