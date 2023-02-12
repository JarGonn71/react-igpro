import { TypeCounterparties } from '../TypeCounterparties';
import { RatingStarts } from 'shared/ui'

import styles from './TableCounterparties.module.scss';

type Counterparty = {
	name: string;
	type: number;
	rating: number;
	phone: string;
	email: string;
	id: number;
}

export interface TableCounterpartiesProps {
	fields: string[];
	list: Counterparty[]
}

export const TableCounterparties = ({fields, list}: TableCounterpartiesProps): JSX.Element => {
	return (
		<div className={styles.Table}>
			<div className={styles.TableHeader}>
				{fields.map(field => (
					<div className={styles.TableHeaderItem}>
						{field}
					</div>
				))}
			</div>
			{list.map(Counterparty => (
				<div className={styles.TableContentItem}>
					<div className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
						{Counterparty.name}
					</div>
					<TypeCounterparties type={Counterparty.type}/>
					<div className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
						<RatingStarts rating={Counterparty.rating}/>
					</div>
					<div
						className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
						{Counterparty.phone}
					</div>
					<div
						className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
						{Counterparty.email}
					</div>
				</div>
			))}
		</div>
	)
}

