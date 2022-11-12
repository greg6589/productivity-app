import Task from "../Task/Task";
import styles from "../TaskList/TaskList.module.css";

const ActiveTasks = ({ tasks, deleteTask, changeStatus }) => {
  const active = tasks.filter((task) => task.active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      changeStatus={changeStatus}
    />
  ));

  if (active.length >= 2) {
    active.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className={styles.task_list}>
      <h2>
        You have{" "}
        <span>
          {active.length}
          {active.length === 1 ? " task " : " tasks "}
          to be done!
        </span>
      </h2>
      <ul>{activeTasks}</ul>
    </div>
  );
};
export default ActiveTasks;
