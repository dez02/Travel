import React from 'react';
import './addComponent.css';



class AddComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			value: ''
		};

	this.handleChange = this.handleChange.bind(this);
		
	}


    handleChange(e){ 

      this.setState({value: e.target.value});
    }


	render(){

		return(
			<div className="addcomponent">
			<h1>CHOISIS TON DEPART!</h1>
			    <input className='field'type="date" value={this.state.value} onChange={this.handleChange} />
			    <h2>Maintenant tu choisis ta catégorie et le hasard fait<br /> les choses...</h2>				
			</div>
		);
	}
}

export default AddComponent;