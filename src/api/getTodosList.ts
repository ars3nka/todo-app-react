import { TodoType } from './../types/todoTypes';
import axios from 'axios';

const getTodosList = () =>
  axios<TodoType[]>({
    method: 'GET',
    url: 'http://localhost:8000/todos',
  });

export default getTodosList;
