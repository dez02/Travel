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
			<h1 className='addcomponentTitle'>CHOISIS TON DEPART!</h1>
			    <input className='field' type="date" value={this.state.value} onChange={this.handleChange} />
			    <h2 className='addcomponenth2'>Maintenant tu choisis une catégorie et laisse le hasard décider de ta destination ...</h2>
			</div>
		);
	}
}

export default AddComponent;
