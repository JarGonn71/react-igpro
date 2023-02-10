import { FC, FocusEvent } from 'react';
import { Input } from 'shared/ui/ui-kit'
import classNames from 'classnames';

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
		onBlur,
		onFocus
	}): JSX.Element => {
	const firstName = register && register(name)
	return (
		<div className={classNames(className)}>
			<label htmlFor={name}>{label}</label>
			{type === "text" &&
				<>
					<Input
						name={name}
						error={error}
						type={type}
						onBlur={onBlur}
						onFocus={onFocus}
						{...firstName}
					/>
					{error && <div>{error}</div> }
				</>
			}

		</div>
	)
}