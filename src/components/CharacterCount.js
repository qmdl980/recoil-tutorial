import {useRecoilValue} from "recoil";
import {textState} from "../atoms";

const Counter = () => {
    const text = useRecoilValue(textState)

    return (
        <div>
            Character Count: {text.length}
        </div>
    )
}
export default Counter