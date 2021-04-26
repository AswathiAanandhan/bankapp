import React from 'react';
import './Login.css'
class Login extends React.Component{
    state = {
        accountnumber:'',
        password:''
    }
    accountnumberChange=(event)=>{
        this.setState({
            accountnumber:event.target.value

        })
         
        
    }
    passwordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    

    handleSubmit=(event)=>{
        alert("login succesfull")
    }
    render(){
        return <div className="bank">
        <h1>WELCOME TO SBI</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
            <label className="form-label">ACCOUNT NUMBER</label><br></br>
            <input onChange={this.accontnumberChange} className="form-control"></input><br></br>
            </div>
            <div className="mb-4">
            <label className="form-label">PASSWORD</label> <br></br>
            <input onChange={this.passwordChange} className="form-control"></input>

            </div>
            <button>SUBMIT</button>

        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
    
        </div>
    }
}
export default Login;