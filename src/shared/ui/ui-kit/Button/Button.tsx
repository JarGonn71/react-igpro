import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

enum typeButtons {
  SUCCESS = 'success',
  PRIMARY = 'primary',
}

export interface TypeButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  themes?: typeButtons;
}

export const Button: FC<TypeButton> = ({ children, themes= typeButtons.PRIMARY, className , ...props}) => {
  return (
    <button
      {...props}
      className={classNames(styles.Button, styles[themes], className)}>
      {children}
    </button>
  )
}