import styles from './Header.module.css';
import logo from '../assets/todo-logo.svg';

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				<img src={logo} alt="Logo ToDo_App" />
				<span className={styles.title}>ToDo</span>
			</h1>
		</header>
	)
};