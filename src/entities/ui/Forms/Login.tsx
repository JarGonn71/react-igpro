import { useState, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField, Button } from 'shared/ui/ui-kit';
import { useAuth } from 'shared/providers/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import * as yup from 'yup';

export interface LoginFormType {
	email: string;
	password: string;
}

type fieldType = 'email' | 'password';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Некорректая почта')
		.required('Укажите почту'),
	password: yup
		.string()
		.required()
})

export const LoginForm = (): JSX.Element => {
	const { setIsAuth } = useAuth();
	const navigate = useNavigate();
	const [isFocused, setIsFocused] = useState({
		email: false,
		password: false,
	});

	const { register, watch, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const watchAllFields = watch();

	const onSubmit = (data: LoginFormType) => {
		console.log("data ", data);
		if (setIsAuth) {
			setIsAuth(true)
			navigate('/')
		}
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
		<div className='flex flex-col bg-white p-5 rounded-lg min-w-[350px]'>
			<form autoComplete="none" onSubmit={handleSubmit(onSubmit)}>
				<div className={'grid gap-y-4'}>
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
					<Button>
						Войти
					</Button>
				</div>
			</form>
			<Link className="mt-4 ml-auto text-purple-600" to={'/registration'}>Регистрация</Link>
		</div>
	)
}