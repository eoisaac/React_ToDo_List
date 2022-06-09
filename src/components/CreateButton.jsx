import styles from './CreateButton.module.css';
import { PlusCircle } from 'phosphor-react';

export const CreateButton = () => {
	return (
		<button className={styles.button}>
			Criar
			<PlusCircle weight="bold"/>
		</button>
	);
};