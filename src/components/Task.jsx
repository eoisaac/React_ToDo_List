import styles from './Task.module.css';

import { IconButton } from './IconButton';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export const Task = ({ id, name, concluded, onConclude, onDeleteTask }) => {
  const [isConcluded, setIsConcluded] = useState(concluded);

  const handleIsConcluded = () => {
    setIsConcluded(!isConcluded);
    onConclude(id, !isConcluded);
  };

  const handleOnDeleteTask = () => onDeleteTask(id);

  return (
    <li className={styles.task} id={id}>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          title={
            isConcluded
              ? 'Desmarcar tarefa como concluída'
              : 'Marcar tarefa como concluída'
          }
          className={styles.checkbox}
          onChange={handleIsConcluded}
          checked={isConcluded}
        />
        <label htmlFor="checkbox" className={styles.label}>
          {isConcluded
            ? 'Desmarcar tarefa como concluída'
            : 'Marcar tarefa como concluída'}
        </label>
      </div>

      <p className={isConcluded ? styles.concluded : styles.notConcluded}>
        {name}
      </p>

      <IconButton title="Apagar tarefa" onClick={handleOnDeleteTask}>
        <Trash />
      </IconButton>
    </li>
  );
};
