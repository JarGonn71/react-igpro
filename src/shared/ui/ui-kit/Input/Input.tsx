import { DetailedHTMLProps, HTMLAttributes, forwardRef, ForwardedRef } from 'react';
import ClassNames from 'classnames';

import styles from './Input.module.scss';

export interface TypeInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string;
	name: string;
	type?: string;
	error?: string;
}

export const Input = forwardRef((
	{ className, name, type, error, ...props }: TypeInput, ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
	return (
		<>
			<input
				className={ClassNames(styles.Input, {  '!border-error focus:border-error': error }, className)}
				name={name}
				type={type}
				ref={ref}
				{...props}
			/>
		</>
	)
})

Input.displayName = 'FormInput';