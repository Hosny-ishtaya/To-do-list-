
import { Component } from 'react';
import './App.css';
import Todo from './component/todoitem/Todo.js';
import Additem from './component/additem/Additem';

class App extends Component {

  state={

    item:[

      {id:1,name:"hosny",age:22},
      {id:2,name:"yasser",age:22},
      {id:3,name:"hamza",age:22},


    ]
    
  }

  deleteitem=(id)=>{
    
    console.log("delete")
    let item=this.state.item.filter(item=>{
      return(
        item.id !==id
      )
    });
    //another solution 
    // let item=this.state.item;
    // let i=item.findIndex(item=>item.id==id)
    // item.splice(i,1)  //delete item
    this.setState({
      item:item

    })
  }

  additem=(items)=>{
    items.id=Math.random();
    let item=this.state.item;
    item.push(items);
    this.setState({
      item:item

    })
  


  }
  render(){
  return (
    <div className='app-container'>
      <h1 className='text-center'>Todo List</h1>
      <Todo items={this.state.item} deleteitem={this.deleteitem}/>
      <Additem additem={this.additem}/>
    </div>
  );
  }
}

export default App;
