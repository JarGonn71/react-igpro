import {useContext} from "react";
import {SideBarContext, SideBarContextProps} from "./SideBarContext";

export function useSideBar(): SideBarContextProps {
	const {isOpen, setIsOpen} = useContext(SideBarContext);

	return {isOpen, setIsOpen}
}