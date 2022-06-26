import styles from './Task.module.css';

import { IconButton } from './IconButton';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export const Task = ({ id, name, concluded, onCheckboxChange }) => {
  const [isConcluded, setIsConcluded] = useState(concluded);

  const handleIsConcluded = () => {
    setIsConcluded(!isConcluded);
		isConcluded ? onCheckboxChange.decrease() : onCheckboxChange.increase();
  };

  return (
    <li className={styles.task} id={id}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleIsConcluded}
      />

      <p className={isConcluded ? styles.concluded : styles.notConcluded}>
        {name}
      </p>

      <IconButton>
        <Trash />
      </IconButton>
    </li>
  );
};
