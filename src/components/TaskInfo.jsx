import styles from './TaskInfo.module.css';

export const TaskInfo = ({ name, color }) => {
	return (
		<div className={styles[`info${color}`]}>
			{name}
			<span className={styles.counter}> 0 </span>
		</div>
	);
};