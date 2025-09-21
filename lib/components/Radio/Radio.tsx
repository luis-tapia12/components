import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Radio.module.css';

import type { FormSize } from '../@types/global';

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: FormSize;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ size = 'md', ...props }, ref) => {
    return (
      <input
        className={classNames(styles.radio, styles[size])}
        ref={ref}
        {...props}
        type="radio"
      />
    );
  },
);

export default Radio;
