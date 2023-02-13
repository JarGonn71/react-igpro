import { createPortal } from 'react-dom';
import { ReactNode, ReactPortal } from 'react';

export interface PortalProps {
	children: ReactNode;
	isShown: boolean;
	handlerClose?: () => void;
}

export const Portal = ({ children, isShown,  handlerClose }: PortalProps): ReactPortal | null => {
	return isShown ? createPortal(
				<div className="fixed z-[100] w-screen h-screen top-0 left-0 right-0 bottom-0">
					{children}
				</div>,
				document.getElementById('portal-root')!
			) : null
}