import React,{Component} from 'react'
import { connect  } from 'react-redux'
import {logoutDetails, listDetails} from "../store/action";
class List extends Component{

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.listSuccess();

    }
    handleLogout = () => {

        this.props.logoutValid();
    }
    shouldComponentUpdate( nextProps,nextState) {
        if (nextProps.lout===false) {
            this.props.history.push("/");
            return false;
        }
        return true;
    }
    render(){


        return(



            <div className="right-content-block">

            <div className="logout">
            <a onClick={this.handleLogout} href="#" >Logout</a>
            </div>
<h2>Listing of Users</h2>

            <table>
            <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
            {this.props.useridea.map((person, index) => (

                <tr key={index}>
                    <td >{person.name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.phoneNo}</td>
                </tr>
    ))}
    </tbody>
        </table>



            </div>

    );
    }
}

const mapStateToProps=state=>{
    return{
        useridea:state.listUsers,
        lout:state.userList,


    };

}
const mapDispatchToProps=dispatch=>{
    return {
        listSuccess:()=>dispatch(listDetails()),
        logoutValid:()=>dispatch(logoutDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);