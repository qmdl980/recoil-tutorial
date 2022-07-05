import {useRecoilState} from "recoil";
import {textState} from "../atoms";

const Counter = () => {
    const [text, setText] = useRecoilState(textState)

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type={'text'} onChange={onChange}/>
            <div>
                Echo: {text}
            </div>
        </div>
    )
}
export default Counter