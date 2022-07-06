import {useRecoilValue} from "recoil";
import {charCountState} from "../../util/atoms";

const Counter = () => {
    const count = useRecoilValue(charCountState)

    return (
        <h2>
            Character Count: {count}
        </h2>
    )
}
export default Counter