import React, { useState } from "react";
import { useTasks } from "../../../context/TaskContext";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const success = await addTask(title, description);
    if (success) {
      // Reset form
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Enter task description"
            className="input"
          ></textarea>
        </div>

        <Button type="submit" variant="primary">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
