import styles from './Error.module.css';

interface ErrorProps {
  message: string;
}

const Error = (props: ErrorProps) => {
  if (!props.message) {
    return null;
  }

  return <div className={styles.error}>{props.message}</div>;
};

export default Error;
