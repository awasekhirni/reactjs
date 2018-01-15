/**
 * Initialiazation Phase
 * 1.Initial
 * 2.GetdefaultProps
 * 3.GetInitialState
 * 4.ComponentnWillMount 
 * 5.Render 
 * 6.ComponentDidMount
 * 
 * State Changes 
 * 1.Updating State
 * 2.ShouldComponentUpdate
 * 3.ComponentWillUpdate
 * 4.Render
 * 5.ComponentDidUpdate
 * 
 * 
 * Propchanges
 * 1.updatingProps
 * 2.ComponentWillReceiveProps
 * 3.ShouldComponentUpdate
 * 4.ComponentWillUpdate
 * 5.Render
 * 6.ComponentDidUpdate
 * 
 * Unmoounting
 * 1.Unmounting
 * 2.ComponentWillUnmount
 */

var App = React.createClass({
	getInitialState:function(){
		console.log("Stage:InitialStage:::");
		return {color:'green'};
	},
	getDefaultProps:function(){
		console.log("Stage:DefaultProps:::");
		
	},
	changeColor:function(){
		this.setState({color:'grey'});
		
	},
	componentWillMount:function(){
		console.log("Stage:ComponentWillMount:::");
		
	},
	
	render:function(){
		console.log("Stage:Render:::");
		return(
			<div style={{background:this.state.color}}>
				<h1 >Component Rendering -Stages</h1>
				<ChildApp style={{color:'red'}} />
				<button onClick={this.changeColor} >Change Color Action</button>
			</div>
		)
	},
	//Post Operations of Component Loading
	componentDidMount:function(){
		console.log("Stage:ComponentDidMount:::");
		
	}, 
	// called when component state/properties changes
	shouldComponentUpdate:function(){
		console.log("Stage:ComponentUpdate:::");
		return true;
	}, 
	//called when component will Receive Props (child 2 parent)
	componentWillReceiveProps:function(){
		console.log("Stage:ComponentWillReceive:::");
		
	},
	// destroyed or timedout
	componentWillUnmount:function(){
		console.log("Stage:WillUnMount:::");
	}
});


/// another component 
var ChildApp = React.createClass({
	render:function(){
		return(
			<div>
				<h1 style={this.props.style}>Child Application</h1>
				
			</div>
		)
	}
});



window.render= function(){
	//binding 
ReactDOM.render(<App/>, document.getElementById('react-app'));
}

window.unmount= function(){
ReactDOM.unmountComponentAtNode(document.getElementById('react-app'));
}













