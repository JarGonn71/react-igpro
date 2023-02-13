import { useCallback } from 'react';
import { Tabs } from 'shared/ui/ui-kit/Tabs';
import { Routers } from 'shared/router';
import { ReactComponent as OpenSideBar } from 'shared/assets/icons/sideBar-open.svg';
import { useSideBar } from '../../../shared/providers/SIdeBarProvider';

export const Header = () => {
	const {isOpen, setIsOpen} = useSideBar()
	const handleOpenSideBar = useCallback(() => {
		if (setIsOpen) {
			setIsOpen(true);
		}
	}, [setIsOpen]);

	return (
		<div className="px-3 bg-white shadow-md flex items-center">
			{!isOpen && <div onClick={handleOpenSideBar} className={'bg-black p-2 mr-3 cursor-pointer -translate-x-3 rounded-tr-lg rounded-br-lg'}><OpenSideBar/></div>}
			<Tabs tabs={Routers} />
		</div>
	)
}
