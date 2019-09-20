import React,{Component} from 'react'
import { connect  } from 'react-redux'
import {checkLogin} from "../store/action";

class login extends Component{


    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            errors:{},
            valid:''
        }
    }
    handleformChange=(e)=>{

        this.setState({
            [e.target.name]:e.target.value
        })



    }

    handleformSubmit=(e)=>{
        e.preventDefault();
        if(this.handleValidation()){
            this.handleSignIn()
        }
    }

    handleValidation = () => {
        let errors = {};
        let formIsValid = true;
        let username = this.state.username;
        let password = this.state.password;

        if(!username) {
            formIsValid = false;
            errors.username = "Username cannot be empty";
        }
        if(!password) {
            formIsValid = false;
            errors.password = "Password cannot be empty";
        }
        this.setState({errors:errors});
        return formIsValid;
    }
    handleSignIn = () => {
        let username = this.state.username;
        let password = this.state.password;
        this.signIn(username, password)
    }

    signIn = (username, password) => {
        const list =
        {
            "username":username,
            "password" :password
        }

        this.props.loginValid(list);


    }

    shouldComponentUpdate( nextProps,nextState) {
        if (nextProps.sub) {
            this.props.history.push("/list");
            return false;
        }
        return true;
    }


        render(){


        return(
            <div className="adminsignin">
            <h1> Signin</h1>
                <div className="emsignins">
            <form onSubmit={this.handleformSubmit} >
            <p>{this.props.error}</p>
            <div className="form-details">
            <label for="title">Username</label>
            <input  type="text" name="username" className= {`login-input-box ${this.state.errors.username ? 'error' : 'success'}`} onChange={this.handleformChange} />
            </div>

            <div className="form-details">
            <label for="text">Password</label>
            <input type="text" name="password"  className= {`login-input-box ${this.state.errors.password ? 'error' : 'success'}`} onChange={this.handleformChange} />
            </div>

            <input   type="submit" name="submit" value="Login" onChange={this.handleformChange} />

</form>

    </div>
        </div>

    );
    }
}


const mapStateToProps=state=>{
    return{
        sub:state.userList,
        error:state.errorLogin


    };

}
const mapDispatchToProps=dispatch=>{
    return {
        loginValid:(list)=>dispatch(checkLogin(list))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(login);