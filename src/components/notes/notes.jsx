import React, { Component } from "react";
import{connect} from "react-redux";
import{fetchNote,removeNote} from "../../redux/action/index.js";
import _ from "lodash";



class Notes extends Component{
    constructor({note}){
        super()
    }
    componentDidMount(){
        this.props.fetchNote();
    }
     
    render(){
        if(!this.props.note){return null}
        console.log("NOTE DATA",this.props.note)
        return(
            <div className="container">
                <div className="row">
                    {
                        _.map(this.props.note, (value, key) => (
                            <div className="col-md-3" key={key} style={{margin:"20px"}}>
                              <div className="card text-left">
                                <div className="card-body">
                                        <h4 className="card-title">
                                            {value.title}
                                  </h4>
                                        <p className="card-text">{value.description}</p>
                                        <button type="button" className="btn btn-outline-danger" 
                        onClick={()=>this.props.removeNote (key)}>Remove</button>
                           
                                </div>
                              </div>
                                
                         </div>
                        ))    
                     
                            
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{note:state.note}
}
export default connect(mapStateToProps,{fetchNote,removeNote})(Notes);