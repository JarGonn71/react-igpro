import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { configApp } from 'shared/config';
import { TypeCounterparty } from './TypeCounterparty';

export const counterpartyApi = createApi({
	reducerPath: 'counterpartyApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${configApp.BaseAPIURl}/api/contragent/index`,
		prepareHeaders: (headers, { getState }) => {
			headers.set('Accept', 'application/json')
			headers.set('content-type', 'application/json')
		}
	}),
	endpoints: (builder) => ({
		getPageCounterparty: builder.query<TypeCounterparty, number>({
			query: (page) => `?page=${page}`,
		}),
	}),
})

export const { useGetPageCounterpartyQuery } = counterpartyApi
