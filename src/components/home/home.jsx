import React, { Component } from "react";
import {connect} from "react-redux";
import{createNote} from "../../redux/action/index.js";
import { database } from "./../../firebase";
import Notes from "../notes/notes";
class Home extends Component{
    constructor({notes}){
        super();
        this.state={
            title:"",
            description:"",
            notes:""
        };

    }
    componentDidMount() {
            database.on("value", (snapshot) => {
            let a = snapshot.val();
          this.setState({ notes: a});
           })
        };
    
    
    handlechange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleForm=e=>{
        e.preventDefault();
        let data={
            title:this.state.title,
            description:this.state.description
        }
        //database.push(data);
        this.props.createNote(data);
        this.setState({title:"",description:""})
    }
    
  
    render(){
        console.log(this.state.title,this.state.description);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>USER FORM DETAILS</h1>
                        <form onSubmit={this.handleForm} >
                            <div className="form-group">
                                <input type="text" placeholder="enter title"
                                name="title" className="form-control"
                                value={this.state.title}
                                onChange={this.handlechange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea type="text" placeholder="enter description"
                                name="description" className="form-control"
                                value={this.state.description}
                                onChange={this.handlechange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                        <Notes/>
                    </div>
                </div>
            </div>
        )
    }
};
export default connect(null, {createNote})(Home);
