import { FC, FocusEvent } from 'react';
import { Input } from 'shared/ui/ui-kit'
import classNames from 'classnames';

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
		onBlur,
		onFocus
	}): JSX.Element => {
	const firstName = register && register(name)

	return (
		<div className={classNames('relative ', className)}>
			<label htmlFor={name}>{label}</label>
			{(type === "text" || type === "password") &&
				<>
					<Input
						name={name}
						error={error}
						type={type}
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