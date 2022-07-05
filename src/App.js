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

function App() {
    return (
        <RecoilRoot>
            <Counter/>
            <CharacterCounter/>
        </RecoilRoot>
    );
}

export default App;
