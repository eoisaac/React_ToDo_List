import styles from './BoxButton.module.css';

export const BoxButton = ({ children }) => {
	return (
		<button className={styles.button}>
			{children}
		</button>
	);
};