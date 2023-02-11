import { useState, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField, Button } from 'shared/ui/ui-kit';
import * as yup from 'yup';

export interface RegistrationFormType {
	firstName: string;
	email: string;
	password: string;
	rePassword: string;
}

type fieldType = 'firstName' | 'email' | 'password' | 'rePassword'

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
		.required('Укажите имя'),
  email: yup
		.string()
    .email('Некорректая почта')
    .required('Укажите почту'),
  password: yup
    .string()
    .required()  ,
  rePassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Пороли не совпадают")
})

export const RegistrationForm = (): JSX.Element => {
	const [isFocused, setIsFocused] = useState({
		firstName: false,
		email: false,
		password: false,
		rePassword: false
	});

	const { register, watch, handleSubmit, formState: { errors } } = useForm<RegistrationFormType>({
		resolver: yupResolver(schema),
    mode: 'onBlur',
	});

	const watchAllFields = watch();

	const onSubmit = (data: RegistrationFormType) => {
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
		<div className={'bg-white p-5 rounded-lg min-w-[350px]'}>
			<form autoComplete="none" onSubmit={handleSubmit(onSubmit)}>
				<div className={'grid gap-y-4'}>
					<FormField
						label={'Имя'}
						name={'firstName'}
						type={'text'}
						register={register}
						error={errors?.firstName?.message}
						isFocused={isFocused.firstName}
						isRequired
            isValid={!errors?.firstName && Boolean(watchAllFields['firstName'])}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<FormField
						label={'Почта'}
						name={'email'}
						type={'text'}
						register={register}
						error={errors?.email?.message}
						isFocused={isFocused.email}
						isRequired
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
          <FormField
            label={'Пороль'}
            name={'password'}
            type={'password'}
            register={register}
            error={errors?.password?.message}
            isFocused={isFocused.password}
            isRequired
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormField
            label={'Повторите пороль'}
            name={'rePassword'}
            type={'password'}
            register={register}
            error={errors?.rePassword?.message}
            isFocused={isFocused.rePassword}
            isRequired
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button>
            Регистрация
          </Button>
        </div>
			</form>
		</div>
	)
}