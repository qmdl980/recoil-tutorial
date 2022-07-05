import Display from "./Display";
import {useRecoilState} from "recoil";
import {countState} from "../atoms";

const Counter = () => {
    const [count, setCount] = useRecoilState(countState)

    const onClick = (e) => {
        setCount(count + 1)
    }

    return (
        <center style={{paddingTop: '10px'}}>
            <div className="container">
                <h1>Counter 예제</h1>
                <div className="count-button" onClick={onClick}>
                    Count +
                </div>
                <Display/>
                <h1>{count}</h1>
            </div>
        </center>
    )
}
export default Counter