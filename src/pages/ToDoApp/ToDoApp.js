// import React, { useState, useEffect, useRef } from "react";

// import AddTask from "./AddTask/AddTask";
// import TaskList from "./TaskList/TaskList";
// import UserWelcome from "./UserWelcome/UserWelcome";
// import Button from "../../components/Button";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesDown, faPlus } from "@fortawesome/free-solid-svg-icons";

// import style from "./ToDoAppPage.module.css";

// const ToDoApp = ({ userName }) => {
//   const getLocalTasks = () => {
//     let tasksLS = localStorage.getItem("tasksList");
//     if (tasksLS) {
//       return JSON.parse(localStorage.getItem("tasksList"));
//     }
//     if (!tasksLS) {
//       localStorage.setItem("tasksList", JSON.stringify([]));
//     }
//   };
//   const getId = () => {
//     let id = localStorage.getItem("id");
//     if (id) {
//       return JSON.parse(localStorage.getItem("id"));
//     }
//     if (!id) {
//       localStorage.setItem("id", JSON.stringify(0));
//     }
//   };

//   const [tasks, setTasks] = useState(getLocalTasks());
//   let [id, setId] = useState(getId());
//   const [classIsActive, setClassIsActive] = useState(false);
//   const [addTaskActive, setAddTaskActive] = useState(false);
//   const didMount = useDidMount();

//   function useDidMount() {
//     const didMountRef = useRef(true);
//     useEffect(() => {
//       didMountRef.current = false;
//     }, []);
//     return didMountRef.current;
//   }

//   useEffect(() => {
//     if (didMount) {
//       deleteOldTask();
//     }
//     localStorage.setItem("tasksList", JSON.stringify(tasks));
//     localStorage.setItem("id", JSON.stringify(id));
//   }, [tasks, id, didMount]);

//   const addTask = (input, important, date) => {
//     const task = {
//       id: id,
//       text: input,
//       date: date,
//       important: important,
//       active: true,
//       finishDate: null,
//     };
//     const newTasks = [task, ...tasks];
//     setTasks(newTasks);
//     setId((id) => id + 1);
//     return true;
//   };

//   const changeStatus = (id) => {
//     let newTasks = [...tasks];
//     newTasks.forEach((task) => {
//       if (task.id === id) {
//         task.active = false;
//         task.finishDate = new Date().getTime();
//       }
//     });
//     setTasks(newTasks);
//   };

//   const deleteTask = (id) => {
//     let newTasks = [...tasks];
//     newTasks = tasks.filter((task) => task.id !== id);
//     setTasks(newTasks);
//   };

//   const deleteOldTask = () => {
//     let tasksToSet = tasks.filter((task) => {
//       return (
//         new Date(task.finishDate).toDateString() ===
//           new Date().toDateString() || task.active
//       );
//     });
//     setTasks(tasksToSet);
//   };

//   const showHideDoneTasks = () => {
//     setClassIsActive((classIsActive) => !classIsActive);
//   };

//   return (
//     <div className={style.to_do_app}>
//       <UserWelcome userName={userName} />
//       <TaskList
//         tasks={tasks}
//         changeStatus={changeStatus}
//         deleteTask={deleteTask}
//         showHideTasks={showHideDoneTasks}
//         classIsActive={classIsActive}
//       />
//       <div className={style.add_task_wrapper}>
//         <Button
//           handleClick={() => {
//             addTaskActive ? setAddTaskActive(false) : setAddTaskActive(true);
//           }}
//           className={style.add_task_form__show}
//           content={
//             addTaskActive ? (
//               <FontAwesomeIcon icon={faAnglesDown} />
//             ) : (
//               <FontAwesomeIcon icon={faPlus} />
//             )
//           }
//         />
//         {addTaskActive ? <AddTask addTask={addTask} /> : null}
//       </div>
//     </div>
//   );
// };

// export default ToDoApp;

import React, { useState, useEffect, useRef } from "react";

import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";
import UserWelcome from "./UserWelcome/UserWelcome";
import Button from "../../components/Button";
import useLocalStorageData from "../../hooks/useLocalStorageData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faPlus } from "@fortawesome/free-solid-svg-icons";

import style from "./ToDoAppPage.module.css";

const ToDoApp = ({ userName }) => {
  const { getId, getLocalTasks, setTasksToLocal, setIdTocal } =
    useLocalStorageData();
  const [tasks, setTasks] = useState(getLocalTasks());
  let [id, setId] = useState(getId());
  const [classIsActive, setClassIsActive] = useState(false);
  const [addTaskActive, setAddTaskActive] = useState(false);
  const didMount = useDidMount();

  function useDidMount() {
    const didMountRef = useRef(true);
    useEffect(() => {
      didMountRef.current = false;
    }, []);
    return didMountRef.current;
  }

  useEffect(() => {
    if (didMount) {
      deleteOldTask();
    }
    setTasksToLocal(tasks);
    setIdTocal(id);
  }, [tasks, id, didMount]);

  const addTask = (input, important, date) => {
    const task = {
      id: id,
      text: input,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
    setId((id) => id + 1);
    return true;
  };

  const changeStatus = (id) => {
    let newTasks = [...tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    let newTasks = [...tasks];
    newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteOldTask = () => {
    let tasksToSet = tasks.filter((task) => {
      return (
        new Date(task.finishDate).toDateString() ===
          new Date().toDateString() || task.active
      );
    });
    setTasks(tasksToSet);
  };

  const showHideDoneTasks = () => {
    setClassIsActive((classIsActive) => !classIsActive);
  };

  return (
    <div className={style.to_do_app}>
      <UserWelcome userName={userName} />
      <TaskList
        tasks={tasks}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        showHideTasks={showHideDoneTasks}
        classIsActive={classIsActive}
      />
      <div className={style.add_task_wrapper}>
        <Button
          handleClick={() => {
            addTaskActive ? setAddTaskActive(false) : setAddTaskActive(true);
          }}
          className={style.add_task_form__show}
          content={
            addTaskActive ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )
          }
        />
        {addTaskActive ? <AddTask addTask={addTask} /> : null}
      </div>
    </div>
  );
};

export default ToDoApp;
