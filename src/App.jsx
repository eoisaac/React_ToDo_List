import './style/global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Header, BoxButton, InfosWrapper, EmptyAlert, Task } from './Index';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [concludedTasksAmount, setConcludedTasksAmount] = useState(0);

  const isNewTaskNameEmpty = newTaskName.length === 0;
  const handleNewTaskNameChange = (event) => setNewTaskName(event.target.value);

  const getNewTaskData = () => ({
    id: Date.now(),
    name: newTaskName,
    concluded: false,
  });

  const handleCreateNewTask = (event) => {
    event.preventDefault();

    setTasks([...tasks, getNewTaskData()]);
    setNewTaskName('');
    event.target.reset();
  };

  const handleConcludedTasksAmount = {
    increase: () => setConcludedTasksAmount(concludedTasksAmount + 1),
    decrease: () => setConcludedTasksAmount(concludedTasksAmount - 1),
  };

  const handleDeleteTask = (taskToDeleteId) => {
    const tasksWithoutDeletedTask = tasks.filter(({ id }) => {
      return id !== taskToDeleteId;
    });

    setTasks(tasksWithoutDeletedTask);
    concludedTasksAmount && handleConcludedTasksAmount.decrease();
  };

  return (
    <main>
      <Header />

      <div className={styles.container}>
        <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
          <label className={styles.label} htmlFor="taskNameInpt">
            Adicione uma nova tarefa
          </label>
          <input
            type="text"
            id="taskNameInpt"
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
            onChange={handleNewTaskNameChange}
          />

          <BoxButton
            title={
              isNewTaskNameEmpty
                ? 'Digite uma nova tarefa'
                : 'Criar nova tarefa'
            }
            isDisabled={isNewTaskNameEmpty}
          >
            Criar
            <PlusCircle weight="bold" />
          </BoxButton>
        </form>

        <InfosWrapper
          createdTasksAmount={tasks.length}
          concludedTasksAmount={concludedTasksAmount}
        />

        <ul className={styles.tasksList}>
          {tasks.length <= 0 ? (
            <EmptyAlert />
          ) : (
            tasks.map(({ id, name, concluded }) => {
              return (
                <Task
                  key={id}
                  id={id}
                  name={name}
                  concluded={concluded}
                  onCheckboxChange={handleConcludedTasksAmount}
                  onDeleteTask={handleDeleteTask}
                />
              );
            })
          )}
        </ul>
      </div>
    </main>
  );
};
