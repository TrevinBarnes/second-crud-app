import React from 'react';
import './App.css';
import ToDo from './ToDo';
import axios from 'axios';

function Home() {
    const getToDoListItems = async () =>{
        const response = await axios.get("https://65eb241e43ce1641893352e8.mockapi.io/api/v1/")
    }
}

export default class App extends React.Component{
    constructor(props) {
        super(props) ;
            this.addNewItem = this.addNewItem.Bind(this);
            this.deleteItem = this.deleteItem.Bind(this);
    }
        
    render() {
        const ToDos =this.state
        ? this.state.ToDos.map((ToDo,index) =>
            <ToDo
                key={index}
                data={ToDo}
                addNewItem={this.addNewItem}
                deleteItem={this.deleteItem} />)
        : null;
        return(
            <div>
                {ToDos}
            </div>
        )
    }
    

    componentDidMount(){
        fetch(TODOS_ENDPOINT)
         .then(res=> res.json())
         .then(data => {
            this.setState({
                ToDos: data
            })
         })
    }

    deleteItem(e,ToDo,Item){
        const index = ToDo.Item.indexOf(Item);
        ToDo.Item.splice(index,1);
        updateToDo(ToDo)
        .then(()=>{
            this.setState(state=>{
                for (let h of state.ToDos){
                    if (h._id === ToDo._id) {
                        let h = ToDo;
                        break;
                    }
                }
                return state;
            });
        });
        e.preventDefault();
    }

    addItem(e,ToDo,Item){
        ToDo.Item.push(Item)
        updateToDo(ToDo)
        .then(()=>{
            this.setState(state=>{
                for (let h of state.ToDos){
                    if (h._id === ToDo._id) {
                        let h = ToDo;
                        break;
                    }
                }
                return state;
            });
        });
        e.preventDefault();
    }
}
    
function updateToDo(ToDo){
    return fetch(`$(ToDos_Endpoint)/$(ToDo._id)`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(ToDo)
    });
}
