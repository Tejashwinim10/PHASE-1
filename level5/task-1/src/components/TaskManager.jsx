import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (values, { resetForm }) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-manager">
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={addTask}
      >
        <Form className="task-form">
          <Field name="title" placeholder="Task Title" required />
          <Field name="description" placeholder="Task Description" required />
          <button type="submit">Add Task</button>
        </Form>
      </Formik>

      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="actions">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
