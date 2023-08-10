import React from "react";

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "Prima",
            lastName: "Adiatma",
            email: "prima@gmail.com"
        }
    }

    // * Update this state object using setState() method
    updateEmployee(){
        this.setState({
            firstName: "Admin",
            lastName: "Pertama",
            email: "admin1@gmail.com"
        })
    }

    // * Access the property from the state object
    render(){
        return  (
            <div>
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                {/* Button for update the object updateEmployee */}
                <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee