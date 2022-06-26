import styles from './BoxButton.module.css';

export const BoxButton = ({ children, title, isDisabled }) => {
  return (
    <button className={styles.button} title={title} disabled={isDisabled}>
      {children}
    </button>
  );
};
