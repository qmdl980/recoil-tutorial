import './App.css';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import Counter from "./components/Counter";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";

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
