(function(){
var APP = React.createClass({
	getInitialState: function() {
    return {
      products: []
    }
  },
	componentDidMount:function(){
		var _this = this;
		this.serverRequest= axios.get("../../data/ebaydata.json")
									.then(function(result){
										_this.setState({
												products:result.data
										});
									})
									.catch(function(error){
										console.log(error);
									})
	},
	render:function(){
		return(
			<div>
        <h1>Ebay Products List</h1>
        {this.state.products.map(function(product) {
          return (
         <div>
			<div>Product Name:{product.name}</div>
			<div>Product Image: <img src={product.image} alt=""/></div>
			<div>Product Description:{product.description}</div>
			<div>Product category:{product.category}</div>
			<div>Product price:{product.price}</div>
			<div>Product quantity:{product.quantity}</div>
			<div>Product shipping:{product.shipping}</div>
			<div>Product location:{product.location}</div>
			  <hr/>
		</div>
          );
        })}
      </div>
			)
	}
});
ReactDOM.render(<APP/>, document.getElementById('react-app'))
})();