(function(){

var APP = React.createClass({
	render:function(){
		return (
			<div>
				<buttonComponent />
				<inputComponent />
			</div>
			)
	}

});

//buttonComponent
var buttonComponent = React.createClass({
	render:function(){
		return (<button>{this.props.txt}</button>)
	}
});

		//buttonComponent
var inputComponent = React.createClass({
	render:function(){
		return (<input value={this.props.txt}/>)
	}
});

//binding it to the view/DOM
ReactDOM.render(<APP />,document.getElementById('react-app'))

})();