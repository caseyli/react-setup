import React from 'react';
import ReactDOM from 'react-dom';

class AlertLink extends React.Component {
	constructor(props) {
		super(props);

		this.myFunction = this.myFunction.bind(this);
	}

	myFunction(event) {
		event.preventDefault();
		alert(this.props.alertText);
	}

	render() {
		return (
			<a href='#' onClick={this.myFunction}>
				{this.props.text}
			</a>
		);
	}
}

const element = document.getElementById('alert-link-mount-point');
ReactDOM.render(<AlertLink text='My Link' alertText='My Alert' />, element);

