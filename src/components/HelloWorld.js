import React from "react"

const HelloWorld = () => {

    // * JSX Code
    // const myElement = <h1>Hello World!</h1>
    // TODO: h1 within div
    // const myElement = <div><h1>Hello World!</h1></div>
    // return myElement

    //  * Code use Create Element. Don't use this because JSX has include createElement() and the code more easy
    // return React.createElement('h1', null, 'Hello World')

    // TODO: h1 within div
    // return React.createElement('div', null, React.createElement('h1', null, 'Hello World!'))

    function handleClick() {
        alert("Button Click")        
    }

    // * Expression with Curly Braces
    const name = "Prima"
    const addition = 1 + 2

    return (
        // * Must use div or fragment '<> </>' for multiple HTML elements in parentheses '()'
        <div>
            <h1 className="title">Title</h1>
            <h2>Sub Title</h2>
            <p>Paragraph</p>
            <p>{name}</p>
            <p>{addition}</p>
            <image></image>
            <button onClick={handleClick}>Click</button>
        </div>
    )

    



}

export default HelloWorld