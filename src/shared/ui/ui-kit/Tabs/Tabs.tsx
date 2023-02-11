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
				<div className={styles.Item}>
					{item.name}
				</div>
			</NavLink>)}
		</div>
	)
}