import { useEffect } from "react";
import { useState } from "react";

export function TodoList() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch("http://localhost:5000/tasks", {
          method: "GET",
          "content-type": "application/JSON",
        });

        if (!response.ok) {
          const text = await response.text();
          console.error(
            `HTTP error! status: ${response.status}, message: ${text}`
          );
          return;
        }
        const data = await response.json();

        setTaskList(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchFunction();
  }, []);

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento");
      }

      setTaskList((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="taskorganizer">
        <div className="todo">
          <h1>To Do</h1>
          {taskList.map(
            (task) =>
              task.status === "todo" && (
                <div key={task.id} className="task-todo-container">
                  <h3>{task.title}</h3>
                  <div>
                    <p>
                      create at:{" "}
                      <span className="task-value">{task.create_at}</span>
                    </p>
                    <p>
                      Status: <span className="task-value">{task.status}</span>
                    </p>
                  </div>
                  <div className="task-icon">
                    {task.status !== "todo" && (
                      <button onClick={() => updateTaskStatus(task.id, "todo")}>
                        todo
                      </button>
                    )}
                    {task.status !== "Pending" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "Pending")}
                      >
                        pending
                      </button>
                    )}
                    {task.status !== "done" && (
                      <button onClick={() => updateTaskStatus(task.id, "done")}>
                        done
                      </button>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
        <div className="pending">
          <h1>Pending Task</h1>
          {taskList.map(
            (task) =>
              task.status === "Pending" && (
                <div key={task.id} className="task-pending-container">
                  <h3>{task.title}</h3>
                  <div>
                    <p>
                      create at:{" "}
                      <span className="task-value">{task.create_at}</span>
                    </p>
                    <p>
                      Status: <span className="task-value">{task.status}</span>
                    </p>
                  </div>
                  <div className="task-icon">
                    {task.status !== "todo" && (
                      <button onClick={() => updateTaskStatus(task.id, "todo")}>
                        todo
                      </button>
                    )}
                    {task.status !== "Pending" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "Pending")}
                      >
                        pending
                      </button>
                    )}
                    {task.status !== "done" && (
                      <button onClick={() => updateTaskStatus(task.id, "done")}>
                        done
                      </button>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
        <div className="done">
          <h1>Done task</h1>
          {taskList.map(
            (task) =>
              task.status === "done" && (
                <div key={task.id} className="task-done-container">
                  <h3>{task.title}</h3>
                  <div>
                    <p>
                      create at:{" "}
                      <span className="task-value">{task.create_at}</span>
                    </p>
                    <p>
                      Status: <span className="task-value">{task.status}</span>
                    </p>
                  </div>
                  <div className="task-icon">
                    {task.status !== "todo" && (
                      <button onClick={() => updateTaskStatus(task.id, "todo")}>
                        todo
                      </button>
                    )}
                    {task.status !== "Pending" && (
                      <button
                        onClick={() => updateTaskStatus(task.id, "Pending")}
                      >
                        pending
                      </button>
                    )}
                    {task.status !== "done" && (
                      <button onClick={() => updateTaskStatus(task.id, "done")}>
                        done
                      </button>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
