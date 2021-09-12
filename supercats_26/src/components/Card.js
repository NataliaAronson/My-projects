import React from 'react';
class Card extends React.Component {
	render() {
const { src, title, name, description, location  } = this.props;
		return (
			<div className="card">
		<div className="card-body">
<img src={src} alt={title} class="card-image"/>
		<h4 className="card-name ">{name}</h4>
		<p className="card-text">{description}</p>
				</div>
				<div className="card-footer">
			<span className="location">{location}</span>
		<button className="watch">Watch in action </button>
				</div>
			</div>
		);
	}
}

export default Card;

