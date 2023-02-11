import { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';

export interface ItemSideBarProps {
	children: ReactNode;
	count: number;
	href: string;
}

export const ItemSideBar:FC<ItemSideBarProps> = ({ children, count, href }): JSX.Element => {
	return (
		<Link to={href}>
			<li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
				<div className="flex items-center">
					{children}
				</div>
				<div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">{count || 0}</div>
			</li>
		</Link>
	)
}