import React, { useState } from "react";
import { Transition } from "react-transition-group";
import './App.css';

const duration = 500;

function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} timeout={duration}>
                {(state) => (
                    <div
                        style={{transition: `${duration}ms`}}
                        className={state}
                    >
                        I 'm a fade Transition!{" "}
                    </div>
                )}
            </Transition>{" "}
            <button onClick={() => setInProp(!inProp)}>Click to Enter </button>{" "}
        </div>
    );
}

export default App;
