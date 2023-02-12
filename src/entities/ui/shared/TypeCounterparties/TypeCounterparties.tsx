import classNames from 'classnames';

import styles from './TypeCounterparties.module.scss';

export enum TypesCounterparty {
	SUBCONTRACTOR = 1,
	PROVIDER = 2,
	CUSTOMER = 3,
	INVESTOR = 4,
	STAFFER = 5,
	ANOTHER = 6
}

export const Counterparties: Record<TypesCounterparty, string> = {
	[TypesCounterparty.SUBCONTRACTOR]: 'Subcontractor',
	[TypesCounterparty.PROVIDER]: 'Provider',
	[TypesCounterparty.CUSTOMER]: 'Customer',
	[TypesCounterparty.INVESTOR]: 'Investor',
	[TypesCounterparty.STAFFER]: 'Staffer',
	[TypesCounterparty.ANOTHER]: 'Another'
}

export const CounterpartiesName: Record<TypesCounterparty, string> = {
	[TypesCounterparty.SUBCONTRACTOR]: 'Субподрядчик',
	[TypesCounterparty.PROVIDER]: 'Поставщик',
	[TypesCounterparty.CUSTOMER]: 'Заказчик',
	[TypesCounterparty.INVESTOR]: 'Инвестор',
	[TypesCounterparty.STAFFER]: 'Штатник',
	[TypesCounterparty.ANOTHER]: 'Другой'
}

export interface TypeCounterpartiesProps {
	type: TypesCounterparty;
}

export const TypeCounterparties = ({ type }: TypeCounterpartiesProps): JSX.Element => {
	return (
		<div className={classNames(styles.Container, Counterparties[type])}>
			{CounterpartiesName[type]}
		</div>
	)
}