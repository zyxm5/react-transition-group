import React, { useState,useRef } from "react";
import { Transition } from "react-transition-group";
import './App.css';

const duration = 5000;

function App() {
    const [inProp, setInProp] = useState(true);
    const node = useRef();
    return (
        <div>
            <Transition in={inProp} timeout={duration} appear={true}>
                {(state) => {
                  return (
                    <div
                        style={{transition: `${duration}ms`}}
                        className={state}
                    >
                        I 'm a fade Transition!{" "}
                    </div>
                  )}}
            </Transition>{" "}
            <button onClick={() => setInProp(!inProp)}>Click to Enter </button>{" "}
            <button onClick={() => console.log(node)}>输出node </button>{" "}
        </div>
    );
}

export default App;
