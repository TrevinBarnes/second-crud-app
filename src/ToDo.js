import React from "react";
import NewItemForm from "./New-Item-form";

export default class ToDo extends React.Component{
    render(){
        const Items = this.props.data.Items
            ? this.props.data.Items.map((Item,index)=>
            <li key={index}>
                {Item.name} Area:{room.area}
                <button onClick={e => 
                this.props.deleteItem(e, this.props.data, Item)
            }>Delete</button>
            </li>)
            :null;
            return(
                <div>
                    <h1>{this.props.data.name}</h1>
                    <ul>
                        {Items}
                    </ul>
                    <NewItemForm
                        addNewItem={this.props.addNewItem} data={this.props.data}/>
                </div>
            );
    }
}