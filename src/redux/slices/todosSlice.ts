import { TodoType } from './../../types/todoTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todosApi from '../../api/todosApi';
import { TodoRequestType } from '../../api/postTodo';
import { TodoDeleteRequestType } from '../../api/deleteTodo';

interface TodosStateType {
  todos: TodoType[];
  loading: boolean;
  error?: string;
}

const initialState: TodosStateType = {
  todos: [],
  loading: false,
  error: undefined,
};

const getTodosList = createAsyncThunk<
  TodoType[],
  void,
  { rejectValue: string }
>('todos/getPostsList', async (data, thunksApi) => {
  try {
    const response = await todosApi.getTodosList();
    return response.data;
  } catch {
    return thunksApi.rejectWithValue('Server error');
  }
});

const postTodo = createAsyncThunk<
  TodoType,
  TodoRequestType,
  { rejectValue: string }
>('todos/postTodo', async (data, thunksApi) => {
  try {
    const response = await todosApi.postTodo(data);
    return response.data;
  } catch {
    return thunksApi.rejectWithValue('Server error');
  }
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodosList.pending, (state) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(getTodosList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getTodosList.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(postTodo.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(postTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const todosReducer = todosSlice.reducer;
export const todosActions = {
  ...todosSlice.actions,
  getTodosList,
  postTodo,
};
