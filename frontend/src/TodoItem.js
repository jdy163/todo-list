import React, { Component } from 'react';

class ListItem extends Component{
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
    }


    onDeleteBtnClick=()=>{
        this.props.deleteItem(this.props.index)
    }
    render(){
        const item=this.props.item
        return(
            <div className="items" alignitems= 'center'>
                <label className="item">{item.content}</label>
                <button className="delete-button" onClick={this.onDeleteBtnClick}>Delete</button>
            </div>
        );
    }
}

export default ListItem;