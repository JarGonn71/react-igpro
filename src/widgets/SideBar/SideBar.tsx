import { Accordion } from 'shared/ui/ui-kit/Accordion';
import { useState } from 'react';
import ClassNames from 'classnames';

export const SideBar = () => {
	const [open, setOpen] = useState<boolean>(true);
	return (
		<div className={ClassNames("h-screen bg-sideBar text-white ", open ? 'w-sideBar' : 'hidden')}>
			<div>

			</div>
			sideBar
			<div>
				<Accordion/>
			</div>
		</div>
	)
}