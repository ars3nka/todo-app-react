import { Provider } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
