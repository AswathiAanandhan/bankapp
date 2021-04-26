import React  from 'react'
import './Dashboard.css'

class Dashboard extends React.Component{

    handleSubmit=(event)=>{
        alert("amount credited")
        
    }
    submit=(event)=>{
        alert("amount debited")
    }
    render(){
         return  <div>
         <h1>WELCOME TO SBI</h1>
         <form onSubmit={this.handleSubmit} className="s1">
         <div className="container">
             <div className="row">
                 <div className="col">
                     <h2>CASH DEPOSIT FORM</h2>
                        <table>
                            <tr>
                                <td>Account number</td>
                                <td><input type="text" ></input></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td><button>deposit</button></td>
                            </tr>
                                
                        </table>

                 </div>

             </div>
         </div>
        </form>
         <form onSubmit={this.submit}>
            <div className="container">
                 <div className="row">
                     <div className="col">
                        <h2>CASH WITHDRAW FORM</h2>
                        <table>
                            <tr>
                                <td>Account number</td>
                                <td><input type="text" ></input></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td><input></input></td>
                            </tr>
                            <tr>
                                <td><button>withdraw</button></td>
                            </tr>
                                
                        </table>

                 </div>

             </div>
       </div>
</form>
             

         
        

        </div>

    }

}
export default Dashboard;