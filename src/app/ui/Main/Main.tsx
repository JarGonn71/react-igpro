import { SideBar } from 'widgets/ui/SideBar';
import { Header } from 'widgets/ui/Header';
import { Routers } from 'app/router';

export const Main = (): JSX.Element => {
	return (
		<div className="flex">
			<SideBar/>
			<div className="grow">
				<Header/>
				<Routers/>
			</div>
		</div>
	)
}