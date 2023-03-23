import axios from 'axios';

export interface TodoDeleteRequestType {
  id: number;
}

const deleteTodo = (data: TodoDeleteRequestType) =>
  axios({
    method: 'DELETE',
    url: `http://localhost:8000/todos/${data.id}`,
  });

export default deleteTodo;
