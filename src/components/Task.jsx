import styles from './Task.module.css';

import { IconButton } from './IconButton';
import { Trash } from 'phosphor-react';

export const Task = ({ name }) => {
	return (
		<li className={styles.task}>
			<input type="checkbox" className={styles.checkbox} />

			<p className={styles.taskName}>
				{name}
			</p>

			<IconButton>
				<Trash/>
			</IconButton>
		</li>
	);
};