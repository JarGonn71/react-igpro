import { Tabs } from 'shared/ui/ui-kit/Tabs';
import { Routers } from 'shared/router';

export const Header = () => {
	return (
		<div className="px-3 bg-white shadow-md">
			<Tabs tabs={Routers} />
		</div>
	)
}
