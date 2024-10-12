import { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="bg-slate-500 text-white flex flex-col flex-1 p-4 justify-center items-center overflow-x-hidden">
      <h1 className='text-3xl text-emerald-300 font-bold '>Welcome User</h1>
      <p className='text-lg text-pretty font-serif '>Write down the tasks you want to do !!!</p>
      <div>
      <input className='border-2 text-md border-gray-950 bg-gray-400 text-black font-normal m-2'
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='px-4 py-0 bg-blue-500 text-lg font-bold text-black border border-black' onClick={addTask} title="Add Task">+</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
            <li className='text-black text-xl' key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            <input className='border-none'
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTaskCompletion(index)}
              title={`Mark ${t.text} as ${t.completed ? 'incomplete' : 'complete'}`}
              />
            <button className='px-2 text-red-600' onClick={() => deleteTask(index)} title='delete'><i className="ri-delete-bin-fill"></i></button>
              {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;