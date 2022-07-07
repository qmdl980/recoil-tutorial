import {useRecoilState} from "recoil";
import {todoListFilterState, todoListState} from "../../util/atoms";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState)

    const updateFilter = ({target: {value}}) => {
        setFilter(value)
    }
    return(
        <h2>
        Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">모두 보기</option>
                <option value="Show Completed">완료된 것만 보기</option>
                <option value="Show Uncompleted">완료되지 않은 것만 보기</option>
            </select>
        </h2>
    )
}
export default TodoListFilters