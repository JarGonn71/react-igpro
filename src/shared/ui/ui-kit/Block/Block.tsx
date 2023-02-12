import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';
import classNames from 'classnames';

interface BlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

export const Block: FC<BlockProps> = ({ children, className }) => {
	return (
		<div className={classNames("flex p-6 rounded-lg shadow-lg bg-white", className)}>
			{children}
		</div>
	)
}