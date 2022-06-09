import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { CreateButton } from './components/CreateButton';

export const App = () => {
  return (
		<main className={styles.root}>
			<Header />
			<div className={styles.container}>
				<form className={styles.newTaskForm}>
					<Input 
						name="taskInpt" 
						id="taskInpt" 
						placeholder="Adicione uma nova tarefa" 
					/>

					<CreateButton />
				</form>
			</div>
		</main>
	);
};