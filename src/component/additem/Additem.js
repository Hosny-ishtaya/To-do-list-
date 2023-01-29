import React, { Component } from 'react';
import './Additem.css'

class Additem extends Component{

    state={
        name:'',
        age:''
    }

    handleChange=(e)=>{

        console.log(e.target.value)

        this.setState({
            [e.target.id]:e.target.value
        })


           

    }
    

    handlesubmit=(e)=>{
        e.preventDefault();

        if(e.target.name.value=='')
        {
            return false
        }else{
        this.props.additem(this.state);
        this.setState({
            name:'',
            age:''

        })
    }




    }

    render(){

        return(

            

            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}></input>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.age}></input>
                    <input type="submit" value="Add"></input>
                </form>

            </div>
        )
    }
}
export default Additem;