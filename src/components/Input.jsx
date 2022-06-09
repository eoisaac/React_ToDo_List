import styles from './Input.module.css';

export const Input = ({ name, id, placeholder }) => {
	return (
		<>
			<label 
				htmlFor={id}
				className={styles.label}
			>
				{placeholder}
			</label>
			<input 
				type="text" 
				name={name}
				id={id} 
				className={styles.input} 
				placeholder={placeholder}
			/>
		</>
	);
};