import Display from "./Display";
import {useRecoilState} from "recoil";
import {countState} from "../../util/atoms";

const Counter = () => {
    const [count, setCount] = useRecoilState(countState)

    const onClickPlus = (e) => {
        setCount(count + 1)
    }

    const onClickMinus = (e) => {
        if(count > 0) {
            setCount(count - 1)
        }else{
            alert("0입니다!")
        }
    }

    return (
        <center style={{paddingTop: '10px'}}>
            <div className="container">
                <h1>Counter 예제</h1>
                <button className="count-button" onClick={onClickPlus}>
                    Count +
                </button>
                <button className="count-button" onClick={onClickMinus}>
                    Count -
                </button>
                <Display/>
                <h1>{count}</h1>
            </div>
        </center>
    )
}
export default Counter