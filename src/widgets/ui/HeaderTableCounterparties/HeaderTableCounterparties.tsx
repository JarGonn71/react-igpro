import { Button, Input } from 'shared/ui'
import { useCallback, useState, ChangeEvent } from 'react';
import { Portal } from 'shared/portal';
import { LeftModal } from 'features/ui';

export const HeaderTableCounterparties = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [openModal, setOpenModal] = useState<boolean>(false);
	const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}, [])

	const handleOpenModal = () => {
		setOpenModal(prevState => !prevState)
	}
	return (
		<div className="flex items-center justify-between mb-5 px-5">
			<Input placeholder={'Поиск'} className="w-[200px]" defaultValue={searchValue} name={'search'} onChange={handleSearch}/>
			<Button onClick={handleOpenModal}>+ Добавить контрагента</Button>
			<Portal isShown={openModal} handlerClose={handleOpenModal}>
				<LeftModal handleHide={handleOpenModal}/>
			</Portal>
		</div>
	)
}
