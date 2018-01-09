//iife
(function(){

var productCatalog={
    catalogTitle:'Fashion Wear Brands',
    brands:['Boss', 'Luis Vouitton', 'Arrow','Pantaloon', 'Tommy Hilfiger', 'Arbi','Levis','Jack Jones']
};
 var CatalogAPP = React.createClass({
        render:function(){
            return(
                <div>
                    <h1>Title: {this.props.data.catalogTitle}</h1>
				<hr/>
				<ol>
					 {this.props.data.brands.map(function(a){
                        return <li><Products brand={a}/></li>
                    })}
	 			</ol>
                </div>
            );
        }
    });
	//inner component
    var Products=React.createClass({
        render:function(){
            return(
                <div>{this.props.brand}</div>
            );
        }
    });

ReactDOM.render(<CatalogAPP data={productCatalog}/>,
        document.getElementById('CatalogListing'))

})();

   