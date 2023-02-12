import { Counterparty } from 'entities/ui/shared'

export interface TypeCounterparty {
	data: Counterparty[];
	links: {
		first: string;
		last: string;
		next: string;
		prev: string;
	},
	meta: any
}