import { useState } from "react";
import { TodoHook } from "../context/TodoContext";

const TodoComponent = () => {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const { todos, addTodo, toggleComplete, deleteTodo, updateTodo } = TodoHook();

  const buttonHandler = () => {
    addTodo(text);
    setText("");
  };

  const saveEdit = (id) => {
    updateTodo(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">Todo App</h1>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
        <button
          onClick={buttonHandler}
          className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
        >
          Add Todo
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="h-4 w-4 cursor-pointer accent-slate-900"
              />

              {editingId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-2 py-1 text-slate-800 outline-none focus:border-slate-500"
                />
              ) : (
                <span
                  className={`text-base ${
                    todo.completed ? "text-slate-400 line-through" : "text-slate-800"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="rounded-md bg-emerald-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-emerald-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="rounded-md bg-amber-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-amber-400"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteTodo(todo.id)}
                className="rounded-md bg-rose-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-rose-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
