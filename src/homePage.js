import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PantoneColor from './pantoneColor';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			pantoneColors: [],
		};

		this.loadPantoneColors = this.loadPantoneColors.bind(this);
	}

	componentDidMount() {
		this.loadPantoneColors();
	}

	loadPantoneColors() {
		$.ajax({
			url: 'https://reqres.in/api/colors?delay=2',
			type: 'GET',
			dataType: 'JSON',
			success: (response) => {
				const pantoneColors = response.data;
				this.setState({ pantoneColors, loading: false });
			},
			error: () => {
				debugger
			}
		});
	}

	render() {
		return (
			<div className='component-home-page'>
				<h1>Pantone Colors</h1>

				{
					this.state.loading ? 
						<div>Loading...</div> 
					: 
						<div className='colors'>
							{
								this.state.pantoneColors.map((pantoneColor) => {
									return (
										<PantoneColor key={pantoneColor.id} pantoneColor={pantoneColor} />
									);
								})
							}
						</div>
				}
			</div>			
		);
	}
}

const element = document.getElementById('home-page-mount-point');
ReactDOM.render(<HomePage />, element);

