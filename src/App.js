import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';



class App extends Component {
  constructor(props){
    super(props);
  //   this.state ={
  //     txtEmail : "",
  //     txtPassword: "",
  //     txtMoTa: "",
  //     gender: 1
  //   };
  //   this.onHandleChange = this.onHandleChange.bind(this);
  //   this.onHandleSubmit = this.onHandleSubmit.bind(this);
  // }
  // onHandleChange(event){
  //   var target = event.target;
  //   var name = target.name;
  //   var value = target.value;
  //   this.setState({
  //     [name] : value
    // })

  // }
  // onHandleSubmit(event){
  //   event.preventDefault();
  //   console.log(this.state);
  }
  render(){
    return (
      // <form onSubmit={this.onHandleSubmit}>
      //   <div className="form-group">
      //     <label htmlFor="exampleInputEmail1">Email address</label>
      //     <input type="text" name="txtEmail" onChange={this.onHandleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="exampleInputPassword1">Password</label>
      //     <input type="password" name="txtPassword" className="form-control" onChange = {this.onHandleChange} />
      //   </div>

      //   <div className="form-group">
      //     <label htmlFor="exampleInputPassword1">Mo ta</label>
      //     <textarea type="text" name="txtMoTa" className="form-control" onChange = {this.onHandleChange} />
      //   </div>
      //   <div className="form-check">
      //     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      //     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      //   </div>
      //   <select className="gender" name="gender" onChange = {this.onHandleChange} value={this.state.gender}>
      //     <option value={0}>Nu</option>
      //     <option value={1} >Nam</option>
      //   </select>
      //   <button type="submit" className="btn btn-primary">Submit</button>
      // </form>
      <Search/>
    );
  }
  
}

export default App;
