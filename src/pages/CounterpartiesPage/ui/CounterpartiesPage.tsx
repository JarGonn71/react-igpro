import { TableCounterparties, Counterparty } from 'entities/ui/shared';
import { Block } from 'shared/ui';
import { useGetPageCounterpartyQuery } from 'entities/store';
import {  useState } from 'react';
import { Pagination } from 'entities/ui/shared/Pagination';

const columns = [
	'Наименование',
	'Тип',
	'Рейтинг',
	'Номер телефона',
	'E-mail'
];

const CounterpartiesPage = () => {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useGetPageCounterpartyQuery(page)
	return (
		<div>
			<Block className={'!px-0 flex-col'}>
				{isLoading
					? <div className="flex justify-center items-center">
						<div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
					:
					<>
						<TableCounterparties
							fields={columns}
							list={data?.data}
						/>
						<Pagination
							currentPage={data?.meta.current_page}
							lastPage={data?.meta.last_page}
							setPage={setPage}
						/>
					</>}
			</Block>
		</div>
	);
};

export default CounterpartiesPage;