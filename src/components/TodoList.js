import {useRecoilValue} from "recoil";
import {todoListState} from "../util/atoms";
import TodoItemCreator from "./TodoItemCreator"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useRecoilValue(todoListState)

    return (
        <center style={{paddingTop: '10px'}}>
            <div className="container">
                <h1>TodoList 예제</h1>
                <TodoItemCreator/>
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem}/>
                ))}
            </div>
        </center>
    )
}
export default TodoList