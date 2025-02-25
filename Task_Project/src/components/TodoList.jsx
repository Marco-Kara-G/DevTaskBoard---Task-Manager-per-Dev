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
        console.log(data);

        setTaskList(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchFunction();
  }, []);

  return (
    <>
      <div className="taskorganizer">
        <div className="ToDo">
          <h1>To Do</h1>
          {taskList.map((task) => (
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
            </div>
          ))}
        </div>
        <div className="Pending">
          <h1>Pending Task</h1>
        </div>
        <div className="Done">
          <h1>Done task</h1>
        </div>
      </div>
    </>
  );
}
