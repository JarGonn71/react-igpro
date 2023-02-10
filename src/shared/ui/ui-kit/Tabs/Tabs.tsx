import { NavLink } from 'react-router-dom';

import styles from './Tabs.module.scss';

type TabType = {
	name: string;
	url: string;
}

interface TabsProps {
	tabs: TabType[];
}

export const Tabs = ({tabs}: TabsProps) => {
	return (
		<div className={styles.Container}>
			{tabs.map(item => <NavLink key={item.url} to={item.url}>
				<div className="
				p-4
				cursor-pointer
				relative
				before:absolute
				before:content-none
				before:w-full
				before:h-[2px]
				before:bottom-0
				before:left-0
				before:bg-blue
				hover:before:content-['']
				hover:text-blue"
				>
					{item.name}
				</div>
			</NavLink>)}
		</div>
	)
}