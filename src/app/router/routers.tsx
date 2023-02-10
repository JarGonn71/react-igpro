import { Route, Routes } from 'react-router-dom';
import { FinancePage } from '../../pages/FinancePage';
import { PaymentsPage } from '../../pages/PaymentsPage';
import { PurchasesPage } from '../../pages/PurchasesPage';
import { StoragePage } from '../../pages/StoragePage';
import { CounterpartiesPage } from '../../pages/CounterpartiesPage';
import { CompanyPage } from '../../pages/CompanyPage';
import { Suspense } from 'react';

export const Routers = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={'/'} element={<FinancePage /> }/>
				<Route path={'/pay'} element={<PaymentsPage />}/>
				<Route path={'/purchases'} element={<PurchasesPage />}/>
				<Route path={'/storage'} element={<StoragePage /> }/>
				<Route path={'/counterparties'} element={<CounterpartiesPage />}/>
				<Route path={'/company'} element={<CompanyPage />}/>
			</Routes>
		</Suspense>
	)
}