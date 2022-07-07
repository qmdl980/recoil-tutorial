import {useRecoilValue} from "recoil";
import {filteredTodoListState} from "../../util/atoms";
import TodoItemCreator from "./TodoItemCreator"
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState)

    return (
        <center style={{paddingTop: '10px'}}>
            <div className="container">
                <h1>TodoList 예제</h1>
                <TodoListStats/>
                <TodoListFilters/>
                <TodoItemCreator/>
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem}/>
                ))}
            </div>
        </center>
    )
}
export default TodoList