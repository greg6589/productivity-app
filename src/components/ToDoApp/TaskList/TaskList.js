import React from "react";
import ActiveTasks from "./ActiveTasks";
import DoneTasks from "./DoneTasks";

import styles from "../TaskList/TaskList.module.css";

const TaskList = (props) => {
  return (
    <>
      <div className={styles.task_list_container}>
        <ActiveTasks
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          changeStatus={props.changeStatus}
        />
        <DoneTasks
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          handleClick={props.showHideTasks}
          classIsActive={props.classIsActive}
        />
      </div>
    </>
  );
};

export default TaskList;
