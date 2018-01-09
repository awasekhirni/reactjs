(function(){
	var APP = React.createClass({
		// the default properties 
		getDefaultProps(){
			var val=786
		},
		update:function(){
			var newVal = this.props.val+1
			
		},
		componentWillMount:function(){
			//access to the properties and set the state 
			//respond to properties
			console.log("componentWillMount-Stage Component is loading")
		},
		render:function(){
			console.log('inside render: Hello World!')
			return (<button onClick={this.update}>{this.props.val} </button>)
		},
		componentDidMount:function(){
			// access to the DOM/Component as it is 
			console.log(this.getDOMNode)
			
			console.log("componentDidMount-Stage Component is loading")
		},
		componentWillUnmount:function(){
			console.log("componentUnmounted-Stage- Component unmount")
		}
	});


window.render=function(){
	ReactDOM.render(<APP val={1}/>,document.getElementById('panel'))
}

window.unmount= function(){
	ReactDOM.unmountComponentAtNode(document.getElementById('panel'))
}





})();