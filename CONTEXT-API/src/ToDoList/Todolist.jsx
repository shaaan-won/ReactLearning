import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [task, setTask] = useState({
    task: '',
    time: '',
    completed: false
  });

  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.task.trim() && task.time.trim()) {
      const updatedTodoList = [...todoList, task];
      setTodoList(updatedTodoList);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
      setTask({ task: '', time: '', completed: false });
    }
  };

  const toggleCompletion = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodoList);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
  };

  const deleteTask = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
  };

  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return todoList.filter((item) => item.completed);
    } else if (filter === 'pending') {
      return todoList.filter((item) => !item.completed);
    }
    return todoList;
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('todolist')) || []);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label> <br />
        <input
          value={task.task}
          type="text"
          name="task"
          onChange={handleChange}
          required
        />{' '}
        <br />
        <label htmlFor="time">Time</label> <br />
        <input
          value={task.time}
          type="text"
          name="time"
          onChange={handleChange}
          required
        />{' '}
        <br />
        <button type="submit">Add Task</button>
      </form>

      <hr />

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div> 

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredTasks().map((data, i) => (
            <tr key={i}>
              <td>{data.task}</td>
              <td>{data.time}</td>
              <td>
                <input
                  type="checkbox"
                  checked={data.completed}
                  onChange={() => toggleCompletion(i)}
                />
                {data.completed ? ' Completed' : ' Pending'}
              </td>
              <td>
                <button onClick={() => deleteTask(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
