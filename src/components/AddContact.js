import React from "react";
import { Navigate, redirect } from "react-router-dom"

class AddContact extends React.Component {
    state = {
        redirect: false,
        id: 0,
        name: "",
        email: ""
    }
    count = 0;
    add = (e) => {
        e.preventDefault()
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are required")
            return
        }
        this.count++;
        this.props.addContactHandler(this.state)
        this.setState({
            name: "",
            email: "",
            id: this.count,
            redirect: true
        })
        console.log(this.props)

        //works on older versions
        // this.props.history.push("/")
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contacts</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="some@host.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                {
                    this.state.redirect && <Navigate to='/' replace={true} />
                }
            </div>
        )
    }
}

export default AddContact