import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numberOfClicks: 0,
		};

		this.handleIncrementLinkClicked = this.handleIncrementLinkClicked.bind(this);
	}

	handleIncrementLinkClicked(event) {
		event.preventDefault();

		const numberOfClicks = this.state.numberOfClicks;
		this.setState({ numberOfClicks: numberOfClicks + 1 });
	}

	render() {
		return (
			<div>
        <a href="home.html">Home</a>
				<a href="about.html">About</a>
				<a href="contact.html">Contact</a>

				<div>
					<h1>{this.props.title}</h1>
				</div>

				<a href='#' onClick={this.handleIncrementLinkClicked}>
					Click here to increment counter
				</a>

				<div className={(this.state.numberOfClicks > 10) ? 'counter-blurb hot' : 'counter-blurb'}>
					The counter is currently at {this.state.numberOfClicks}
				</div>
			</div>
			
		);
	}
}

const element = document.getElementById('alert-link-mount-point');
ReactDOM.render(<HomePage title='Home Page Clicks' />, element);

