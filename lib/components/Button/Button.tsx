import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

import type { Size } from '../@types/global';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <button
        className={classNames(styles.button, styles[size])}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Button;
