import { FC, FocusEvent, useCallback, useState } from 'react';
import { Input, InputPhone } from 'shared/ui/ui-kit'
import classNames from 'classnames';
import { ReactComponent as IconShowPassword } from 'shared/assets/icons/visible-password.svg';
import { ReactComponent as IconHidePassword } from 'shared/assets/icons/hide-password.svg';
import styles from './FormField.module.scss';

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface FormFieldProps {
	className?: string;
	error?: string;
	label?: string;
	name: string
	// @ts-ignore
	register?: (Ref, RegisterOptions?) => { onChange, onBlur, name, ref};
	type: FormFieldType;
	isFocused?: boolean;
	isRequired?: boolean;
  isValid?: boolean;
	placeholder?: string;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const FormField:FC<FormFieldProps> = (
	{
		className,
		error,
		label,
		name,
		type,
		register,
		isFocused,
    isValid,
		placeholder,
		onBlur,
		onFocus
	}): JSX.Element => {
	const firstName = register && register(name)
	const [show, setShow] = useState<boolean>(false);

	const handleShowPassword = useCallback(() => {
		setShow(prevState => !prevState)
	}, []);
	return (
		<div className={classNames(styles.FormField, className)}>
			<label htmlFor={name}>{label}</label>
			{type === "text" &&
				<>
					<Input
						name={name}
						error={error}
						type={type}
						placeholder={placeholder}
						onBlur={onBlur}
						onFocus={onFocus}
						{...firstName}
            className={classNames( isValid && styles.isValid, className)}
					/>
					{error && <div className={styles.error}>{error}</div> }
				</>
			}
			{type === "password" &&
				<>
					<Input
						name={name}
						error={error}
						type={show ? 'text' : type}
						placeholder={placeholder}
						onBlur={onBlur}
						onFocus={onFocus}
						{...firstName}
						className={classNames( isValid && styles.isValid, className)}
					/>
					{!show
						? <IconShowPassword className={styles.IconShowPassword} onClick={handleShowPassword}/>
						: <IconHidePassword className={styles.IconShowPassword} onClick={handleShowPassword}/>
					}
					{error && <div className={styles.error}>{error}</div> }
				</>
			}
			{type === "tel" &&
				<>
					<InputPhone
						name={name}
						error={error}
						type={type}
						placeholder={placeholder}
						onBlur={onBlur}
						onFocus={onFocus}
						{...firstName}
						className={classNames( isValid && styles.isValid, className)}
					/>
					{error && <div className={styles.error}>{error}</div> }
				</>
			}
		</div>
	)
}