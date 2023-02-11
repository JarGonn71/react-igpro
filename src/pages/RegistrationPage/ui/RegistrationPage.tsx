import { RegistrationForm } from 'entities/ui/Forms'
import { ReactComponent as ReactLogo } from '../../../shared/assets/icons/mini-logo.svg';

const RegistrationPage = () => {
	return (
		<div className='flex flex-col items-center'>
			<ReactLogo className='mb-4 scale-150'/>
			<RegistrationForm/>
		</div>
	);
};

export default RegistrationPage;