import React from 'react';
import './Todo.css'

const Todo=(props)=>{


    const item=props.items;
    const deleteitem=props.deleteitem
    const length=item.length;
    const theitem= length? (  item.map(item=>{
        return(
            <div key={item.id}>

                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={()=>deleteitem(item.id)}>&times;</span>


            </div>
        )
    }
        
        )):(
            <p>There is no item th show</p>
        )
    return(
        <div className='listitem'>

            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>

            </div>

            {theitem}
        </div>
    )
}
export default Todo;