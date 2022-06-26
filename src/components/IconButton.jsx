import styles from './IconButton.module.css';

export const IconButton = ({ children, title, onClick }) => {
  return (
    <button className={styles.button} title={title} onClick={onClick}>
      {children}
    </button>
  );
};
