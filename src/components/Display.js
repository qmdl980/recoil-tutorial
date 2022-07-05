import {useRecoilValue} from "recoil";
import {countState} from "../atoms";

const Display = () => {
    const count= useRecoilValue(countState)

    return(
        <h1>{count}</h1>
    )

}
export default Display