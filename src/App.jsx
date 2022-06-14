import './global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Header, BoxButton, TaskInfo, EmptyAlert, Task } from './Index';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

	const isNewTaskNameEmpty = newTaskName.length === 0;

  const handleCreateNewTask = () => {
    event.preventDefault();
    setTasks([...tasks, newTaskName]);
		setNewTaskName('');
		
		event.target.reset();
		event.target.focus();
  };

	const handleNewTaskNameChange = () => {
		setNewTaskName(event.target.value);
	};

  return (
    <main className={styles.root}>
      <Header />

      <div className={styles.container}>
        <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
          <label className={styles.label} htmlFor="taskNameInpt">
						Adicione uma nova tarefa
          </label>
          <input
            type="text"
						id="taskNameInpt"
						name="taskNameInpt"
						placeholder="Adicione uma nova tarefa"
						className={styles.input}
						onChange={handleNewTaskNameChange}
          />

          <BoxButton isDisabled={isNewTaskNameEmpty}>
            Criar
            <PlusCircle weight="bold" />
          </BoxButton>
        </form>

        <div className={styles.infoWrapper}>
          <TaskInfo name="Tarefas criadas" color="Blue" />
          <TaskInfo name="Concluídas" color="Purple" />
        </div>

        <ul className={styles.tasksList}>
          {tasks.length <= 0 ? (
            <EmptyAlert />
          ) : (
            tasks.map((task) => {
              return <Task name={task} />;
            })
          )}
        </ul>
      </div>
    </main>
  );
};
