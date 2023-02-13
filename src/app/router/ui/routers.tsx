import { Route, Routes, useLocation } from 'react-router-dom';
import { routersConfig } from '../configRouters';
import { Suspense } from 'react';
import { HeaderPage } from 'entities/ui/shared';

export const Routers = () => {
	const location = useLocation();
	const title = Object.values(routersConfig).find(x => x.path === location.pathname)?.pageTitle || '';
	return (
		<div>
			{title && <HeaderPage titlePage={title}/>}
			<div className={'p-5 box-border'}>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						{Object.values(routersConfig).map(route => (
							<Route
								key={route.pageTitle}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</Suspense>
			</div>
		</div>
	)
}