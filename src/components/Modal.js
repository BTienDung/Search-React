import React, { Component } from 'react';
 export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            active: true,
        }
    }
    onSubmit = (e)=>{
        this.setState({
            active: false
        })
        e.preventDefault();
        console.log(this.state);
        

    }
    handleEmailChange = (event)=>{
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event)=>{
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <div >
                {this.state.active === true? 
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name = "email"
                        value = {this.state.email}
                        onChange= {this.handleEmailChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        name = "password"
                        value = {this.state.password}
                        onChange= {this.handlePasswordChange}
                    />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
                : ""
                }
            </div>
        );
    }
}
