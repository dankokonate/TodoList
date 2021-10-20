import React ,{Component} from 'react';
//import BackspaceIcon from '@mui/icons-material/Backspace';
import {BsFillBackspaceFill} from 'react-icons/bs'
class TodoList extends Component{

    constructor(){
        super();
        this.state={
            userInput:'',
            items:[]
        };

        
    }

    oneChange(event) {
        this.setState({
            userInput:event.target.value
        });
    }
    
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput:'',
            items:[...this.state.items, this.state.userInput]
        });
    }

    deletTodo(event){
        event.preventDefault();
        const array= this.state.items
        const index= array.indexOf(event.target.value)
        array.splice(index,1)
        this.setState({
            items:array
        });

    }

    renderTodos(){
       return this.state.items.map((item)=>{
            return(
                <div key={item}>
                    {item} | <button type= "button" class="btn btn-dark" onClick={this.deletTodo.bind(this)}><BsFillBackspaceFill /></button>
                </div>
            );
        });
    }

   
    render(){
        return(
            <div class="position-absolute top-0 start-50 translate-middle-x">
                <h1>Ma Todo List</h1>
                <form>
                    <input  
                        value={this.state.userInput}
                        type="text"
                        placeholder="Renseigner un item"
                        onChange={this.oneChange.bind(this)}
                    />
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        )
    }

}
export default TodoList;