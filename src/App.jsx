import './global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Header, Input, BoxButton, TaskInfo, EmptyAlert, Task } from './Index';

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
					{/* <EmptyAlert /> */}
					<Task name="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
					<Task name="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
				</ul>
			</div>
		</main>
	);
};