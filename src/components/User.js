const { useState } = require("react")

const User = () => {

    // * This is the syntax to use useState Hook
    // const [firstName, setFirstName] = useState("Prima")
    // const [lastName, setLastName] = useState("Adiatma")
    // const [email, setEmail] = useState("prima@gmail.com")

    // Array to the useState Hook
    const[user, setUser] = useState ({
        firstName: "Prima",
        lastName: "Adiatma",
        email: "prima@gmail.com"

    })

    function updateUser() {
        // setFirstName("Admin")
        // setLastName("Pertama")
        // setEmail("admin1@gmail.com")
        setUser({
            firstName: "Admin",
            lastName: "Pertama",
            email: "admin1@gmail.com"
        })
    }

    return (
        // <div>
        //     <h1>User Details</h1>
        //     <p>{firstName}</p>
        //     <p>{lastName}</p>
        //     <p>{email}</p>
        //     <button onClick={updateUser}>Update User</button>
        // </div>

        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User