import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Checkbox.module.css';

import type { FormSize } from '../@types/global';

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: FormSize;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <input
        className={classNames(styles.checkbox, styles[size])}
        ref={ref}
        {...props}
        type="checkbox"
      />
    );
  },
);

export default Checkbox;
