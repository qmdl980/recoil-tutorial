import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "../../util/atoms";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)
    
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ])
        setInputValue('')
    }
    
    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    return(
        <div>
            <input type = "text" value={inputValue} onChange={onChange}/>
            <button className="todo-button" onClick={addItem}>추가</button>
        </div>
    )
}

let id = 0
const getId = () => {
    return id++
}
export default TodoItemCreator