import styles from './EmptyAlert.module.css';
import clipboardImg from '../assets/clipboard-img.svg';

export const EmptyAlert = () => {
  return (
    <div className={styles.alert}>
      <img
        src={clipboardImg}
        className={styles.clipboardImg}
        alt="Ilustração prancheta"
      />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <div>Crie tarefas e organize seus itens a fazer</div>
      </div>
    </div>
  );
};
