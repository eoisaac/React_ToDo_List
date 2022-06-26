import styles from './Task.module.css';

import { IconButton } from './IconButton';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export const Task = ({
  id,
  name,
  concluded,
  onCheckboxChange,
  onDeleteTask,
}) => {
  const [isConcluded, setIsConcluded] = useState(concluded);

  const handleIsConcluded = () => {
    setIsConcluded(!isConcluded);
    isConcluded ? onCheckboxChange.decrease() : onCheckboxChange.increase();
  };

  const handleOnDeleteTask = () => onDeleteTask(id);

  return (
    <li className={styles.task} id={id}>
      <input
        type="checkbox"
        className={styles.checkbox}
        title={
          isConcluded
            ? 'Desmarcar tarefa como concluída'
            : 'Marcar tarefa como concluída'
        }
        onChange={handleIsConcluded}
      />

      <p className={isConcluded ? styles.concluded : styles.notConcluded}>
        {name}
      </p>

      <IconButton title="Apagar tarefa" onClick={handleOnDeleteTask}>
        <Trash />
      </IconButton>
    </li>
  );
};
