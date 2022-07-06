import {useRecoilState} from "recoil";
import {textState} from "../../util/atoms";

const Counter = () => {
    const [text, setText] = useRecoilState(textState)

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type={'text'} onChange={onChange}/>
            <h2>
                Echo: {text}
            </h2>
        </div>
    )
}
export default Counter