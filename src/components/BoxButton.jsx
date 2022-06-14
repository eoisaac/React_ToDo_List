import styles from './BoxButton.module.css';

export const BoxButton = ({ children, isDisabled }) => {
	return (
		<button className={styles.button} disabled={isDisabled}>
			{children}
		</button>
	);
};