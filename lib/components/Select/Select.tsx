import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Select.module.css';
import type { FormSize } from '../@types/global';

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: FormSize;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <select
        className={classNames(styles.select, styles[size])}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Select;
