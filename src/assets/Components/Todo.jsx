import { useState } from "react";

function Todo() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!id || !name) return;
    if (tasks.find((t) => t.id === id)) return;
    setTasks([...tasks, { id, name }]);
    setId("");
    setName("");
  };

  const updateTask = (taskId, field, value) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, [field]: value } : t
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addTask}>Submit</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={task.id}
              onChange={(e) =>
                updateTask(task.id, "id", e.target.value)
              }
            />
            <input
              type="text"
              value={task.name}
              onChange={(e) =>
                updateTask(task.id, "name", e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
