import styles from './BoxButton.module.css';

interface BoxButtonProps {
  children?: React.ReactNode;
  title: string;
  isDisabled: boolean;
}

export const BoxButton = ({ children, title, isDisabled }: BoxButtonProps) => {
  return (
    <button className={styles.button} title={title} disabled={isDisabled}>
      {children}
    </button>
  );
};
