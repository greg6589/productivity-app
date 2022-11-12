import Task from "../Task/Task";
import styles from "../TaskList/TaskList.module.css";
import Button from "../../Button/Button";

const DoneTasks = ({ tasks, deleteTask, handleClick, classIsActive }) => {
  const done = tasks.filter((task) => !task.active);
  const doneLast5 = done.slice(0, 5);

  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} deleteTask={deleteTask} />
  ));

  const doneTasksLast5 = doneLast5.map((task) => (
    <Task key={task.id} task={task} deleteTask={deleteTask} />
  ));

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate > b.finishDate) {
        return 1;
      }
      if (a.finishDate < b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (doneLast5.length >= 2) {
    doneLast5.sort((a, b) => {
      if (a.finishDate > b.finishDate) {
        return 1;
      }
      if (a.finishDate < b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className={styles.task_list_done}>
      {done.length === 0 ? null : (
        <h2>
          You have done{" "}
          <span>
            {done.length} {done.length < 2 ? "task" : "tasks"}
          </span>{" "}
          today!
        </h2>
      )}

      <ul>{classIsActive ? doneTasks : doneTasksLast5}</ul>
      {done.length > 5 && (
        <Button
          handleClick={handleClick}
          className={styles.task_list__show_more_btn}
          content={tasks.classIsActive ? "show less" : "show more"}
        />
      )}
    </div>
  );
};
export default DoneTasks;
