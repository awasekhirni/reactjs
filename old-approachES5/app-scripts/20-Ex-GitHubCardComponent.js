

(function(){

	//github card component
	var GitHubCard = React.createClass({
		getInitialState:function(){
			return {};
		},
		componentDidMount:function(){
			var self = this;
			$.get('https://api.github.com/users/'+ this.props.login, function(response){
				self.setState(response);
			});
		},
		render:function(){
			return(
				<div>
				<h2>GIT Hub User Details</h2>
				<img src={this.state.avatar_url} />
				<h3>UserName: {this.state.name}</h3>
				<h3>Location: {this.state.location}</h3>
				<h3>Email: {this.state.email}</h3>
				</div>
				)
		}
	});

	//main component
	var MainComponent = React.createClass({
		getInitialState:function(){
			return {usernames: ['awasekhirni','shiva','larry','robert']}
		},
		render:function(){
			var cards = this.state.usernames.map(function(username){
				return (<GitHubCard login={username}/>);
			});
			return (
				<div>
				{cards}
				</div>
				)
			}
	});

	ReactDOM.render(<MainComponent/>, document.getElementById('react-app'));





})();


