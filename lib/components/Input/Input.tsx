import { forwardRef } from 'react';

import styles from './Input.module.css';
import type { FormSize } from '../@types/global';
import classNames from 'classnames';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: FormSize;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <input
        className={classNames(styles.input, styles[size])}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Input;
