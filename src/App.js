import './App.css';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Counter from "./components/plainCounter/Counter";
import CharacterCounter from "./components/charCounter/CharacterCounter";
import TodoList from "./components/todoList/TodoList";

function App() {
    return (
        <RecoilRoot>
            <Counter/>
            <CharacterCounter/>
            <TodoList/>
        </RecoilRoot>
    );
}

export default App;
