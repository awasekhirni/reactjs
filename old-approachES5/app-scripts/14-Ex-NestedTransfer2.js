(function(){

	var APP = React.createClass({
		render:function(){
			return (
				<div>
				<BButton className="btn-primary"> I <BHeart/> Cheap Thrills </BButton>
				<BButton className="btn-success"> I <BHeart/> Cheap Thrills </BButton>
				<BButton className="btn-danger"> I <BHeart/> Cheap Thrills </BButton>
				 </div>
				
				);
		}
	});

	var BButton = React.createClass({
		render:function(){
			return (<a className="btn btn-success">{this.props.children}</a>);
		}
	});

			var BHeart = React.createClass({
				render:function(){
					return (<div><span className="glypicon glyphicon-heart">I Love Cheap Thrills</span></div>);

				}
			});


					ReactDOM.render(<APP/>,document.getElementById('react-app'))

})();