(function(){
 var APP = React.createClass({
	 //setting the initial state 
 	getInitialState:function(){
 		return {txt:'', id:0}

 	},
	 //updating the state
 	updateTxt:function(e){
 		this.setState({txt:e.target.value})
 	},
 	render:function(){
 		return (
 			<div>
 			<Widget txt={this.state.txt} update={this.updateTxt}/>
 			<Widget txt={this.state.txt} update={this.updateTxt}/>
 			<Widget txt={this.state.txt} update={this.updateTxt}/>
			</div>
 			);
 	}
 });
//inner component
 var Widget = React.createClass({
 	render:function(){
 		return (
 			<div>
 			Please enter Data:<input type="text" onChange={this.props.update}/>
 			<h1>{this.props.txt}</h1>
 			</div>
 			)
 	}
 });

 ReactDOM.render(
 	<APP/>,
 	document.getElementById('app')
 	)



})();