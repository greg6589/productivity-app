export default function useLocalStorageData() {
  const getLocalTasks = () => {
    let tasksLS = localStorage.getItem("tasksList");
    if (tasksLS) {
      return JSON.parse(localStorage.getItem("tasksList"));
    }
    if (!tasksLS) {
      localStorage.setItem("tasksList", JSON.stringify([]));
    }
  };
  const getId = () => {
    let id = localStorage.getItem("id");
    if (id) {
      return JSON.parse(localStorage.getItem("id"));
    }
    if (!id) {
      localStorage.setItem("id", JSON.stringify(0));
    }
  };

  const getSessionTime = () => {
    const sessionTimeLocal = parseInt(localStorage.getItem("sessionTime"));
    if (sessionTimeLocal) {
      return sessionTimeLocal;
    } else {
      return 30;
    }
  };
  const getBreakTime = () => {
    const breakTimeLocal = parseInt(localStorage.getItem("breakTime"));
    if (breakTimeLocal) {
      return breakTimeLocal;
    } else {
      return 15;
    }
  };
  const timeSetToLacal = (sessionTime, breakTime) => {
    localStorage.setItem("sessionTime", sessionTime);
    localStorage.setItem("breakTime", breakTime);
  };

  const setTasksToLocal = (tasks) => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  };
  const setIdTocal = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
  };
  return {
    getId,
    getLocalTasks,
    getSessionTime,
    getBreakTime,
    timeSetToLacal,
    setTasksToLocal,
    setIdTocal,
  };
}
