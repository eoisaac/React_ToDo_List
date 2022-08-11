import './style/global.css';
import styles from './style/App.module.css';
import { PlusCircle } from 'phosphor-react';
import { Header, BoxButton, InfosWrapper, EmptyAlert, Task } from './index';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

interface Task {
  id: string;
  name: string;
  concluded: boolean;
}

export const App = () => {
  const setOnLocalStorage = (key: string, value: []) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getOfLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '[]');
  };

  const [tasks, setTasks] = useState(getOfLocalStorage('tasks') || []);
  const [newTaskName, setNewTaskName] = useState('');
  const [concludedTasksAmount, setConcludedTasksAmount] = useState(0);

  const isNewTaskNameEmpty = newTaskName.length === 0;
  const handleNewTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const getNewTaskData = (): Task => ({
    id: `${String(tasks.length + 1).padStart(2, '0')}/${newTaskName}`,
    name: newTaskName,
    concluded: false,
  });

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    setTasks([...tasks, getNewTaskData()]);
    setNewTaskName('');
  };

  const handleOnConcludeTask = (taskID: string, isConcluded: boolean) => {
    const updatedTasks: [Task] = tasks.map((task: Task) => {
      return task.id === taskID ? { ...task, concluded: isConcluded } : task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskToDeleteID: string) => {
    const tasksWithoutDeletedTask = tasks.filter(({ id }: Task) => {
      return id !== taskToDeleteID;
    });

    setTasks(tasksWithoutDeletedTask);
    setConcludedTasksAmount(concludedTasksAmount - 1);
  };

  useEffect(() => {
    const concludedTasks = tasks.filter(
      ({ concluded }: Task) => concluded
    ).length;

    setConcludedTasksAmount(concludedTasks);
    setOnLocalStorage('tasks', tasks);
  }, [tasks]);

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
            value={newTaskName}
          />

          <BoxButton
            title={
              isNewTaskNameEmpty
                ? 'Adicione uma nova tarefa'
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
            tasks.map(({ id, name, concluded }: Task) => {
              return (
                <Task
                  key={id}
                  id={id}
                  name={name}
                  concluded={concluded}
                  onConclude={handleOnConcludeTask}
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
