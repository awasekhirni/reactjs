(function(){

var Component = React.createClass({
    getInitialState:function(){
        return{counter:0};
    },
    changeValue:function(){
        this.setState(
            {counter:this.state.counter+1})
    },
    render:function(){
        return (
            <div>
                Counter:<button onClick={this.changeValue}>Click me to Change:{this.state.counter}</button>
            </div>
        )
    }
});

//binding to the view 
ReactDOM.render(<Component/>,document.getElementById('react-app'));





})();