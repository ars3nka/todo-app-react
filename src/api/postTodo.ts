import { TodoType } from './../types/todoTypes';
import axios from 'axios';

export interface TodoRequestType {
  title: string;
  done: boolean;
  tags: string[];
}

const postTodo = (data: TodoRequestType) =>
  axios<TodoType>({
    method: 'POST',
    url: 'http://localhost:3001/todos',
    data,
  });

export default postTodo;
