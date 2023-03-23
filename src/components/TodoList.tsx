import axios from 'axios';
import { useEffect } from 'react';
import todosApi from '../api/todosApi';
import { todosActions } from '../redux/slices/todosSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(todosActions.getTodosList());
  }, []);

  console.log(todos);

  return (
    <div>
      <ul>
        {todos
          ? todos.map((todo) => (
              <li key={todo.id}>
                <h5>{todo.title}</h5>
                <button
                  onClick={() =>
                    axios.delete(`http://localhost:8000/todos/${todo.id}`)
                  }
                >
                  Удалить
                </button>
              </li>
            ))
          : 'Пусто'}
      </ul>
    </div>
  );
};

export default TodoList;
