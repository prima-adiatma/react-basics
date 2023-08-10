// const Student = (props) => {
//     return (
        // <div>
        //     <h1>Student Details</h1>
        //     <p>Student First Name: {props.firstName}</p>
        //     <p>Student Last Name: {props.lastName}</p>
        //     <p>Student Email: {props.email}</p>
        // </div>

        // TODO: Create props as Object
        // <div>
        //     <h1>Student Details</h1>
        //     <p>Student First Name: {props.student.firstName}</p>
        //     <p>Student Last Name: {props.student.lastName}</p>
        //     <p>Student Email: {props.student.email}</p>
        // </div>

        // TODO: Create props as Array
        // <div>
        //     Array Data: {props.data}
        // </div>
//     )
// }


// * Destructuring Props in Paramaters
// const Student = ({firstName, lastName, email}) => {
//     return (

//         <div>
//             <h1>Student Details</h1>
//             <p>Student First Name: {firstName}</p>
//             <p>Student Last Name: {lastName}</p>
//             <p>Student Email: {email}</p>
//         </div>

//     )
// }


// * Destructuring Props in Body
const Student = (props) => {

    const { firstName, lastName, email } = props
    
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student First Name: {firstName}</p>
            <p>Student Last Name: {lastName}</p>
            <p>Student Email: {email}</p>
        </div>

    )
}

export default Student