import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import "./App.css";

const duration = 1000;

function App() {
	const [inProp, setInProp] = useState(true);
    return (
        <div>
            <Transition
                in={inProp}
                timeout={duration}
                addEndListener={(node, done) => {
					// use the css transitionend event to mark the finish of a transition
                    node.addEventListener("transitionend", () => {
						console.log('过渡完成');
					}, {
						once: true
					});
                }}
            >
                {(state) => {
					console.log(state)
                    return (
                        <div
                            style={{ transition: `${duration}ms` }}
                            className={state}
                        >
                            I 'm a fade Transition!{" "}
                        </div>
                    );
                }}
            </Transition>{" "}
            <button onClick={() => setInProp(!inProp)}>Click to Enter </button>{" "}
        </div>
    );
}

export default App;
