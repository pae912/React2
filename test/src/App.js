import './App.css';
import { useState } from "react";
import Power from './component/Power';

const Color = () => {
    const [color, setState] = useState("yellow");
    return (
        <>
            <h1>My favorite color is {color}.</h1>
            <button type="button" onClick={() => setState("blue")}
            >換色</button>

        </>
    )
}
const Welcome = (prop) => {
    return (
    <><h1>Hello my name is {prop.name}, age{prop.age}.</h1></>
)
}

function App() {
    return (
        <>
            <Color/>
            <Power/>
            <Welcome name = "John"  age = "20"></Welcome>
            <Welcome name = "apple"  age = "23"></Welcome>
            <Welcome name = "AA"  age = "25"></Welcome>
        </>
    )

}

export default App;
