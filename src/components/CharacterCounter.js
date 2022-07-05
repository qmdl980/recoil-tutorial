import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount"

const CharacterCounter = () => {
    return (
        <center style={{paddingTop: '10px'}}>
            <div className="container">
                <h1>CharacterCounter 예제</h1>
                <TextInput/>
                <CharacterCount/>
            </div>
        </center>
    )
}
export default CharacterCounter