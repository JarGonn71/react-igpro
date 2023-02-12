import { useCallback } from 'react';
import { useSideBar } from 'shared/providers/SIdeBarProvider'
import { ItemSideBar } from 'entities/ui/shared';
import ClassNames from 'classnames';
import {ReactComponent as ReactLogo} from 'shared/assets/icons/logo.svg';
import {ReactComponent as Objects} from 'shared/assets/icons/sideBar-objects.svg';
import {ReactComponent as Hide} from 'shared/assets/icons/x.svg';

import styles from './SideBar.module.scss';

export const SideBar = () => {
	const { isOpen, setIsOpen } = useSideBar();

	const handleHideSideBar = useCallback(() => {
		if (setIsOpen) {
			setIsOpen(false);
		}
	}, [setIsOpen])

	return (
		<div className={ClassNames(styles.SideBar, "h-screen bg-sideBar text-white ", isOpen ? 'min-w-sideBar' : 'min-w-0')}>
			<div className={styles.sideBarHeader}>
				<ReactLogo/>
				<Hide onClick={handleHideSideBar} className="absolute right-4 cursor-pointer"/>
			</div>
			<div className={styles.sideBarMenu}>
				<ul className="mt-6">
					<ItemSideBar count={5} href={'/'}>
						<Objects/>
						<span className="text-sm ml-2">Обьекты</span>
					</ItemSideBar>
				</ul>
			</div>
		</div>
	)
}