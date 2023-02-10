import { useState, useCallback } from 'react';
import ClassNames from 'classnames';

export const Accordion = () => {
	const [open, setOpen] = useState<boolean>(false)
	const handler = useCallback(() => {
		setOpen(prev => !prev);
	}, []);
	return (
		<div>
			<div onClick={handler}>Обьекты</div>
			<div className={ClassNames( 'flex', {open: 'visible'})}>
				Lorem ipsum dolor sit amet, consecrate radicalising elite. Asperiores labore laborum maiores nulla porro!
			</div>
		</div>
	)
}