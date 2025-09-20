import styles from './Label.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: LabelProps) => {
  return <label className={styles.label} {...props} />;
};

export default Label;
