import { forwardRef, ForwardedRef, ChangeEvent, ClipboardEvent } from 'react';
import { TypeInput } from '../Input';
import ClassNames from 'classnames';

import styles from './InputPhone.module.scss';

export const InputPhone = forwardRef((
	{ className, name, type, error, ...props }: TypeInput, ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {

	const PATTERN = /\D/g;
	const getInputNumbersValue = (value: string) => {
		return value.replace(PATTERN, '');
	}

	const handlePhoneInput = (event:ChangeEvent<HTMLInputElement>) => {
		const input = event.target;
		let inputNumbersValue = getInputNumbersValue(input.value);
		let formatInputValue = '';
		const selectionStart = input.selectionStart;
		if ( !inputNumbersValue ) {
			return input.value = '';
		}

		if (input.value.length !== selectionStart) {
			return ;
		}

		formatInputValue = "(" +  inputNumbersValue[0];

		if (inputNumbersValue.length > 1) {
			formatInputValue += inputNumbersValue.substring(1,3);
		}
		if (inputNumbersValue.length >= 4) {
			formatInputValue += ") " + inputNumbersValue.substring(3,6);
		}

		if (inputNumbersValue.length >= 7) {
			formatInputValue +=  " " +  inputNumbersValue.substring(6,8) ;
		}

		if (inputNumbersValue.length >= 9) {
			formatInputValue += "-" + inputNumbersValue.substring(8,10);
		}

		input.value = formatInputValue;
	}

	const handlePhonePaste = (event: ClipboardEvent<HTMLInputElement>) => {
		// @ts-ignore
		const pasted = event.clipboardData ?? window["clipboardData"];
		const input = event.target as HTMLInputElement;
		const inputNumbersValue = getInputNumbersValue(input.value);
		let pastedText = pasted.getData("Text");
		if (pastedText) {
			if (pastedText.substring(0,2) === '+7') {
				input.value = pastedText.substring(2);
			} else if (pastedText.substring(0,1) === '8') {
				input.value = pastedText.substring(1);
			} else {
				input.value = pastedText;
			}
		}
	}

	return (
		<div className='flex space-x-1.5'>
			<div className={ClassNames('font-semibold text-[#616161] text-sm flex items-center justify-center bg-gray-300 rounded w-[40px]')}>
				+7
			</div>
			<input
				className={ClassNames(styles.InputPhone, {  '!border-error focus:border-error': error }, className)}
				name={name}
				type={type}
				maxLength={15}
				onInput={handlePhoneInput}
				onPaste={handlePhonePaste}
				ref={ref}
				{...props}
			/>
		</div>
	)
})

InputPhone.displayName = 'FormInputPhone';