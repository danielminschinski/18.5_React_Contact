var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function(){
		return (
			React.createElement('div', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://taxi-smart.pl/wp-content/uploads/2018/07/businessman-1.png'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
					this.props.item.email
					)
				)
			)
	},
});