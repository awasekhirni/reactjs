
var Inner = React.createClass({
    render:function(){
        var styling={
            "border":"3px solid blue"
        };

        return(
            <div style={styling}>
                <h2>Inner App Component</h2>
            </div>
        )
    }
});

var Outer = React.createClass({
   render:function(){
       var Ostyling={
           "border":"6px solid red"
       };
       return(
           <div style={Ostyling}>
               <h1>OuterComponent</h1>
               <Inner/></div>
       )
   } 
});


//binding to the view 

ReactDOM.render(
    <Outer/>, document.getElementById('react-app')
);

