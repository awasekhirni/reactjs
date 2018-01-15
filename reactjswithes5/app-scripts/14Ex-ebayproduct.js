//this is without flux based architecture and just using component did mount life cycle hook 

var App = React.createClass({
	getInitialState:function(){
	 return {
		 products:[],
		 errorVal:[]
	 }	
	},
	componentDidMount:function(){
	// http calls to remote api
	var _this = this;
	this.serverRequest = axios.get('https://raw.githubusercontent.com/awasekhirni/angular2seed/master/ebaydata.json').then(function(response){
			_this.setState({
			products:response.data
			})
		}).catch(function(error){
			_this.setState({
				errorVal:error
			})
		})
										
},
	render:function(){
		return(
			<div>
				<h1>Ebay Products List </h1>
				<div>
					{this.state.products.map(function(product){
					return	(
						<div>
						<div>Name:{product.name}</div>
						<div>Description:{product.description}</div>
						<div>Image:<img src={product.image} alt=""/></div>
						<hr/>
						</div>
						)
					})}
				</div>
			</div>
		)
	}
});

//bind

ReactDOM.render(<App/>,document.getElementById('react-app'));


//?? Alternatively 
//1.Ajax calls for xhr 
//2.https://github.com/github/fetch#installation
//3.https://github.com/visionmedia/superagent