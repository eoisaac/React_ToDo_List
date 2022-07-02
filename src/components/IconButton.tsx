import styles from './IconButton.module.css';

interface IconButtonProps {
  children?: React.ReactNode;
  title: string;
  onClick: (params: any) => void;
}

export const IconButton = ({ children, title, onClick }: IconButtonProps) => {
  return (
    <button className={styles.button} title={title} onClick={onClick}>
      {children}
    </button>
  );
};
