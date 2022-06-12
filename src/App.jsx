import './global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';

import {	
	Header,
	Input,
	BoxButton,
	TaskInfo,
	EmptyAlert
} from './Index';

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
					<BoxButton>
						Criar
						<PlusCircle weight="bold" />
					</BoxButton>
				</form>

				<div className={styles.infoWrapper}>
					<TaskInfo name="Tarefas criadas" color="Blue" />
					<TaskInfo name="Concluídas" color="Purple"/>
				</div>

				<ul className={styles.tasksList}>
					<EmptyAlert />
				</ul>
			</div>
		</main>
	);
};