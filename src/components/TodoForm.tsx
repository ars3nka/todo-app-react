import { ChangeEvent, FormEvent, useState } from 'react';
import { todosActions } from '../redux/slices/todosSlice';
import { useAppDispatch } from '../redux/store';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>('');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && input?.length < 3) {
      return;
    }
    await dispatch(
      todosActions.postTodo({
        title: input,
        done: false,
        tags: [],
      })
    );
    setInput('');
    await dispatch(todosActions.getTodosList());
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
