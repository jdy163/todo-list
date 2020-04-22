import React, { Component } from 'react';
//
class NewItem extends Component{
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }

    OnInputChange=(event)=>{
        this.setState({
            input:event.target.value
        })
        console.log(this.state.input)
    }

    onAddButtonClick=()=>{
        this.props.addItem(this.state.input)
        this.setState({
            input:''
        })
    }

    render(){
        return(
            <div className="back-new">
                <input className="add-input" value={this.state.input} onChange={this.OnInputChange}/>
                <button className="add-button" onClick={this.onAddButtonClick}>Add</button>
            </div>
        );
    }
}

export default NewItem;