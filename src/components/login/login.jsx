import React, { Component } from "react";
import {connect} from "react-redux";
import {GoogleAuth} from "../../redux/action/auth"

class Login extends Component{
    render(){
        return(
            <div className="container" style={{marginTop:"10px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" class="btn btn-outline-warning"
                        onClick={()=>this.props.GoogleAuth()} 
                        >Google Auth</button>
                    </div>
                </div>
            </div>

        )
    }
};
export default connect(null,{GoogleAuth})(Login);