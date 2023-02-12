import { RouterProps } from 'react-router-dom';
import {
	FinancePage,
	CompanyPage,
	CounterpartiesPage,
	PaymentsPage,
	PurchasesPage,
	StoragePage
} from 'pages';
import { IndexRouteProps, PathRouteProps, RouteProps } from 'react-router/dist/lib/components';

export enum AppRouters {
	FINANCE = 'Finance',
	PAYMENTS = 'Payments',
	PURCHASES = 'Purchases',
	STORAGE = 'Storage',
	COUNTERPARTIES = 'Counterparties',
	COMPANY = 'Company'
}

interface MyRouterProps extends PathRouteProps{
	pageTitle?: string,
}

export const RouterPath: Record<AppRouters, string> = {
	[AppRouters.FINANCE]: '/',
	[AppRouters.PAYMENTS]: '/pay',
	[AppRouters.PURCHASES]: '/purchases',
	[AppRouters.STORAGE]: '/storage',
	[AppRouters.COUNTERPARTIES]: '/counterparties',
	[AppRouters.COMPANY]: '/company',
}

export const routersConfig: Record<AppRouters, MyRouterProps> = {
	[AppRouters.FINANCE]: {
		path: RouterPath.Finance,
		element: <FinancePage/>,
		pageTitle: 'Финансы',
	},
	[AppRouters.PAYMENTS]: {
		path: RouterPath.Payments,
		element: <PaymentsPage/>,
		pageTitle: 'Платежи',
	},
	[AppRouters.PURCHASES]: {
		path: RouterPath.Purchases,
		element: <PurchasesPage/>,
		pageTitle: 'Общие закупки',
	},
	[AppRouters.STORAGE]: {
		path: RouterPath.Storage,
		element: <StoragePage/>,
		pageTitle: 'Склады',
	},
	[AppRouters.COUNTERPARTIES]: {
		path: RouterPath.Counterparties,
		element: <CounterpartiesPage/>,
		pageTitle: 'Контрагенты',
	},
	[AppRouters.COMPANY]: {
		path: RouterPath.Company,
		element: <CompanyPage/>,
		pageTitle: 'Компания',
	}
}
