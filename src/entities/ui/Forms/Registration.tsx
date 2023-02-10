import { FC, useState, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from 'shared/ui/ui-kit';
import * as yup from 'yup';

export interface RegistrationFormType {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	password: string;
	rePassword: string;
}

type fieldType = 'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'password' | 'rePassword'

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
		.required('Укажите имя'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифры')
		.required('Укажите фамилию'),
})

export const RegistrationForm:FC = (): JSX.Element => {
	const [isFocused, setIsFocused] = useState({
		firstName: false,
		lastName: false,
		phoneNumber: false,
		email: false,
		password: false,
		rePassword: false
	});

	const { register, watch, handleSubmit, formState: { errors } } = useForm<RegistrationFormType>({
		resolver: yupResolver(schema),
	});

	const watchAllFields = watch();

	const onSubmit = (data:RegistrationFormType) => {
		console.log("data ", data);
	}

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		const fieldName = event.target.name as fieldType
		if (watchAllFields[fieldName] !== '') {
			setIsFocused({...isFocused, [event.target.name]: true });
		} else {
			setIsFocused({...isFocused, [event.target.name]: false });
		}
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocused({...isFocused, [event.target.name]: true });
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<FormField
						label={'Имя'}
						name={'firstName'}
						type={'text'}
						register={register}
						error={errors?.firstName?.message}
						isFocused={isFocused.firstName}
						isRequired
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<FormField
						label={'Фамилия'}
						name={'lastName'}
						type={'text'}
						register={register}
						error={errors?.lastName?.message}
						isFocused={isFocused.lastName}
						isRequired
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				</div>
				<button>submit</button>
			</form>
		</div>
	)
}