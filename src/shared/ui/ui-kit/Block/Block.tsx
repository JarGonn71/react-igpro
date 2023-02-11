import { DetailedHTMLProps, HTMLAttributes, ReactNode, FC } from 'react';

interface BlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	children: ReactNode;
}

export const Block: FC<BlockProps> = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
				{children}
			</div>
		</div>
	)
}