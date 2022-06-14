import styles from './IconButton.module.css';

export const IconButton = ({ children }) => {

	return (
		<button className={styles.button}>
			{children}
		</button>
	);
};