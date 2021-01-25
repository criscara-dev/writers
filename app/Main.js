import React from "react";
import ReactDOM from "react-dom";

const TestComponent = () => {
    return (
        <>
        <h1>Hello World!!!</h1>
        <p>and the sky is blue!!!</p>
        </>
    )
}

ReactDOM.render(<TestComponent />, document.querySelector("#app"))

if (module.hot) {module.hot.accept()}