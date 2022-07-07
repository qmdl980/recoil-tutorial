import {useRecoilValue} from "recoil";
import {todoListStatsState} from "../../util/atoms";

const TodoListStats = () => {
    const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} = useRecoilValue(todoListStatsState)

    const formattedPercentCompleted = Math.round(percentCompleted * 100)

    return(
        <>
            <h4>해야할 일 갯수: {totalNum}</h4>
            <h4>완료된 갯수: {totalCompletedNum}</h4>
            <h4>완료하지 못한 갯수: {totalUncompletedNum}</h4>
            <h4>Percent: {formattedPercentCompleted}</h4>
        </>
    )
}
export default TodoListStats