import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { CreateButton } from './components/CreateButton';
import { TaskInfo } from './components/TaskInfo';

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

				<div className={styles.infoWrapper}>
					<TaskInfo name="Tarefas criadas" color="Blue" />
					<TaskInfo name="Concluídas" color="Purple"/>
				</div>
			</div>
		</main>
	);
};