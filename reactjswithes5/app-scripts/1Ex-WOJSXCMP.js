//iife 
(function(){
    var ReactClass = React.createClass({
        render:function(){
            return React.createElement('h1',{className:'header'}, 'myComponent');
        }
    });
    var reactComponentElement = React.createElement(ReactClass);

    //binding to the DOM 
    var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-app'));

})();