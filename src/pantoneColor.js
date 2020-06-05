import React from 'react';

class PantoneColor extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		alert(`You've clicked on ${this.props.pantoneColor.name}`);
	}

	render() {
		return (
			<div 
				className='pantone-color' 
				style={{ backgroundColor: this.props.pantoneColor.color}}
				onClick={this.handleClick}
			>
				{this.props.pantoneColor.name}
			</div>
		);
	}
}

export default PantoneColor;