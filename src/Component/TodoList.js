import React, { Component } from 'react';
import { BsFillBackspaceFill } from 'react-icons/bs';



class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };


    }

    oneChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deletTodo(event) {
        event.preventDefault();
        const array = this.state.items
        const index = array.indexOf(event.target.value)
        array.splice(index, 1)
        this.setState({
            items: array
        });

    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="" style={{display:'flex', justifyContent:'space-between',width:'50'}}>
                        <div style={{display:'flex', justifyContent:'space-between',width:'34%'}}>
                            <div >
                                <input type="checkbox" class="todo-checkbox" ></input>
                                
                            </div>
                            <div key={item} style={{ display: 'flex', alignItems: "center" }}>
                                {item}
                            </div>
                        </div>
                        <div className="removeButton">
                            <BsFillBackspaceFill style={{ cursor: 'pointer' }} onClick={this.deletTodo.bind(this)} />
                        </div>
                </div>

                
                
            );
        });
    }


    render() {
        return (

            <div className="">
                <div className="position-absolute top-0 start-50 " style={{ padding: 80, position:'fixed', width:'100%' }}>
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

            </div>
        );
    }

}

export default TodoList;