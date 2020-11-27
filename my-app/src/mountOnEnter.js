import React, { useState,useRef } from "react";
import { Transition } from "react-transition-group";
import './App.css';

const duration = 500;

function App() {
    const [inProp, setInProp] = useState(false);
    const node = useRef();
    return (
        <div>
            <Transition in={inProp} timeout={duration} mountOnEnter>
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
