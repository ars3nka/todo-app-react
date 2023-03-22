import { TodoType } from './../types/todoTypes';
import axios from 'axios';

const getTodosList = () =>
  axios<TodoType[]>({
    method: 'GET',
    url: 'http://localhost:3001/todos',
  });

export default getTodosList;
