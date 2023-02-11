import { useState, useCallback } from 'react';

export const Accordion = () => {
	const [open, setOpen] = useState<boolean>(false)
	const handler = useCallback(() => {
		setOpen(prev => !prev);
	}, []);

	return (
		<div>
			<div onClick={handler}>Обьекты</div>
		</div>
	)
}