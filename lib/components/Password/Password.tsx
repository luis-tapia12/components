import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Password.module.css';

import type { FormSize } from '../@types/global';

interface PasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: FormSize;
}

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <input
        className={classNames(styles.password, styles[size])}
        ref={ref}
        {...props}
        type="password"
      />
    );
  },
);

export default Password;
