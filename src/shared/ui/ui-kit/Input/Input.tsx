import { DetailedHTMLProps, HTMLAttributes, forwardRef, ForwardedRef } from 'react';
import ClassNames from 'classnames';

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
				className={ClassNames('form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none outline-none', {  '!border-error focus:border-error': error }, className)}
				name={name}
				type={type}
				ref={ref}
				{...props}
			/>
		</>
	)
})

Input.displayName = 'FormInput';