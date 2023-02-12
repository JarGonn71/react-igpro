import { TableCounterparties } from 'entities/ui/shared';
import { Block } from '../../../shared/ui';

const columns = [
	'Наименование',
	'Тип',
	'Рейтинг',
	'Номер телефона',
	'E-mail'
];
const listData = [
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 6,
		"email": 'tes1@mai.ru',
		"phone": '1231231',
		"rating": 3
	},
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 5,
		"email": '',
		"phone": '',
		"rating": 4
	},
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 4,
		"email": '',
		"phone": '',
		"rating": 3
	},
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 3,
		"email": '',
		"phone": '',
		"rating": 5
	},
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 2,
		"email": '',
		"phone": '',
		"rating": 1
	},
	{
		"id": 1,
		"name": "ООО \"ТАКСКОМ\"",
		"type": 1,
		"email": '',
		"phone": '',
		"rating": 4
	}
]


const CounterpartiesPage = () => {

	return (
		<div>
			<Block className={'!px-0'}>

				<TableCounterparties fields={columns} list={listData}/>
			</Block>
		</div>
	);
};

export default CounterpartiesPage;