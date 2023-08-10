import { useState } from "react"

const ConditionRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin() {
        setIsLoggedIn(true)
    }

    // if (isLoggedIn) {
    //     return <p>Welcome, User</p>
    // } else {
    //     return <p>Please Login!</p>
    // }

    let message

    // * Conditional Rendering using If and Else Statement
    // if (isLoggedIn) {
    //     message = <p>Welcome, User</p>
    // } else {
    //     message = <p>Please Login!</p>
    // }

    // function handleLogin() {
    //     setIsLoggedIn(true)        
    // }

    // return (
    //     <div>
    //         {message}
    //         <br/>
    //         <button onClick={handleLogin}>Login</button>
    //     </div>
    // )

    // * Conditional Rendering using Ternary Operator

    // if (isLoggedIn) {
    //     message = <p>Welcome, User</p>
    // } else {
    //     message = <p>Please Login!</p>
    // }

    // return (
    //     <div>
    //         {
    //             isLoggedIn ? <p>Welcome, User</p> : <p>Please Login!</p>
    //         }
    //         <br />
    //         <button onClick={handleLogin}>Login</button>
    //     </div>
    // )

    // * Conditional Rendering using && Operator (Short Circuit Operator)

    if (isLoggedIn) {
        message = <p>Welcome, User</p>
    } else {
        message = <p>Please Login!</p>
    }

    return (
        <div>
            {
                isLoggedIn && <p>Welcome, User</p>
            }
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default ConditionRendering